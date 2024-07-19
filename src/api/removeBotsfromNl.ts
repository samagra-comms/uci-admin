import axios from 'axios'
import { removeBotsFromNlurl } from './urls'
import { getDefaultHeaders } from './utils'

export const removeBotsFromNl = (ids: string[]) => {
  const url = `${removeBotsFromNlurl}?bot_ids=${ids.join()}`
  const headers = {
    ...getDefaultHeaders(),
  }

  return axios.delete(url, {
    headers,
  })
}
