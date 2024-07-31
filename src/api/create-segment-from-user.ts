import axios from 'axios'
import { createGeographySegmentUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const createSegmentBasedOnGerography = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'userSegment',
    },
  }

  return axios.post(createGeographySegmentUrl, data, config)
}
