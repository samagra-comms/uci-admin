import {
  MDBCheckbox,
  MDBCol,
  MDBFile,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React, { FC, useCallback } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const getBotBaseUrl=(name:string)=>`https://cdn.samagra.io/pdf-make-outputs/${name}?X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJZSlo2S0dPOVJFRUNSV1FFTFBRTCIsImFwcGxpY2F0aW9uSWQiOiIyMDExYTZjOS03ZmI3LTQzMDYtOGM2ZC1jOTZjYjA3Yzc4NTkiLCJhdWQiOiIyMDExYTZjOS03ZmI3LTQzMDYtOGM2ZC1jOTZjYjA3Yzc4NTkiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImV4cCI6IjE2ODYyMjc3NDUiLCJpYXQiOjE2ODYyMjQxNDUsImlzcyI6ImFjbWUuY29tIiwianRpIjoiODE2MjJmN2QtMDFmMi00OTRlLTgzZDgtNWNkMDcyODk0NDdmIiwicG9saWN5IjoicGRmLW1ha2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwZGYtbWFrZS1jZG4iLCJyb2xlcyI6WyJwZGYtbWFrZSJdLCJzdWIiOiIyZjZjYjA1OC1mZjYzLTRjMmUtOGQyNC1jOTg5YWIyNjY0OTcifQ.yJFtgzK0zNK3SLvBhnvuj6TxWKroYXwdmQQTtWzCV3fUJNarxQV-tmuNcEXdY6QNJUXfLsZncOGRnXZZ9S5-7g&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YJZ6KGO9REECRWQELPQL%2F20230608%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230608T113547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e22541eb0753f5b61121e817f7a526a886f42657cdd6ff9ed86194cb35fb9add`;

const ConversationSetup: FC<{ compProps: any }> = ({ compProps }) => {
  const {
    state,
    onChangeHandler,
    errors,
    isBroadcastBot,
    setIsBroadcastBot,
    setBotIcon,
  } = compProps;

  const onDateChangeHandler = useCallback(
    (data) => {
      onChangeHandler({ target: data });
    },
    [onChangeHandler]
  );

  return (
    <MDBRow className="">
      <MDBRow className="mb-3">
        <h4>Conversation Setup</h4>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBInput
          label="Conversation Name *"
          type="text"
          onChange={onChangeHandler}
          name="name"
          value={state?.name}
          size='lg'
        />
        {errors.name && (
          <div className="form-text text-danger"> {errors?.name}</div>
        )}
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBTextArea
          label="Conversation Description *"
          //@ts-ignore
          onChange={onChangeHandler}
          name="description"
          value={state?.description || ''}
          rows={4}
          size='lg'
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
          value={state?.purpose || ''}
          size='lg'
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
          size='lg'
        />
        {errors?.startingMessage && (
          <div className="form-text text-danger">Message Not Available</div>
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
          size='lg'
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
          <ReactDatePicker
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
          <ReactDatePicker
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
          // size="sm"
          id="formFileSm"
          size='lg'
          onChange={(ev) => setBotIcon(ev.target?.files?.[0])}
        />
      </MDBRow>
     {/* {state.botImage && <MDBRow className="text-center">
        <img className="mx-auto" style={{height:'100px' ,width:'150px'}} src={'https://cdn.samagra.io/pdf-make-outputs/cba36091-581b-40a5-963e-957b552f6139.png?X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJZSlo2S0dPOVJFRUNSV1FFTFBRTCIsImFwcGxpY2F0aW9uSWQiOiIyMDExYTZjOS03ZmI3LTQzMDYtOGM2ZC1jOTZjYjA3Yzc4NTkiLCJhdWQiOiIyMDExYTZjOS03ZmI3LTQzMDYtOGM2ZC1jOTZjYjA3Yzc4NTkiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImV4cCI6IjE2ODYyMjc3NDUiLCJpYXQiOjE2ODYyMjQxNDUsImlzcyI6ImFjbWUuY29tIiwianRpIjoiODE2MjJmN2QtMDFmMi00OTRlLTgzZDgtNWNkMDcyODk0NDdmIiwicG9saWN5IjoicGRmLW1ha2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwZGYtbWFrZS1jZG4iLCJyb2xlcyI6WyJwZGYtbWFrZSJdLCJzdWIiOiIyZjZjYjA1OC1mZjYzLTRjMmUtOGQyNC1jOTg5YWIyNjY0OTcifQ.yJFtgzK0zNK3SLvBhnvuj6TxWKroYXwdmQQTtWzCV3fUJNarxQV-tmuNcEXdY6QNJUXfLsZncOGRnXZZ9S5-7g&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YJZ6KGO9REECRWQELPQL%2F20230608%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230608T113547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e22541eb0753f5b61121e817f7a526a886f42657cdd6ff9ed86194cb35fb9add'} alt="bot-icon"/>
      </MDBRow>} */}
    </MDBRow>
  );
};

export default ConversationSetup;
