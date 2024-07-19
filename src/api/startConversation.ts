import axios from 'axios'
import { getStartConversationUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const startConversation = (data: any, scheduleTime?: string) => {
  let url = getStartConversationUrl(data.id)
  if (scheduleTime) {
    url += `?triggerTime=${encodeURIComponent(scheduleTime)}`
  }

  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'bot',
    },
  }
  return axios.get(url, config)
}
