import axios from 'axios'
import { createCsvSegmentUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const createSegmentFromCsv = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'userSegment',
    },
  }

  return axios.post(createCsvSegmentUrl, data, config)
}
