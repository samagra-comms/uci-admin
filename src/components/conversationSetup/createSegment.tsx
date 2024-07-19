import { Button, Checkbox, Modal, Space } from 'antd'
import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const SegmentFromMultipleOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  const [selectedActor, setSelectedActor] = useState([])
  const [selectedDistricts, setSelectedDistricts] = useState([])
  const [selectedBlocks, setSelectedBlocks] = useState([])
  const [selectedSchools, setSelectedSchools] = useState([])
  const [isDistrictSelected, setIsDistrictSelected] = useState(false)
  const [isBlockSelected, setIsBlockSelected] = useState(false)
  const [isSchoolSelected, setIsSchoolSelected] = useState(false)

  const actors = ['Teacher', 'Mentor', 'Examiner']
  const districts = ['Prayagraj', 'District 2', 'District 3', 'District 4']
  const blocks = ['Block 1', 'Block 2', 'Block 3', 'Block 4']
  const schools = ['School 1', 'School 2', 'School 3', 'School 4']

  const handleActorChange = (actor) => {
    const updatedActor = selectedActor.includes(actor)
      ? selectedActor.filter((d) => d !== actor)
      : [...selectedActor, actor]
    setSelectedActor(updatedActor)
    setSelectedDistricts([])
    setSelectedBlocks([])
    setSelectedSchools([])
  }

  const handleDistrictChange = (district) => {
    const updatedDistricts = selectedDistricts.includes(district)
      ? selectedDistricts.filter((d) => d !== district)
      : [...selectedDistricts, district]
    setSelectedDistricts(updatedDistricts)
    setSelectedBlocks([])
    setSelectedSchools([])
  }

  const handleBlockChange = (block) => {
    const updatedBlocks = selectedBlocks.includes(block)
      ? selectedBlocks.filter((b) => b !== block)
      : [...selectedBlocks, block]
    setSelectedBlocks(updatedBlocks)
    setSelectedSchools([])
  }

  const handleSchoolChange = (school) => {
    const updatedSchools = selectedSchools.includes(school)
      ? selectedSchools.filter((s) => s !== school)
      : [...selectedSchools, school]
    setSelectedSchools(updatedSchools)
  }
  return (
    <div>
      <Modal
        visible={isModalOpen}
        onCancel={null}
        title={null}
        footer={null}
        width={'50%'}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px',
          }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 600 }}>
              Create Segment
            </h4>
          </div>
          <MDBBtn
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            Create
          </MDBBtn>
        </div>
        <Space direction="vertical" style={{ width: '100%' }}>
          {/* actor  */}
          <div
            style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}
          >
            <p
              style={{
                margin: '0 0 0 26px',
                fontSize: '16px',
                fontWeight: 600,
                width: '80px',
              }}
            >
              Actor :
            </p>
            <div>
              {actors.map((actor) => (
                <Checkbox
                  key={actor}
                  checked={selectedActor.includes(actor)}
                  onChange={() => handleActorChange(actor)}
                >
                  {actor}
                </Checkbox>
              ))}
            </div>
          </div>
          {/* district  */}
          <IndividualSelection
            heading={'District'}
            listOfChoice={districts}
            selectedItem={selectedDistricts}
            handleOnChange={handleDistrictChange}
            showListOfChoices={selectedActor.length > 0}
            isSelected={isDistrictSelected}
            onSelectChange={(e) => {
              setIsDistrictSelected(e.target.checked)
              if (!e.target.checked) setSelectedDistricts([])
            }}
          />

          <IndividualSelection
            heading={'Block'}
            listOfChoice={blocks}
            selectedItem={selectedBlocks}
            handleOnChange={handleBlockChange}
            showListOfChoices={selectedDistricts.length > 0}
            isSelected={isBlockSelected}
            onSelectChange={(e) => {
              setIsBlockSelected(e.target.checked)
              if (!e.target.checked) setSelectedBlocks([])
            }}
          />
          <IndividualSelection
            heading={'Schools'}
            listOfChoice={schools}
            selectedItem={selectedSchools}
            handleOnChange={handleSchoolChange}
            showListOfChoices={selectedBlocks.length > 0}
            isSelected={isSchoolSelected}
            onSelectChange={(e) => {
              setIsSchoolSelected(e.target.checked)
              if (!e.target.checked) setSelectedSchools([])
            }}
          />
        </Space>
      </Modal>
      <MDBBtn
        onClick={() => {
          setIsModalOpen(!isModalOpen)
        }}
        style={{ marginTop: '6px' }}
      >
        Create Segement
      </MDBBtn>
    </div>
  )
}

const IndividualSelection = ({
  heading,
  listOfChoice,
  handleOnChange,
  selectedItem,
  showListOfChoices = false,
  isSelected,
  onSelectChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '8px 0',
        width: '100%',
      }}
    >
      <Checkbox
        checked={isSelected && showListOfChoices}
        onChange={onSelectChange}
        disabled={!showListOfChoices}
      >
        <p
          style={{
            fontSize: '16px',
            fontWeight: 600,
            width: '75px',
            margin: 0,
          }}
        >
          {heading} :
        </p>
      </Checkbox>
      {showListOfChoices && isSelected && (
        <div
          style={{
            border: '1px solid #aaa',
            padding: '4px 8px',
            width: '100%',
          }}
        >
          {listOfChoice.map((actor) => (
            <Checkbox
              key={actor}
              checked={selectedItem.includes(actor)}
              onChange={() => handleOnChange(actor)}
            >
              {actor}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  )
}

export default SegmentFromMultipleOption
