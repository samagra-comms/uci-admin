import { useState } from 'react'
import Select from 'react-select'

const MultiselectDropDown = ({ dropDownOptions, onChange }: any) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = (selected) => {
    console.log('Selected options', selected)
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
      options={dropDownOptions}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id.toString()}
      className="basic-multi-select"
      classNamePrefix="select"
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
