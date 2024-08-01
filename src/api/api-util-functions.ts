import moment from 'moment'
import { createBot } from './createBot'
import { useStore } from '../store'
import { createSegment } from './createSegment'
import { startConversation } from './startConversation'
import { addLogic } from './addLogic'
import { toast } from 'react-hot-toast'
import { history } from '../utils/history'
import { updateBot } from './updateBot'
import { mapToSegment } from './segment-mapping'
import { isNull, omit, omitBy } from 'lodash'
import { utcToIst } from '../utils/timeConverter'

export const onBotCreate = async () => {
  const store: any = useStore.getState()
  store.startLoading()

  const reqObj = {
    ...(omit(store?.state, ['isPinned']) as any),
    tags: store?.state?.tags?.split(','),
    // isPinned: store?.state?.isPinned,
    meta: {
      isPinned: store?.state?.isPinned,
    },
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
    description: store?.state?.name + '_description',
    purpose: store?.state?.name + '_purpose',
    startingMessage: store?.state?.name + '_startingMessage',
  }
  store?.userSegments.forEach((userSegment) => {
    reqObj.users.push(userSegment.id)
  })
  store?.conversationLogic.forEach((logic) => {
    reqObj.logic.push(logic.id)
  })
  if (reqObj.startDate) {
    reqObj.startDate = moment(reqObj.startDate).format('YYYY-MM-DD')
    reqObj.startDate = store?.state?.scheduleTime
  }
  if (reqObj.endDate) {
    reqObj.endDate = moment(reqObj.endDate).format('YYYY-MM-DD')
  }
  // if (isNavigateToEnd) {
  //   reqObj.name += " Broadcast";
  //   reqObj.startingMessage += " Broadcast";
  // }

  store?.startLoading()
  var formdata = new FormData()
  //@ts-ignore

  if (store?.state?.useDefaultIcon) {
    const response = await fetch('/assets/defaultLogo.jpg') // Adjust the path as necessary
    const blob = await response.blob() // Convert the response to a Blob
    formdata.append('botImage', blob, 'defaultLogo.jpg')
  } else {
    formdata.append('botImage', store?.botIcon, store?.botIcon?.name)
  }
  formdata.append('data', JSON.stringify({ data: reqObj }))

  createBot(formdata)
    .then((res) => {
      store?.setConversationBot({
        ...res.data.result,
        text: store?.state?.name + '_startingMessage',
        botId: res.data.result.id,
      })
      if (store?.isBroadcastBot) {
        onMappingBotToSegment({
          queryParams: {
            text: reqObj.startingMessage,
            botId: res.data.result.id,
          },
        })
          .then((res) => {
            if (store?.isBroadcastBot) {
              onSegmentCreate()
            } else {
              store?.stopLoading()
              store.onReset()
              history.navigate('/success')
            }
          })
          .catch((err) => {
            toast.error(err?.message)
            store.stopLoading()
          })
      }
    })
    .catch((err) => {
      store?.stopLoading()
      toast.error(err?.response?.data?.message || err?.message)
    })
}

export const onSegmentCreate = () => {
  const store: any = useStore.getState()
  const segData = {
    name: store?.state.name,
    all: {
      type: 'get',
      config: {
        url: `${process.env.REACT_APP_user_segment_url}/v2/segments/${store?.state.segmentId}/mentors?deepLink=nipunlakshya://chatbot?botId=${store?.conversationBot?.id}`,
        type: 'GET',
        cadence: {
          perPage: store?.cadencePerPage || 100,
          retries: 5,
          timeout: 60,
          concurrent: true,
          pagination: true,
          concurrency: 10,
          'retries-interval': 10,
        },
        pageParam: 'page',
        credentials: {},
        totalRecords: store?.segmentCount,
      },
    },
    byID: {},
    byPhone: {},
  }
  segData.byID = segData.all
  segData.byPhone = segData.all
  createSegment(segData)
    .then((res) => {
      store?.setUserSegments([...store?.userSegments, res.data])
      onCreateBroadcastBotLogic()
    })
    .catch((err) => {
      store?.stopLoading()
      toast.error(`Error occured in creating segment: ${err.message}`)
    })
}

export const onStartConversation = (bot) => {
  const store: any = useStore.getState()

  const scheduledTimeUTC = store?.state?.scheduleTime
  const scheduledTimeIST = utcToIst(scheduledTimeUTC)
  const currentTimeIST = new Date()

  // console.log('Scheduled Time IST:', scheduledTimeIST)
  // console.log('Scheduled Time UTC:', scheduledTimeUTC)
  // console.log('Current Time IST:', currentTimeIST)
  let scheduled
  if (scheduledTimeIST <= currentTimeIST) {
    toast.success('Notification Triggered')
  } else {
    toast.success(`Notification scheduled`)
    scheduled = scheduledTimeUTC
  }
  startConversation(bot, scheduled)
    // .then((res) => {
    //   store.stopLoading();
    //   store.onReset();
    //   history.navigate("/success");
    //   // console.log("debug:12")
    //   // if (store?.isBroadcastBot) {
    //   //   console.log("debug:13")
    //   //   if (isNavigateToEnd) {
    //   //     console.log("debug:14")
    //   //     onAfterBotSubmit({
    //   //       queryParams: { text: store?.state?.startingMessage, botId: bot.id },
    //   //     });
    //   //   } else {
    //   //     console.log("debug:15")
    //   //     onSegmentCreate();
    //   //   }
    //   // } else {
    //   //   console.log("debug:16")
    //   //   store.onReset();
    //   //   history.navigate("/success");
    //   // }
    // })
    .catch((err) => {
      store?.stopLoading()
      toast.error(`Error Occured in Starting bot: ${err.message}`)
    })
  store.stopLoading()
  store.onReset()
  history.navigate('/success')
}

