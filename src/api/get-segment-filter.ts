import axios from 'axios'
import { getSegmentFiltersUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const getSegmentFilters = async (params) => {
  const url = getSegmentFiltersUrl

  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'bot',
    },
    params,
  }
  return await axios.get(url, config)
}
