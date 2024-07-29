import React, { FC, useCallback, useMemo, useState } from 'react'
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
  MDBFile,
  MDBContainer,
  MDBCol,
  MDBSpinner,
  MDBIcon,
  MDBTextArea,
} from 'mdb-react-ui-kit'
import { toast } from 'react-hot-toast'
import { uploadForm } from '../../api/uploadForm'
import { addLogic } from '../../api/addLogic'
import { omitBy, isNull } from 'lodash'
import { getUploadErrorMsg } from '../../utils'
import { useStore } from '../../store'
import './style.css'
import FileModal from '../fileModal'

const UpdateTitleDesciptionModal: FC<any> = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [logics, setLogics] = useState<any>([])
  const [form, setForm] = useState(null)
  const [media, setMedia] = useState(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [cadencePerPage, setCadencePerPage] = useState(100)
  const [formId, setFormId] = useState('')
  const store: any = useStore()
  const onSubmitHandler = useCallback(() => {}, [])
  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
    []
  )

  const onClose = useCallback(() => {
    setForm(null)
    setMedia(null)
    setFormId('')
  }, [])

  const onLogicAdd = useCallback(() => {
    const data = {}

    addLogic({ data })
      .then((res) => {
        const newLogic = [...logics, { ...res.data.result }]
        setLogics(newLogic)
        toast.success('Logic Added..')
      })
      .catch((err) => {
        toast.error(err.message)
      })

    onClose()
  }, [formId, logics, onClose])

  const onOdkFormChange = useCallback((event: any) => {
    if (!event.target.files.length) {
      toast.error('No File Selected')
    }
    setForm(event.target.files[0])
  }, [])

  const onMediaChange = useCallback((event: any) => {
    const files = Array.from(event.target.files)
    if (!files.length) {
      toast.error('No File Selected')
    }
    setMedia(files)
  }, [])

  const onFormUpload = useCallback(
    async (ev: any) => {
      ev.preventDefault()
        .then((res) => {
          if (res?.data?.result?.status === 'ERROR') {
            toast.error(`${getUploadErrorMsg(res?.data?.result?.errorCode)}`)
          } else {
            localStorage.setItem('formID', res?.data?.result?.data?.formID)
            setFormId(res?.data?.result?.data?.formID)
            toast.success('Succesfully Uploaded')
          }
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          toast.error(err.message || 'Something Went Wrong')
        })
    },
    [form, media, store?.state?.name]
  )

  const onCadenceChange = useCallback(
    (ev) => {
      setCadencePerPage(Number(ev.target.value))
      store?.setCadencePerPage(Number(ev.target.value))
    },
    [store]
  )

  // Handle file selection
  const handleFileChange = (e) => {
    if (!e.target.files.length) {
      toast.error('No File Selected')
    }
    const files = Array.from(e.target.files)
    setMedia(files)
  }

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
                <form onSubmit={onSubmitHandler}>
                  <MDBContainer>
                    <MDBRow className="mb-3">
                      <MDBInput
                        label="Notification title"
                        name="name"
                        value={''}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBInput
                        label="Notification Description"
                        name="description"
                        value={''}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                  </MDBContainer>
                </form>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={onClose}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={onLogicAdd}>Add</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBContainer>
        </MDBModalDialog>
      </MDBModal>
      <FileModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  )
}

export default UpdateTitleDesciptionModal