export const onAfterBotSubmit = (extras) => {
  const store: any = useStore.getState()
  const mappingData = {
    segmentId: store?.state?.segmentId,
    botId: store.conversationBot.botId,
  }

  mapToSegment(mappingData)
    .then((res) => {
      store.stopLoading()
      store.onReset()
      history.navigate('/success')
    })
    .catch((err) => {
      toast.error(err?.message)
      store.stopLoading()
    })
}

export const onMappingBotToSegment = (extras) => {
  const store: any = useStore.getState()
  const mappingData = {
    segmentId: store?.state?.segmentId,
    botId: store.conversationBot.botId,
  }
  return mapToSegment(mappingData)
}

export const onCreateBroadcastBotLogic = () => {
  const store: any = useStore.getState()
  for (const botLogic of store?.conversationLogic) {
    const newBotLogic = {
      ...botLogic,
      adapter: process.env.REACT_APP_broadcastAdapterId,
      transformers: [
        {
          id: '774cd134-6657-4688-85f6-6338e2323dde',
          meta: {
            type: 'broadcast',
            data: { botId: store?.conversationBot.id },
            title: store?.conversationLogic?.[0]?.name,
            body:
              store?.conversationLogic?.[0]?.description ||
              store?.state?.description ||
              '',
            formID: localStorage.getItem('formID'),
            form: 'https://hosted.my.form.here.com/',
            serviceClass: 'SurveyService',
            hiddenFields: [
              {
                name: 'mobilePhone',
                path: 'mobilePhone',
                type: 'param',
                config: {
                  dataObjName: 'user',
                },
              },
            ],
            templateType: 'JS_TEMPLATE_LITERALS',
          },
        },
      ],
    }
    // eslint-disable-next-line no-loop-func
    addLogic({ data: newBotLogic })
      .then((res) => {
        const existingLogic = botLogic
        delete existingLogic.id
        store?.setBroadcastBotLogics([
          ...store?.broadcastBotLogics,
          { id: res.data.result.id, ...existingLogic },
        ])

        setTimeout(() => {
          const _store: any = useStore.getState()
          if (
            _store?.conversationLogic.length <=
            _store?.broadcastBotLogics.length
          ) {
            _store?.setConversationLogic(_store?.broadcastBotLogics)
            setTimeout(() => {
              onBroadcastBotCreate()
            }, 10)
          }
        }, 20)
      })
      .catch((err) => {
        toast.error(
          `Error occured in creating broadcast bot logic: ${err.message}`
        )
        store?.stopLoading()
      })
  }
}

export const onBroadcastBotCreate = async () => {
  const store: any = useStore.getState()
  store.startLoading()

  const reqObj = {
    ...(omit(store?.state, ['isPinned']) as any),
    tags: store?.state?.tags?.split(','),
    // isPinned: store?.state?.isPinned,
    meta: {
      isPinned: store?.state?.isPinned,
    },
    description: store?.state?.name + '_description',
    purpose: store?.state?.purpose + '_purpose',
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
  }
  store?.userSegments.forEach((userSegment) => {
    reqObj.users.push(userSegment.id)
  })
  store?.conversationLogic.forEach((logic) => {
    reqObj.logic.push(logic.id)
  })
  if (reqObj.startDate) {
    reqObj.startDate = moment(reqObj.startDate).format('YYYY-MM-DD')
  }
  if (reqObj.endDate) {
    reqObj.endDate = moment(reqObj.endDate).format('YYYY-MM-DD')
  }

  reqObj.name += ' Broadcast'
  reqObj.startingMessage += ' Broadcast'

  // store?.startLoading();
  var formdata = new FormData()
  if (store?.state?.useDefaultIcon) {
    const response = await fetch('/assets/defaultLogo.jpg') // Adjust the path as necessary
    const blob = await response.blob() // Convert the response to a Blob
    formdata.append('botImage', blob, 'defaultLogo.jpg')
  } else {
    formdata.append('botImage', store?.botIcon, store?.botIcon?.name)
  }

  formdata.append('data', JSON.stringify({ data: reqObj }))

  console.log('debug', { reqObj })
  createBot(formdata)
    .then((res) => {
      onStartConversation(res?.data?.result)
    })
    .catch((err) => {
      store?.stopLoading()
      toast.error(err?.response?.data?.message || err?.message)
    })
}

export const onBotUpdate = () => {
  const store: any = useStore.getState()
  store?.startLoading()
  const reqObj = {
    ...store?.editState,

    meta: Object.keys(store?.editState)?.includes('isPinned')
      ? { isPinned: store?.editState?.isPinned ?? false }
      : null,
    tags: Object.keys(store?.editState)?.includes('tags')
      ? store?.editState?.tags?.split(',').filter((tag) => tag !== '')
      : null,
    id: store.state.id,
  }

  const _reqObj = omitBy(reqObj, isNull)

  if (_reqObj.startDate) {
    _reqObj.startDate = moment(_reqObj.startDate).format('YYYY-MM-DD')
  }
  if (_reqObj.endDate) {
    _reqObj.endDate = moment(_reqObj.endDate).format('YYYY-MM-DD')
  }

  store?.startLoading()

  updateBot(omit(_reqObj, ['isPinned']))
    .then((res) => {
      store?.stopLoading()
      toast.success('Bot Updated')
      store.stopLoading()
      store.onReset()
      history.navigate('/success', { replace: true })
    })
    .catch((err) => {
      store?.stopLoading()
      console.log({ err })
    })
}
