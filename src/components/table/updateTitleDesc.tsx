import React, { useCallback, useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBInput,
  MDBContainer,
} from 'mdb-react-ui-kit'
import { toast } from 'react-hot-toast'
import { updateTitleAndDescription } from '../../api/updatenotification'
import { getUploadErrorMsg } from '../../utils'

const UpdateTitleDesciptionModal = ({
  open,
  handleClose,
  onRetriggerButtonClick,
  currentBot,
}: {
  open: boolean
  handleClose: (val: boolean) => void
  onRetriggerButtonClick: () => void
  currentBot: any
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  useEffect(() => {
    if (currentBot?.logicIDs?.[0].transformers?.[0]?.meta) {
      setFormData({
        title: currentBot?.logicIDs?.[0].transformers?.[0]?.meta?.title || '',
        description:
          currentBot?.logicIDs?.[0].transformers?.[0]?.meta?.body || '',
      })
    }
  }, [currentBot])

  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = ev.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    },
    []
  )
  const onClose = () => handleClose(false)
  const handleRetrigger = useCallback(
    async (ev: React.FormEvent) => {
      ev.preventDefault()
      try {
        const response = await updateTitleAndDescription(currentBot, formData)

        console.log(response)

        const { data } = response
        if (data?.status === 'ERROR') {
          toast.error(`${getUploadErrorMsg(data.errorCode)}`)
        } else {
          toast.success('Bot Successfully Updated')
          onRetriggerButtonClick()
        }
      } catch (err) {
        toast.error((err as Error).message || 'Something Went Wrong')
      } finally {
        handleClose(false)
      }
    },
    [currentBot, handleClose, formData]
  )

  if (!open) return null
  return (
    <>
      <MDBModal show={open} tabIndex="-1" onHide={onClose}>
        <MDBModalDialog size="lg">
          <MDBContainer>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Update Title and Desciption</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={onClose}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleRetrigger}>
                  <MDBContainer>
                    <MDBRow className="mb-3">
                      <MDBInput
                        label="Notification Title"
                        name="title"
                        value={formData.title}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBInput
                        label="Notification Description"
                        name="description"
                        value={formData.description}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                  </MDBContainer>

                  <MDBModalFooter>
                    <MDBBtn
                      color="secondary"
                      onClick={() => handleClose(false)}
                    >
                      Cancel
                    </MDBBtn>
                    <MDBBtn type="submit">Update and Retrigger</MDBBtn>
                  </MDBModalFooter>
                </form>
              </MDBModalBody>
            </MDBModalContent>
          </MDBContainer>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default UpdateTitleDesciptionModal
