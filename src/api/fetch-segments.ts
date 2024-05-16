import axios from 'axios'
import { getSegmentUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const fetchSegments = () => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'conversationLogic',
    },
  }

  return axios.get(getSegmentUrl, config)
}
