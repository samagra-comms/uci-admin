import { Button, Checkbox, Modal, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import axios from 'axios'
import { getDefaultHeaders } from '../../api/utils'
import { getSegmentFilters } from '../../api/get-segment-filter'
import toast from 'react-hot-toast'
import { createSegmentBasedOnGerography } from '../../api/create-segment-from-user'

const SegmentFromMultipleOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)
  const [segmentName, setSegmentName] = useState('')
  const [segmentDescription, setSegmentDescription] = useState('')
  const [selectedActor, setSelectedActor] = useState([])
  const [selectedDistricts, setSelectedDistricts] = useState([])
  const [selectedBlocks, setSelectedBlocks] = useState([])
  const [selectedSchools, setSelectedSchools] = useState([])
  // const [isDistrictSelected, setIsDistrictSelected] = useState(false)
  // const [isBlockSelected, setIsBlockSelected] = useState(false)
  // const [isSchoolSelected, setIsSchoolSelected] = useState(false)
  const [actors, setActors] = useState([])
  const [districts, setDistricts] = useState()
  const [blocks, setBlocks] = useState([])
  const [schools, setSchools] = useState([])
  const fetchUsers = async () => {
    const params: {
      actors: string
      districts: string
      blocks: string
      schools: string
    } = {
      actors: selectedActor.length > 0 ? selectedActor.join(',') : '-1',
      districts:
        selectedDistricts.length > 0 ? selectedDistricts.join(',') : '-1',
      blocks: selectedBlocks.length > 0 ? selectedBlocks.join(',') : '-1',
      schools: selectedSchools.length > 0 ? selectedSchools.join(',') : '-1',
    }

    try {
      const response = await getSegmentFilters(params)
      setActors(response?.data?.actors ?? [])
      setDistricts(response?.data?.districts ?? [])
      setBlocks(response?.data?.blocks ?? [])
      setSchools(response?.data?.schools ?? [])
    } catch (error) {
      toast.error('somethings went wrong')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [selectedActor, selectedBlocks, selectedDistricts])

  const handleCreateSegmentButton = async () => {
    try {
      const segData = {
        actors: selectedActor.length > 0 ? selectedActor : ['-1'],
        districts: selectedDistricts.length > 0 ? selectedDistricts : ['-1'],
        blocks: selectedBlocks.length > 0 ? selectedBlocks : ['-1'],
        schools: selectedSchools.length > 0 ? selectedSchools : ['-1'],
        name: segmentName.trim(),
        description: segmentDescription.trim(),
      }
      const response = await createSegmentBasedOnGerography(segData)
      console.log('ankit response is here', response)
      handleCancel()
      toast.success('Segment created successfully')
    } catch (error) {
      console.error('Error creating segment:', error)
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response

        if (status === 409 && data.error_message) {
          toast.error(`Error: ${data.error_message}`)
        } else {
          toast.error(
            `Error: ${data.error_message || 'An unexpected error occurred'}`
          )
        }
      } else if (error instanceof Error) {
        toast.error(`Error: ${error.message}`)
      } else {
        toast.error('An unexpected error occurred.')
      }
    }
  }

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
        open={isModalOpen}
        onCancel={handleCancel}
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
              handleCreateSegmentButton()
            }}
            disabled={
              selectedActor.length <= 0 || !segmentName || !segmentDescription
            }
          >
            Create
          </MDBBtn>
        </div>
        <Space
          direction="vertical"
          style={{ width: '100%', maxHeight: '500px', overflowY: 'auto' }}
        >
          {/* actor  */}
          {/* <div
            style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}
          >
            <p
              style={{
                // margin: '0 0 0 26px',
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
                  key={actor.id}
                  checked={selectedActor.includes(actor.id)}
                  onChange={() => handleActorChange(actor)}
                >
                  {actor.label}
                </Checkbox>
              ))}
            </div>
          </div> */}
          <MDBRow className="mx-1 my-2">
            <MDBInput
              label="Segment Name"
              name="name"
              value={segmentName}
              onChange={(e) => setSegmentName(e.target.value)}
            />
          </MDBRow>
          <MDBRow className="mx-1">
            <MDBInput
              label="Segment Description"
              name="description"
              value={segmentDescription}
              onChange={(e) => setSegmentDescription(e.target.value)}
            />
          </MDBRow>
          <IndividualSelection
            heading={'Actor'}
            listOfChoice={actors}
            selectedItem={selectedActor}
            handleOnChange={handleActorChange}
            showListOfChoices={true}
            // isSelected={isDistrictSelected}
            // onSelectChange={(e) => {
            //   setIsDistrictSelected(e.target.checked)
            //   if (!e.target.checked) setSelectedDistricts([])
            // }}
          />
          {/* district  */}
          <IndividualSelection
            heading={'District'}
            listOfChoice={districts}
            selectedItem={selectedDistricts}
            handleOnChange={handleDistrictChange}
            showListOfChoices={selectedActor.length > 0}
            // isSelected={isDistrictSelected}
            // onSelectChange={(e) => {
            //   setIsDistrictSelected(e.target.checked)
            //   if (!e.target.checked) setSelectedDistricts([])
            // }}
          />

          <IndividualSelection
            heading={'Block'}
            listOfChoice={blocks}
            selectedItem={selectedBlocks}
            handleOnChange={handleBlockChange}
            showListOfChoices={selectedDistricts.length > 0}
            // isSelected={isBlockSelected}
            // onSelectChange={(e) => {
            //   setIsBlockSelected(e.target.checked)
            //   if (!e.target.checked) setSelectedBlocks([])
            // }}
          />
          <IndividualSelection
            heading={'Schools'}
            listOfChoice={schools}
            selectedItem={selectedSchools}
            handleOnChange={handleSchoolChange}
            showListOfChoices={selectedBlocks.length > 0}
            // isSelected={isSchoolSelected}
            // onSelectChange={(e) => {
            //   setIsSchoolSelected(e.target.checked)
            //   if (!e.target.checked) setSelectedSchools([])
            // }}
          />
        </Space>
      </Modal>
      <label style={{ marginBottom: '4px' }}>Create Segment</label>

      <MDBBtn
        onClick={() => {
          setIsModalOpen(!isModalOpen)
        }}
        style={{ marginTop: '2px', width: '150px' }}
      >
        New Segement
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
  // isSelected,
  // onSelectChange,
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
      {/* <Checkbox
        checked={showListOfChoices}
        // checked={isSelected && showListOfChoices}
        // onChange={onSelectChange}
        disabled={!showListOfChoices}
      > */}
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
      {/* </Checkbox> */}
      {/* {showListOfChoices && isSelected && ( */}
      {showListOfChoices && (
        <div
          style={{
            border: '1px solid #aaa',
            padding: '4px 8px',
            width: '100%',
          }}
        >
          {listOfChoice.map((actor) => (
            <Checkbox
              style={{ width: '150px' }}
              key={actor.id}
              checked={selectedItem.includes(actor.id)}
              onChange={() => handleOnChange(actor.id)}
            >
              {actor.label}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  )
}

export default SegmentFromMultipleOption
