import axios from 'axios'
import { updateTitleDescriptionUrl } from './urls'
import { getDefaultHeaders } from './utils'

export const updateTitleAndDescription = (data: any, updateValue: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
    },
  }
  const url = updateTitleDescriptionUrl(data.id)

  return axios.post(url, updateValue, config)
}
