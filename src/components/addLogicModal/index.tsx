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
  const [modalState, setModalState] = useState<any>({  ...activeLogic });

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

  const onLogicAdd = useCallback(() => {
    const data = {
      ...modalState,
      transformers: [
        {
          id: "774cd134-6657-4688-85f6-6338e2323dde",
          meta: {
            form: "https://hosted.my.form.here.com",
            formID: formId,
            title: modalState.name,
            body: modalState.description,
          },
        },
      ],
      adapter: process.env.REACT_APP_adapterId,
    };

    addLogic({ data })
      .then((res) => {
        console.log({ res });
        const newLogic = [...logics, { ...res.data.result }];
        setLogics(newLogic);
        setConversationLogic(newLogic);
        toast.success("Logic Added..");
      })
      .catch((err) => {
        console.log({ err });
        toast.error(err.message);
      });
    // const newLogics = [...logics, modalState];
    //@ts-ignore
    // setLogics(newLogic);
    // setConversationLogic(newLogic);
    // setModalState({ name: "", description: "",id:'' });
    onToggle();
  }, [formId, logics, modalState, onToggle, setConversationLogic]);

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
      uploadForm({ form, media })
        .then((res) => {
          setFormId(res?.data?.result?.data?.formID);
          toast.success("Succesfully Uploaded");
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message || "Something Went Wrong");
          console.log({ err });
        });
    },
    [form, media]
  );

  const isSubmitDisabled =useMemo(()=> formId==="" || media===null || form === null || Object.values(modalState).some((v) =>  v === "" || v === undefined || v === null),[form, formId, media, modalState])
  console.log({modalState})
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
                  onClick={onToggle}
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
                        <MDBBtn size="sm" onClick={onFormUpload} disabled={form===null}>
                          {isLoading ? (
                            <MDBSpinner className="mx-2" size="sm" color="secondary">
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
                <MDBBtn color="secondary" onClick={onToggle}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={onLogicAdd} disabled={isSubmitDisabled}>Add</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBContainer>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddLogicModal;
