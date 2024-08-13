import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useStore } from '../../store'
import { fetchSegments } from '../../api/fetch-segments'

const MultiselectDropDown = ({ onChange, disable }: any) => {
  const store: any = useStore()
  const [selectedOptions, setSelectedOptions] = useState([])
  const [segments, setSegments] = useState([])

  const getSegment = async () => {
    fetchSegments().then((res: any) => {
      setSegments(res?.data)
    })
  }

  useEffect(() => {
    getSegment()
  }, [])

  useEffect(() => {
    if (!disable) return
    // This effect runs when segments are updated
    if (segments.length > 0) {
      const selectedIds = store?.state?.segmentId?.split(',') || []
      const selectedOptions = segments.filter((option) =>
        selectedIds.includes(option.id.toString())
      )
      setSelectedOptions(selectedOptions)
    }
  }, [segments, segments, store?.state?.segmentId])

  const handleChange = (selected) => {
    onChange(selected.map((option) => option.id).join(','))
    setSelectedOptions(selected)
  }

  return (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      isMulti
      isSearchable
      name="colors"
      options={segments}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option?.id?.toString()}
      className="basic-multi-select"
      classNamePrefix="select"
      isDisabled={disable}
      // styles={{
      //   control: (provided) => ({
      //     ...provided,

      //     width: '100%',
      //   }),
      // }}
    />
  )
}

export default MultiselectDropDown
