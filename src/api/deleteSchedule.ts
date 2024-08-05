import axios from 'axios'
import { createBotUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const deleteSchedules = (botId: any) => {
  const url = createBotUrl + '/schedule/' + botId
  const headers = {
    ...getDefaultHeaders(),
    asset: 'bot',
  }
  return axios.delete(url, {
    headers: headers,
  })
}
