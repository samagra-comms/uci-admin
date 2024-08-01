import React, { FC, useCallback, useState } from 'react'
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdb-react-ui-kit'
import { toast } from 'react-hot-toast'
import { getBotUrl } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store'
import { updateBot } from '../../api/updateBot'
import { deleteBot } from '../../api/deleteBot'
import { removeBotsFromNl } from '../../api/removeBotsfromNl'
import { startConversation } from '../../api/startConversation'
import ConfirmationModal from './confirmation-modal'
import UpdateTitleDesciptionModal from './updateTitleDesc'
import { utcToIst } from '../../utils/timeConverter'

export const Table: FC<{ data: Array<any> }> = ({ data }) => {
  const [showConfimationModal, setShowConfirmationModal] =
    useState<boolean>(false)
  const [showUpdateNotificationModal, setShowUpdateNotificationModal] =
    useState<boolean>(false)
  const [selectedBot, setSelectedBot] = useState(null)
  const navigate = useNavigate()
  const store: any = useStore()
  const [phoneNumber, setPhoneNumber] = useState(
    process.env.REACT_APP_botPhoneNumber || ''
  )
  const onCopy = useCallback(
    (textToCopy: string) => () => {
      navigator.clipboard.writeText(textToCopy)
      toast.success('Successfully Copied')
    },
    []
  )

  const onEdit = useCallback(
    (data) => {
      const updatedData = { ...data, isPinned: data?.meta?.isPinned ?? false }
      localStorage.setItem('botToEdit', JSON.stringify(updatedData))
      store?.setBotToEdit({ ...data, isPinned: data?.meta?.isPinned ?? false })
      store?.setConversationLogic(data?.logicIDs)
      setTimeout(
        () =>
          navigate(`/add-bot?bot=${data.id}`, {
            state: { ...data, isPinned: data?.meta?.isPinned ?? false },
          }),
        20
      )
    },
    [navigate, store]
  )

  const onEnable = useCallback(
    (data) => {
      store.startLoading()
      const newValue = {
        id: data.id,
        status: data.status === 'DISABLED' ? 'ENABLED' : 'DISABLED',
      }

      updateBot(newValue)
        .then((res) => {
          store.stopLoading()
          const toastMsg =
            data.status === 'DISABLED'
              ? 'Bot Enabled Succesfully'
              : 'Bot Disabled Succesfully'
          toast.success(toastMsg)
          window.location.reload()
        })
        .catch((err) => {
          store.stopLoading()
          toast.error(`Error occured in updating bot-${err.message}`)
          console.log({ err })
        })
    },
    [store]
  )

  const onDelete = useCallback(
    (bot) => {
      store.startLoading()
      const data = {
        botId: bot.id,
      }

      deleteBot(data)
        .then((res) => {
          store.stopLoading()
          // toast.success('Bot Deleted Succesfully');
          // window.location.reload();

          removeBotsFromNl(res.data.result).then((res) => {
            toast.success(
              `Bots succesfully removed from NL-${
                res?.data?.data?.delete_segment_bots?.affected_rows || 0
              }`
            )
            setTimeout(() => {
              window.location.reload()
            }, 3000)
          })
        })
        .catch((err) => {
          store.stopLoading()
          toast.error(`Error occured in updating bot-${err.message}`)
          console.log({ err })
        })
    },
    [store]
  )

  const onResendNotification = useCallback(
    (bot) => {
      toast.success(`Notification Triggered`)
      startConversation(bot).catch((err) => {
        toast.error(err.message)
        store.stopLoading()
      })
    },
    [store]
  )

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'ENABLED':
        return 'success'
      case 'DISABLED':
        return 'danger'
      case '':
      default:
        return 'primary'
    }
  }, [])

  return (
    <MDBTable align="middle" small>
      {/* modal to confirm the retrigger of notification */}
      <ConfirmationModal
        visible={showConfimationModal}
        onCancel={() => {
          setShowConfirmationModal(false)
        }}
        onEdit={() => {
          setShowUpdateNotificationModal(true)
          setShowConfirmationModal(false)
        }}
        onRetriggerButtonClick={() => {
          if (selectedBot) {
            onResendNotification(selectedBot)
          }
        }}
      />
      {/* modal to update tile and notification */}
      <UpdateTitleDesciptionModal
        open={showUpdateNotificationModal}
        handleClose={setShowUpdateNotificationModal}
        onRetriggerButtonClick={() => {
          if (selectedBot) {
            onResendNotification(selectedBot)
          }
        }}
        currentBot={selectedBot}
      />
      <MDBTableHead>
        <tr>
          <th scope="col" className="fw-bold ">
            Name
          </th>
          <th scope="col" className="fw-bold ">
            Status
          </th>
          <th scope="col" className="fw-bold ">
            Description
          </th>
          <th scope="col" className="fw-bold ">
            Starting Message
          </th>
          <th scope="col" className="fw-bold ">
            Bot URL
          </th>
          <th scope="col" className="fw-bold ">
            Bot ID
          </th>
          <th scope="col" className="fw-bold ">
            Action
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((record, index) => {
          return (
            <tr key={record?.id}>
              <td>
                <p className="fw-bold ">{record?.name}</p>
              </td>
              <td>
                <MDBBadge
                  color={
                    record?.meta?.isPinned
                      ? 'primary'
                      : getStatusColor(record?.status)
                  }
                  pill
                >
                  {record?.meta?.isPinned
                    ? 'Pinned'
                    : record?.status === 'ENABLED'
                    ? 'Active'
                    : record?.status}
                </MDBBadge>
              </td>
              <td>
                <p className="">
                  {record?.description || 'No Description Provided'}
                </p>
              </td>
              <td>
                <p className="">{record?.startingMessage}</p>
              </td>

              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(
                    getBotUrl({
                      startingMessage: record?.startingMessage,
                      phoneNumber,
                    })
                  )}
                >
                  <MDBIcon
                    fas
                    icon="copy"
                    style={{ fontSize: '18px', color: '#4F4F4F' }}
                  />
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(record?.id)}
                >
                  <MDBIcon
                    fas
                    icon="copy"
                    style={{ fontSize: '18px', color: '#4F4F4F' }}
                  />
                </MDBBtn>
              </td>
              <td className="no-icon">
                <MDBDropdown group dropright className="shadow-0">
                  <MDBDropdownToggle color="link">
                    <MDBIcon
                      fas
                      icon="ellipsis-v"
                      style={{ fontSize: '18px', color: '#4F4F4F' }}
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault()
                        onEdit(record)
                      }}
                    >
                      Edit
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault()
                        onEnable(record)
                      }}
                    >
                      {record?.status === 'DISABLED' ? 'Enable' : 'Disable'}
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault()
                        onDelete(record)
                      }}
                    >
                      Delete Bot
                    </MDBDropdownItem>
                    {/* <MDBDropdownItem
                      link
                      childTag="button"
                      disabled={!record.name.includes('Broadcast')}
                      onClick={(ev) => {
                        ev.preventDefault()
                        record.name.includes('Broadcast') &&
                          onResendNotification(record)
                      }}
                    >
                      Trigger Notification
                    </MDBDropdownItem> */}

                    <MDBDropdownItem
                      link
                      childTag="button"
                      disabled={
                        !record?.name?.includes('Broadcast') ||
                        new Date() <=
                          utcToIst(record?.schedules?.[0]?.scheduledAt)
                      }
                      onClick={(ev) => {
                        ev.preventDefault()
                        if (record.name.includes('Broadcast')) {
                          setSelectedBot(record)
                          setShowConfirmationModal(true)
                        }
                      }}
                    >
                      Edit and Re-trigger Notification
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </td>
            </tr>
          )
        })}
      </MDBTableBody>
    </MDBTable>
  )
}
