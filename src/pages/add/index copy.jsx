/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useEffect, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBFile,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Step, Stepper } from "react-form-stepper";
import * as Yup from "yup";
import { checkDuplicateName } from "../../api/checkDupliacteName";
import AddLogicModal from "../../components/addLogicModal";
import { Table } from "../../components/table";
import { getSegmentCount } from "../../api/getSegmentCount";
import { toast } from "react-hot-toast";
import moment from "moment";
import { createBot } from "../../api/createBot";
import { createSegment } from "../../api/createSegment";
import { addLogic } from "../../api/addLogic";
import { startConversation } from "../../api/startConversation";
import emptyList from '../../assets/images/empty.svg';

const StepOnechema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const AddBot = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    purpose: "",
    segmentId: null,
    status: "enabled",
    startDate: new Date(),
    endDate: new Date(),
    startingMessage: "",
  });

  const [isBroadcastBot, setIsBroadcastBot] = useState(true);
  const [isLoaderShow, setisLoaderShow] = useState(false);
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

  const onDateChangeHandler = useCallback(
    (data) => {
      setState((prev) => ({ ...prev, [data.name]: data.value }));
    },
    [setState]
  );

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
          setisLoaderShow(false);
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
  }, [broadcastBotLogics, conversationBot.id, conversationLogic, onBotCreate]);

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

      setisLoaderShow(true);

      // if (this.conversationId) {
      //   this.uciService.botUpdate(this.conversationId, {data: reqObj}).subscribe(
      //     data => {
      //       this.closeVerifyModal();
      //       this.isLoaderShow = false;
      //       this.afterBotSubmit({queryParams: {text: reqObj.startingMessage, botId: this.conversationId}});
      //     }, error => {
      //       this.isLoaderShow = false;
      //       this.verifyAllItemsModal = true;
      //       this.allChecked = false;
      //       if (error.result && error.result.error) {
      //         this.toasterService.error(error.result.error);
      //       }
      //     }
      //   );
      // }

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
            setisLoaderShow(false);

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

          // //  -------------start
          //  setConversationBot(res?.data?.result);
          //  if (isBroadcastBot) {
          //    if (isNavigateToEnd) {
          //     setConversationBot({...res.data.result,text:state.startingMessage,botId:res.data.result.id});

          //      // this.afterBotSubmit({queryParams: {text: reqObj.startingMessage, botId: data.id}});
          //    }
          //    if(isTriggerBot){
          //     onStartConversation(res?.data?.result)
          //    }

          //    else {
          //      onSegmentCreate();
          //    }
          //  } else {
          //    // this.router.navigate(['uci-admin/success'], {queryParams: {text: reqObj.startingMessage, botId: data.id}});
          //  }

          //---------end
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

  return (
    <MDBContainer className="mt-5">
      <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a href='/dashboard'>Home</a>
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
            {isStep1 && (
              <MDBRow>
                <MDBRow>
                  <h4>Conversation Setup</h4>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBInput
                    label="Conversation Name *"
                    type="text"
                    onChange={onChangeHandler}
                    name="name"
                    value={state?.name}
                  />
                  {errors.name && (
                    <div className="form-text text-danger"> {errors?.name}</div>
                  )}
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBTextArea
                    label="Conversation Description *"
                    type="text"
                    //@ts-ignore
                    onChange={onChangeHandler}
                    name="description"
                    value={state?.description}
                    rows={4}
                  />
                  {/* <div className="form-text text-danger">
                    Name Not Available
                  </div> */}
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBInput
                    label="Purpose Of Conversation *"
                    type="text"
                    onChange={onChangeHandler}
                    name="purpose"
                    value={state?.purpose}
                  />
                  {/* <div className="form-text text-danger">
                    Name Not Available
                  </div> */}
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBInput
                    label="Start Message *"
                    type="text"
                    onChange={onChangeHandler}
                    name="startingMessage"
                    value={state?.startingMessage}
                  />
                  {errors?.startingMessage && (
                    <div className="form-text text-danger">
                      Message Not Available
                    </div>
                  )}
                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBCheckbox
                    className="mb-2"
                    name="flexCheck"
                    checked={isBroadcastBot}
                    onChange={(ev) => setIsBroadcastBot(ev.target.checked)}
                    id="flexCheckDefault"
                    label="Create Broadcast bot"
                    defaultChecked
                  />
                  <MDBInput
                    label="Segment Id*"
                    type="text"
                    onChange={onChangeHandler}
                    name="segmentId"
                    value={state?.segmentId}
                    disabled={!isBroadcastBot}
                  />
                  {/* <div className="form-text text-danger">
                    
                    Name Not Available
                  </div> */}
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol className="p-0">
                    <DatePicker
                      minDate={new Date()}
                      selected={state.startDate}
                      className="w-100"
                      onChange={(value) =>
                        onDateChangeHandler({ name: "startDate", value })
                      }
                      customInput={<MDBInput label="Start Date*" />}
                    />
                  </MDBCol>
                  <MDBCol className="p-0 ">
                    <DatePicker
                      minDate={new Date()}
                      selected={state.endDate}
                      onChange={(value) =>
                        onDateChangeHandler({ name: "endDate", value })
                      }
                      customInput={<MDBInput label="End Date*" />}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBFile
                    label="Bot Icon"
                    accept="image/png, image/jpeg"
                    size="sm"
                    id="formFileSm"
                    onChange={(ev) => setBotIcon(ev.target?.files?.[0])}
                  />
                </MDBRow>
              </MDBRow>
            )}
            {!isStep1 && (
              <MDBRow>
                <h4>Conversation Flow</h4>
                {conversationLogic.length === 0 ? (
                  <>
                  <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol className="d-flex justify-content-end">
                      <MDBBtn size="sm" onClick={onToggle}>
                        Add Logic
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                   <img alt="empty" src={emptyList} height="200px"/>
                   <h5 className="text-center my-3">No Logic Added</h5>
                  </MDBRow>
                  </>
                ) : (
                  <MDBContainer>
                    <MDBRow className="mb-3">
                      <MDBCol></MDBCol>
                      <MDBCol className="d-flex justify-content-end">
                        <MDBBtn size="sm" onClick={onToggle}>
                          Add Logic
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <MDBTable>
                      <MDBTableHead>
                        <tr>
                          <th scope="col" className="fw-bold mb-1">
                            Step
                          </th>
                          <th scope="col" className="fw-bold mb-1">
                            Name
                          </th>
                          <th scope="col" className="fw-bold mb-1">
                            Description
                          </th>
                          <th scope="col" className="fw-bold mb-1">
                            Action
                          </th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {conversationLogic?.map((logic, index) => (
                          <tr key={logic?.id}>
                            <td>
                              <p className="fw-bold mb-1">{index + 1}</p>
                            </td>
                            <td>
                              <p className="fw-bold mb-1">{logic?.name}</p>
                            </td>
                            <td>
                              <p className="fw-bold mb-1">
                                {logic?.description || "N/A"}
                              </p>
                            </td>
                            <td>
                              <p className="fw-bold mb-1">Action</p>
                            </td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </MDBContainer>
                )}
              </MDBRow>
            )}

            <MDBRow className="my-3">
              <MDBCol md="3" className="d-flex">
                <MDBBtn
                  onClick={(ev) => {
                    ev.preventDefault();
                    setIsStep1((prev) => !prev);
                  }}
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
