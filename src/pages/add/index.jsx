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

import { Step, Stepper } from "react-form-stepper";

import { checkDuplicateName } from "../../api/checkDupliacteName";
import AddLogicModal from "../../components/addLogicModal";

import { getSegmentCount } from "../../api/getSegmentCount";
import { toast } from "react-hot-toast";
import moment from "moment";
import { createBot } from "../../api/createBot";
import { createSegment } from "../../api/createSegment";
import { addLogic } from "../../api/addLogic";
import { startConversation } from "../../api/startConversation";

import ConversationSetup from "../../components/conversationSetup";
import ConversationFlow from "../../components/conversationFlow";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

const AddBot = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    purpose: "",
    segmentId: null,
    status: "enabled",
    startDate: new Date(),
    endDate: null,
    startingMessage: "",
  });
  const { setIsLoading } = useAppContext();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const [isBroadcastBot, setIsBroadcastBot] = useState(true);

  const [segmentCount, setSegmentCount] = useState(100);
  const [conversationLogic, setConversationLogic] = useState([]);
  const [conversationBot, setConversationBot] = useState({ id: "" });
  const [isStep1, setIsStep1] = useState(true);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [activeLogic, setActiveLogic] = useState({});
  const [botIcon, setBotIcon] = useState("");
  const [userSegments, setUserSegments] = useState([]);
  const [broadcastBotLogics, setBroadcastBotLogics] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const onToggle = useCallback(() => setOpen((prev) => !prev), []);

  const onChangeHandler = useCallback(
    (ev) => {
      setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    },
    [setState]
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
      setState((prev) => ({
        ...prev,
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        description: data.description || "",
        purpose: data.purpose || "",
      }));
    }
  }, [isEditParamAvailable, location.state]);

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
    onCheckDuplicateName({ name: state.name });
    onCheckDuplicateStartingMsg({ startingMessage: state.startingMessage });
  }, [
    onCheckDuplicateName,
    onCheckDuplicateStartingMsg,
    state.name,
    state.startingMessage,
  ]);

  

  useEffect(() => {
    if (state.segmentId)
      getSegmentCount(state.segmentId)
        .then((res) => {
          setSegmentCount(res.data.totalCount || 100);
        })
        .catch((err) => {
          toast.error(
            err.message || "Something went wrong in fetching segment count"
          );
        });
  }, [state.segmentId]);

  //@ts-ignore
  var onCreateBroadcastBotLogic = useCallback(() => {
    for (const botLogic of conversationLogic) {
      const newBotLogic = {
        ...botLogic,
        adapter: process.env.REACT_APP_broadcastAdapterId,
        transformers: [
          {
            meta: { type: "broadcast", data: { botId: conversationBot.id } },
          },
        ],
      };
      // eslint-disable-next-line no-loop-func
      addLogic({ data: newBotLogic })
        .then((res) => {
          console.log("onCreateBroadcastBotLogic", { res });
          setIsLoading(false);
          const existingLogic = botLogic;
          delete existingLogic.id;
          setBroadcastBotLogics((prev) => [
            ...prev,
            { id: res.data.result.id, ...existingLogic },
          ]);

          if (conversationLogic.length <= broadcastBotLogics.length) {
            setConversationLogic(broadcastBotLogics);
            onBotCreate(true, true);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [broadcastBotLogics, conversationBot.id, conversationLogic, onBotCreate, setIsLoading]);

  //@ts-ignore
  var onSegmentCreate = useCallback(() => {
    const segData = {
      name: state.name,
      all: {
        type: "get",
        config: {
          url: `${process.env.REACT_APP_user_segment_url}/segments/${state.segmentId}/mentors?deepLink=nipunlakshya://chatbot?botId=${conversationBot.id}`,
          type: "GET",
          cadence: {
            perPage: 100,
            retries: 5,
            timeout: 60,
            concurrent: true,
            pagination: true,
            concurrency: 10,
            "retries-interval": 10,
          },
          pageParam: "page",
          credentials: {},
          totalRecords: segmentCount,
        },
      },
      byID: {},
      byPhone: {},
    };
    segData.byID = segData.all;
    segData.byPhone = segData.all;
    createSegment(segData)
      .then((res) => {
        console.log("segmentCreate", { res });
        setUserSegments((prev) => [...prev, res.data]);
        onCreateBroadcastBotLogic();
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [
    conversationBot.id,
    onCreateBroadcastBotLogic,
    segmentCount,
    state.name,
    state.segmentId,
  ]);

  var onAfterBotSubmit = useCallback(
    (extras) => {
      const mappingData = {
        segmentId: parseInt(this.conversationForm.value.segmentId, 10),
        botId: conversationBot.botId || conversationBot.id,
      };

      // this.uciService.nlSegmentBotMapping(mappingData).subscribe(
      //   data => {
      //     this.router.navigate(['uci-admin/success'], extras);
      //   }
      // );
    },
    [conversationBot.botId, conversationBot.id]
  );

  var onBotCreate = useCallback(
    (isTriggerBot = false, isNavigateToEnd = false, ev) => {
      ev?.preventDefault();
      const userSegments = [];
      const reqObj = {
        ...state,
        isBroadcastBotEnabled: isBroadcastBot,
        users: [],
        logic: [],
      };
      userSegments.forEach((userSegment) => {
        reqObj.users.push(userSegment.id);
      });
      conversationLogic.forEach((logic) => {
        reqObj.logic.push(logic.id);
      });
      if (reqObj.startDate) {
        reqObj.startDate = moment(reqObj.startDate).format("YYYY-MM-DD");
      }
      if (reqObj.endDate) {
        reqObj.endDate = moment(reqObj.endDate).format("YYYY-MM-DD");
      }
      if (isNavigateToEnd) {
        reqObj.name += " Broadcast";
        reqObj.startingMessage += " Broadcast";
      }

      setIsLoading(true);
      var formdata = new FormData();
      //@ts-ignore
      formdata.append("botImage", botIcon, botIcon?.name);
      formdata.append("data", JSON.stringify({ data: reqObj }));

      createBot(formdata)
        .then((res) => {
          console.log("botCreate", { res });

          if (!isNavigateToEnd) {
            setConversationBot({
              ...res.data.result,
              text: state.startingMessage,
              botId: res.data.result.id,
            });
          }
          if (isTriggerBot) {
            onStartConversation(res?.data?.result, isNavigateToEnd);
          } else {
            // this.closeVerifyModal();
            setIsLoading(false);

            if (isBroadcastBot) {
              if (isNavigateToEnd) {
                onAfterBotSubmit({
                  queryParams: {
                    text: reqObj.startingMessage,
                    botId: res.data.result.id,
                  },
                });
              } else {
                onSegmentCreate();
              }
            } else {
              //  this.router.navigate(['uci-admin/success'], {queryParams: {text: reqObj.startingMessage, botId: data.id}});
            }
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    //@ts-ignore
    [
      botIcon,
      conversationLogic,
      isBroadcastBot,
      onAfterBotSubmit,
      onSegmentCreate,
      onStartConversation,
      setIsLoading,
      state,
    ]
  );

  //@ts-ignore
  var afterBroadcastBotLogic = useCallback(() => {
    if (conversationLogic.length <= broadcastBotLogics.length) {
      setConversationLogic(broadcastBotLogics);
      onBotCreate(true, true);
    }
  }, [broadcastBotLogics, conversationLogic.length, onBotCreate]);
  //const onBotCreate =useCallback((isTriggerBot = false,isNavigateToEnd=false,ev:any) => {
  //@ts-ignore

  var onStartConversation = useCallback(
    (bot, isNavigateToEnd = false) => {
      startConversation(bot)
        .then((res) => {
          console.log("startConversation:", { res });
          if (isBroadcastBot) {
            if (isNavigateToEnd) {
              // this.afterBotSubmit({queryParams: {text: this.conversationForm.value.startingMessage, botId: bot.id}});
            } else {
              onSegmentCreate();
            }
          } else {
            this.router.navigate(["uci-admin/success"]);
          }
        })
        .catch((err) => {});
    },
    [isBroadcastBot, onSegmentCreate]
  );

  const compProps = useMemo(
    () => ({
      state,
      onChangeHandler,
      errors,
      isBroadcastBot,
      setIsBroadcastBot,
      setBotIcon,
    }),
    [errors, isBroadcastBot, onChangeHandler, state]
  );
  const step2CompProps = useMemo(
    () => ({ conversationLogic, onToggle }),
    [conversationLogic, onToggle]
  );

  const isNextDisabled = useMemo(
    () =>
      Object.values(errors).some((v) => v !== null) ||
      Object.values(state).some(
        (v) => v === "" || v === undefined || v === null
      ) ||
      botIcon === "" ||
      botIcon === null,
    [errors, state, botIcon]
  );
  return (
    <MDBContainer className="mt-3  p-2">
      <>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <a href="/dashboard">Home</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Add Conversation</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </>
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
                    onClick={(ev) => onBotCreate(false, false, ev)}
                    disabled={conversationLogic.length === 0}
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
        activeLogic={activeLogic}
        setConversationLogic={setConversationLogic}
      />
    </MDBContainer>
  );
};

export default AddBot;
