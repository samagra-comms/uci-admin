/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { omit } from "lodash";
import { Step, Stepper } from "react-form-stepper";

import { checkDuplicateName } from "../../api/checkDupliacteName";
import AddLogicModal from "../../components/addLogicModal";

import { getSegmentCount } from "../../api/getSegmentCount";
import { toast } from "react-hot-toast";

import ConversationSetup from "../../components/conversationSetup";
import ConversationFlow from "../../components/conversationFlow";
import { useSearchParams } from "react-router-dom";
import { onBotCreate, onBotUpdate } from "../../api/api-util-functions";
import { useStore } from "../../store";
import { getBotById } from "../../api/getBotById";
import { isSmsObjValid, isWebObjValid, isWhatsappObjValid } from "../../utils/check-error";
import { onSmsBotCreate } from "../../utils/trigger-sms-bot";

export const Add = () => {
  const store = useStore();

  const [searchParams] = useSearchParams();
  const [isStep1, setIsStep1] = useState(true);

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const onToggle = useCallback(() => setOpen((prev) => !prev), []);

  const isEditParamAvailable = useMemo(
    () => (searchParams.get("bot") ? true : false),
    [searchParams]
  );

  const onChangeHandler = useCallback(
    (ev) => {
      if (isEditParamAvailable) {
        store.setEditState({
          ...store.editState,
          [ev.target.name]: ev.target.value,
        });
      }
      store.setState({ ...store.state, [ev.target.name]: ev.target.value });
    },
    [store, isEditParamAvailable]
  );

  const onSubmitHandler = useCallback(
    (ev) => {
      ev.preventDefault();
      if (isEditParamAvailable) onBotUpdate();
      else onBotCreate(false, false);
    },
    [isEditParamAvailable]
  );

  useEffect(() => {
    if (searchParams.get("bot")) {
      getBotById(searchParams.get("bot"))
        .then((res) => {
          const data = {
            // ...store?.state,
            ...res.data.result,
            startDate: new Date(res?.data?.result?.startDate),
            endDate: new Date(res?.data?.result?.endDate),
            description: res?.data?.result?.description || "",
            purpose: res?.data?.result?.purpose || "",
          };
          console.log("venom res vv:", { data });
          store?.setState({
            ...data,
          });
          store?.setBotToEdit(data);
          store?.setConversationLogic(data?.logicIDs);
          store?.setBotIcon(data?.botImage);
        })
        .catch((error) => {
          console.log("venom", { error });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchParams,
    store?.setState,
    store?.setBotToEdit,
    store?.setConversationLogic,
    store?.setBotIcon,
  ]);

  const onCheckDuplicateName = useCallback(
    ({ name }) => {
      if (name !== "" && name !== store?.botToEdit?.name) {
        checkDuplicateName({
          name,
        }).then((res) => {
          if (res?.data?.result?.data?.length > 0) {
            setErrors((prev) => ({ ...prev, name: "Name Not Available" }));
          } else {
            setErrors((prev) => ({ ...prev, name: null }));
          }
        });
      }
    },
    [store?.botToEdit]
  );

  const onCheckDuplicateStartingMsg = useCallback(
    ({ startingMessage }) => {
      if (
        startingMessage !== "" &&
        startingMessage !== store?.botToEdit?.startingMessage
      )
        checkDuplicateName({
          startingMessage,
        }).then((res) => {
          if (res?.data?.result?.data?.length > 0) {
            setErrors((prev) => ({
              ...prev,
              startingMessage: "Staring Message Not Available",
            }));
          } else {
            setErrors((prev) => ({ ...prev, startingMessage: null }));
          }
        });
    },
    [store?.botToEdit?.startingMessage]
  );

  useEffect(() => {
    onCheckDuplicateName({ name: store?.state.name });
    onCheckDuplicateStartingMsg({
      startingMessage: store?.state.startingMessage,
    });
    return () => {
      setErrors({});
    };
  }, [
    onCheckDuplicateName,
    onCheckDuplicateStartingMsg,
    store?.state?.name,
    store?.state.startingMessage,
    store?.state,
  ]);

  useEffect(() => {
    if (store?.state.segmentId)
      getSegmentCount(store?.state.segmentId)
        .then((res) => {
          store?.setSegmentCount(res.data.totalCount || 100);
        })
        .catch((err) => {
          toast.error(
            err.message || "Something went wrong in fetching segment count"
          );
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store?.state.segmentId, store?.setSegmentCount]);

  const compProps = useMemo(
    () => ({
      state: store?.state,
      onChangeHandler,
      errors,
      disabled: isEditParamAvailable,
      isBroadcastBot: store?.isBroadcastBot,
      setIsBroadcastBot: store?.setIsBroadcastBot,
      setBotIcon: store?.setBotIcon,
    }),
    [
      errors,
      isEditParamAvailable,
      onChangeHandler,
      store?.isBroadcastBot,
      store?.setBotIcon,
      store?.setIsBroadcastBot,
      store?.state,
    ]
  );
  const step2CompProps = useMemo(
    () => ({
      conversationLogic: store?.conversationLogic,
      onToggle,
      disabled: isEditParamAvailable,
    }),
    [store?.conversationLogic, onToggle, isEditParamAvailable]
  );

  const notificationMedium = useMemo(
    () => store?.state?.notificationMedium,
    [store?.state?.notificationMedium]
  );

  console.log({notificationMedium})

  const isNextDisabled = useMemo(() => {
    
    if (isEditParamAvailable) {
      return false;
    }
    if (notificationMedium === "sms") {
     return isSmsObjValid(errors)
    }
    if (notificationMedium === "whatsapp") {
      return isWhatsappObjValid(errors)
    }
    return isWebObjValid(errors)
  }, [isEditParamAvailable, notificationMedium, errors]);


  const onNextClick =useCallback((ev) => {
    ev.preventDefault();
    if(notificationMedium==='sms'){
      onSmsBotCreate()
    }
   else setIsStep1((prev) => !prev);
  },[notificationMedium])

  return (
    <MDBContainer style={{ margin: 0, height: "100vh", overflow: "scroll" }}>
      <MDBRow className="mt-3">
        <>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/">Home</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Add Conversation</MDBBreadcrumbItem>
          </MDBBreadcrumb>

          <Stepper>
            <Step label="Conversation Setup" active={isStep1} />
            <Step label="Conversation FLow" active={!isStep1} />
          </Stepper>
          <MDBRow className="my-5">
            <MDBCol md="2"></MDBCol>
            <MDBCol md="8">
              <form onSubmit={(ev) => ev.preventDefault()}>
                {isStep1 ? (
                  <ConversationSetup compProps={compProps} />
                ) : (
                  <ConversationFlow compProps={step2CompProps} />
                )}

                <MDBRow className="my-3">
                  <MDBCol md="3" className="d-flex">
                    <MDBBtn
                      onClick={onNextClick}
                      disabled={isStep1 ? isNextDisabled : false}
                    >
                      {isStep1 ? "Next" : "Previous"}
                    </MDBBtn>
                  </MDBCol>

                  {!isStep1 && (
                    <MDBCol className="d-flex justify-content-end">
                      <MDBBtn
                        onClick={onSubmitHandler}
                        disabled={store?.conversationLogic.length === 0}
                      >
                        {isEditParamAvailable ? "Update" : "Submit"}
                      </MDBBtn>
                    </MDBCol>
                  )}
                </MDBRow>
              </form>
            </MDBCol>
            <MDBCol md="2"></MDBCol>
          </MDBRow>
          <AddLogicModal
            open={open}
            onToggle={onToggle}
            activeLogic={store?.activeLogic}
            setConversationLogic={store?.setConversationLogic}
          />
        </>
      </MDBRow>
    </MDBContainer>
  );
};
