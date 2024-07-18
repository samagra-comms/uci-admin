import axios from 'axios'
import {
  getStartConversationUrl,
  getStartConversationScheduleUrl,
} from './urls'
import { getDefaultHeaders } from './utils'

export const startConversation = (data: any, scheduleTime?: string) => {
  let url
  if (scheduleTime) {
    url = getStartConversationScheduleUrl(data.id, scheduleTime)
  } else {
    url = getStartConversationUrl(data.id)
  }
  console.log('function to get url with time is callled', url)

  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'bot',
    },
  }
  return axios.get(url, config)
}
