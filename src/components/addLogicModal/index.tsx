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
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import { uploadForm } from "../../api/uploadForm";
import { addLogic } from "../../api/addLogic";
import { omitBy, isNull } from "lodash";
import { getUploadErrorMsg } from "../../utils";
import { useStore } from "../../store";
import "./style.css";
import FileModal from "../fileModal";

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [cadencePerPage, setCadencePerPage] = useState(100);
  const [formId, setFormId] = useState("");
  const [modalState, setModalState] = useState<any>({ ...activeLogic });
  const store: any = useStore();
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
    const files = Array.from(event.target.files);
    if (!files.length) {
      toast.error("No File Selected");
    }
    setMedia(files);
  }, []);

  const onFormUpload = useCallback(
    (ev: any) => {
      ev.preventDefault();
      setIsLoading(true);
      uploadForm(omitBy({ form, media }, isNull))
        .then((res) => {
          if (res?.data?.result?.status === "ERROR") {
            toast.error(`${getUploadErrorMsg(res?.data?.result?.errorCode)}`);
          } else {
            localStorage.setItem("formID", res?.data?.result?.data?.formID);
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

  const onCadenceChange = useCallback(
    (ev) => {
      setCadencePerPage(Number(ev.target.value));
      store?.setCadencePerPage(Number(ev.target.value));
    },
    [store]
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

  // Handle file selection
  const handleFileChange = (e) => {
    if (!e.target.files.length) {
      toast.error("No File Selected");
    }
    const files = Array.from(e.target.files);
    setMedia(files);
  };

  // Handle file removal
  const handleFileRemove = (fileName) => {
    //setIsDeleteModalOpen(true)
    setMedia((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.name !== fileName)
    );
  };

  const confirmDelete = (ev, fileName) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this media?"
    );
    if (shouldDelete) {
      handleFileRemove(fileName);
    } else {
      ev.preventDefault();
    }
  };

  console.log({ media });

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
                      <label className="text-muted label">
                        Cadence Records Per Page
                      </label>
                      <select
                        className="form-control"
                        value={cadencePerPage}
                        onChange={onCadenceChange}
                      >
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                      </select>
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
                        multiple
                        // onChange={onMediaChange}

                        onChange={handleFileChange}
                        accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx"
                      />
                    </MDBRow>
                    <MDBRow className="p-0">
                      {/* {renderSelectedFiles()}  */}
                      <div className="file-picker mb-2">
                        <div className="selected-files">
                          {media?.length > 0 ? (
                            media.map((file) => (
                              <div
                                key={file.name}
                                className="d-flex justify-content-between mb-2 border p-1 align-items-center"
                              >
                                <span>
                                 
                                  <MDBIcon far icon="file" /> {file.name}
                                </span>

                                {/* <button
                                  className="remove-btn"
                                  onClick={(ev) => confirmDelete(ev,file.name)}
                                >
                                  <MDBIcon fas icon="times" />
                                </button> */}

                                <MDBBtn
                                  tag="a"
                                  color="none"
                                  className="m-1"
                                  style={{ color: "#ff4444" }}
                                  onClick={(ev) => confirmDelete(ev,file.name)}
                                >
                                  <MDBIcon fas icon="trash-alt" />
                                </MDBBtn>
                              </div>
                            ))
                          ) : (
                            <p>No files selected.</p>
                          )}
                        </div>
                      </div>
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
      <FileModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};

export default AddLogicModal;
