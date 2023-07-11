import React, { FC, useCallback, useMemo, useState } from "react";
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
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import { uploadForm } from "../../api/uploadForm";
import { addLogic } from "../../api/addLogic";
import { omitBy, isNull } from "lodash";
import { getUploadErrorMsg } from "../../utils";
const AddLogicModal: FC<any> = ({
  open,
  activeLogic = {},
  setConversationLogic,
  onToggle,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [logics, setLogics] = useState<any>([]);
  const [form, setForm] = useState(null);
  const [media, setMedia] = useState(null);
  const [formId, setFormId] = useState("");
  const [modalState, setModalState] = useState<any>({ ...activeLogic });

  const onSubmitHandler = useCallback(() => {}, []);

  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setModalState((prev: any) => ({
        ...prev,
        [ev.target.name]: ev.target.value,
      }));
    },
    []
  );

  const onClose = useCallback(() => {
    setModalState({});
    onToggle();
  }, [onToggle]);

  const onLogicAdd = useCallback(() => {
    const data = {
      ...modalState,
      transformers: [
        {
          id: process.env.REACT_APP_LOGIC_TRANSFORMER_ID,
          meta: {
            form: process.env.REACT_APP_HOSTED_FORM_URL,
            formID: formId,
            title: modalState.name,
            body: modalState.description,
            serviceClass: "SurveyService",
            hiddenFields: [
              {
                name: "mobilePhone",
                path: "mobilePhone",
                type: "param",
                config: {
                  dataObjName: "user",
                },
              },
            ],
            templateType: "JS_TEMPLATE_LITERALS",
          },
        },
      ],
      adapter: process.env.REACT_APP_adapterId,
    };


    addLogic({ data })
      .then((res) => {
        const newLogic = [...logics, { ...res.data.result }];
        setLogics(newLogic);
        setConversationLogic(newLogic);
        toast.success("Logic Added..");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    onClose();
  }, [formId, logics, modalState, onClose, setConversationLogic]);

  const onOdkFormChange = useCallback((event: any) => {
    if (!event.target.files.length) {
      toast.error("No File Selected");
    }
    setForm(event.target.files[0]);
  }, []);

  const onMediaChange = useCallback((event: any) => {
    if (!event.target.files.length) {
      toast.error("No File Selected");
    }
    setMedia(event.target.files);
  }, []);

  const onFormUpload = useCallback(
    (ev: any) => {
      ev.preventDefault();
      setIsLoading(true);
      uploadForm(omitBy({ form, media }, isNull))
        .then((res) => {
          if(res?.data?.result?.status==='ERROR'){
           toast.error(`${getUploadErrorMsg(res?.data?.result?.errorCode)}`) 
          }else{
            localStorage.setItem("formID",res?.data?.result?.data?.formID)
            setFormId(res?.data?.result?.data?.formID);
            toast.success("Succesfully Uploaded");
            
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message || "Something Went Wrong");
        });
    },
    [form, media]
  );

  const isSubmitDisabled = useMemo(
    () =>
      formId === "" ||
      form === null ||
      Object.values(modalState).some(
        (v) => v === "" || v === undefined || v === null
      ),
    [form, formId, modalState]
  );

  if (!open) return null;
  return (
    <>
      <MDBModal show={open} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBContainer>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add Conversation Logic</MDBModalTitle>
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
                        label="Name"
                        name="name"
                        value={modalState.name}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBInput
                        label="Description"
                        name="description" 
                        value={modalState.description}
                        onChange={onChangeHandler}
                      />
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBFile
                        label="Upload ODK Form (.xml)"
                        accept=".xml"
                        size="sm"
                        id="formFileSm"
                        name="file"
                        onChange={onOdkFormChange}
                      />
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBFile
                        label="Upload Media"
                        // accept="image/png, image/jpeg"
                        size="sm"
                        id="formFileSm"
                        onChange={onMediaChange}
                      />
                    </MDBRow>
                    <MDBRow>
                      <MDBCol></MDBCol>
                      <MDBCol className="d-flex justify-content-end">
                        <MDBBtn
                          size="sm"
                          onClick={onFormUpload}
                          disabled={form === null || isLoading}
                        >
                          {isLoading ? (
                            <MDBSpinner
                              className="mx-2"
                              size="sm"
                              color="secondary"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </MDBSpinner>
                          ) : (
                            "Upload Form"
                          )}
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </form>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={onClose}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={onLogicAdd} disabled={isSubmitDisabled}>
                  Add
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBContainer>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddLogicModal;
