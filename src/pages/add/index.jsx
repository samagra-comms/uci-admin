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
import {omit} from 'lodash'
import { Step, Stepper } from "react-form-stepper";

import { checkDuplicateName } from "../../api/checkDupliacteName";
import AddLogicModal from "../../components/addLogicModal";

import { getSegmentCount } from "../../api/getSegmentCount";
import { toast } from "react-hot-toast";


import ConversationSetup from "../../components/conversationSetup";
import ConversationFlow from "../../components/conversationFlow";
import { useLocation, useSearchParams } from "react-router-dom";
import { onBotCreate } from "../../api/api-util-functions";
import { useStore } from "../../store";

export const Add = () => {
  const store=useStore();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const [isStep1, setIsStep1] = useState(true);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  
  const [isEdit, setIsEdit] = useState(false);
  const onToggle = useCallback(() => setOpen((prev) => !prev), []);

  const onChangeHandler = useCallback(
    (ev) => {
     store.setState({ ...store.state, [ev.target.name]: ev.target.value} );
    },
    [store]
  );

  const onSubmitHandler = useCallback((ev) => {
    ev.preventDefault();
  }, []);

  const isEditParamAvailable = useMemo(
    () => searchParams.get("edit") === "true",
    [searchParams]
  );

  useEffect(() => {
    if (isEditParamAvailable) {
      setIsEdit(true);
      var data;
      if (location.state) {
        data = location.state;
      } else if (localStorage.getItem("botToEdit")) {
        data = JSON.parse(localStorage.getItem("botToEdit"));
      }
     store?.setState({
        ...store?.state,
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        description: data.description || "",
        purpose: data.purpose || "",
      });
    }
  }, [isEditParamAvailable, location.state, store?.state,store?.setState]);

  const onCheckDuplicateName = useCallback(({ name }) => {
    if (name !== "")
      checkDuplicateName({
        name,
      }).then((res) => {
        console.log({ res });
        if (res?.data?.result?.data?.length > 0) {
          setErrors((prev) => ({ ...prev, name: "Name Not Available" }));
        } else {
          setErrors((prev) => ({ ...prev, name: null }));
        }
      });
  }, []);

  const onCheckDuplicateStartingMsg = useCallback(({ startingMessage }) => {
    if (startingMessage !== "")
      checkDuplicateName({
        startingMessage,
      }).then((res) => {
        console.log({ res });
        if (res?.data?.result?.data?.length > 0) {
          setErrors((prev) => ({
            ...prev,
            startingMessage: "Staring Message Not Available",
          }));
        } else {
          setErrors((prev) => ({ ...prev, startingMessage: null }));
        }
      });
  }, []);

  useEffect(() => {
    onCheckDuplicateName({ name: store?.state.name });
    onCheckDuplicateStartingMsg({ startingMessage:store?.state.startingMessage });
  }, [
    onCheckDuplicateName,
    onCheckDuplicateStartingMsg,
    store?.state?.name,
    store?.state.startingMessage,
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
  }, [store?.state.segmentId,store?.setSegmentCount]);

  const compProps = useMemo(
    () => ({
      state:store?.state,
      onChangeHandler,
      errors,
      isBroadcastBot:store?.isBroadcastBot,
      setIsBroadcastBot:store?.setIsBroadcastBot,
      setBotIcon:store?.setBotIcon,
    }),
    [errors,onChangeHandler, store]
  );
  const step2CompProps = useMemo(
    () => ({ conversationLogic:store?.conversationLogic, onToggle }),
    [store?.conversationLogic, onToggle]
  );

  const isNextDisabled = useMemo(
    () =>
      Object.values(errors).some((v) => v !== null) ||
      Object.values(store?.isBroadcastBot ? store?.state : omit(store?.state,['segmentId'])).some(
        (v) => v === "" || v === undefined || v === null
      ) ||
      store?.botIcon === "" ||
     store?.botIcon === null,
    [errors, store?.state, store?.botIcon,store?.isBroadcastBot]
  );
  return (
    <MDBContainer style={{margin:0,height:'100vh',overflow:'scroll'}}>
      <MDBRow>
        <>
      
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <a href="/dashboard">Home</a>
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
          <form onSubmit={onSubmitHandler}>
            {isStep1 && <ConversationSetup compProps={compProps} />}
            {!isStep1 && <ConversationFlow compProps={step2CompProps} />}

            <MDBRow className="my-3">
              <MDBCol md="3" className="d-flex">
                <MDBBtn
                  onClick={(ev) => {
                    ev.preventDefault();
                    setIsStep1((prev) => !prev);
                  }}
                  disabled={isStep1 ? isNextDisabled : false}
                >
                  {isStep1 ? "Next" : "Previous"}
                </MDBBtn>
              </MDBCol>

              {!isStep1 && (
                <MDBCol className="d-flex justify-content-end">
                  <MDBBtn
                    onClick={(ev) => {
                      ev.preventDefault();
                      onBotCreate(false, false)}}
                    disabled={store?.conversationLogic.length === 0}
                  >
                    Submit
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


