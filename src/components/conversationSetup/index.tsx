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
import { useStore } from "../../store";
import moment from "moment";

const ConversationSetup: FC<{ compProps: any }> = ({ compProps }) => {
  const store: any = useStore();

  const { onChangeHandler, errors, disabled } = compProps;
  const onDateChangeHandler = useCallback(
    (data) => {
      onChangeHandler({ target: data });
    },
    [onChangeHandler]
  );

  return (
    <MDBRow className="">
      {/* <MDBRow className="mb-3">
        <h4>Conversation Setup</h4>
      </MDBRow> */}
      <div className="my-3">
        <p>Bot Icon</p>

        {store?.state.botImage && (
          <MDBRow className="text-center mb-2">
            <div
              className="text-center mx-auto"
              style={{
                background: "white",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "2px solid lightgray",
              }}
            >
              <img
                className="mx-auto"
                style={{
                  height: "100px",
                  width: "150px",
                  objectFit: "contain",
                }}
                src={store?.state?.botImage}
                alt="bot-icon"
              />
            </div>
          </MDBRow>
        )}
        <MDBFile
          accept="image/png, image/jpeg"
          // size="sm"
          id="formFileSm"
          size="md"
          disabled={disabled}
          onChange={(ev) => store?.setBotIcon(ev.target?.files?.[0])}
        />
      </div>

      <div className="mb-3">
        <MDBInput
          label="Conversation Name *"
          type="text"
          onChange={onChangeHandler}
          name="name"
          style={{ background: "white" }}
          value={store?.state?.name}
          size="md"
        />
        {errors.name && (
          <div className="form-text text-danger"> {errors?.name}</div>
        )}
      </div>
      <div className="mb-3">
        <MDBTextArea
          label="Conversation Description *"
          //@ts-ignore
          onChange={onChangeHandler}
          name="description"
          value={store?.state?.description || ""}
          rows={4}
          size="md"
        />
        {/* <div className="form-text text-danger">
        Name Not Available
      </div> */}
      </div>
      <div className="mb-3">
        <MDBInput
          label="Purpose Of Conversation *"
          type="text"
          onChange={onChangeHandler}
          name="purpose"
          value={store?.state?.purpose || ""}
          size="md"
        />
        {/* <div className="form-text text-danger">
        Name Not Available
      </div> */}
      </div>
      <div className="mb-3">
        <MDBInput
          label="Start Message *"
          type="text"
          onChange={onChangeHandler}
          name="startingMessage"
          value={store?.state?.startingMessage}
          size="md"
        />
        {errors?.startingMessage && (
          <div className="form-text text-danger">Message Not Available</div>
        )}
      </div>

      <div className="mb-2">
        <MDBCheckbox
          name="flexCheck"
          checked={store?.isBroadcastBot}
          onChange={(ev) => store?.setIsBroadcastBot(ev.target.checked)}
          id="flexCheckDefault"
          label="Create Broadcast bot"
          size={5}
          defaultChecked
          disabled={disabled}
        />
      </div>
      {/* <div className="form-text text-danger">
        
        Name Not Available
      </div> */}
      <div className="mb-3">
        <MDBInput
          label="Segment Id*"
          type="text"
          size="md"
          onChange={onChangeHandler}
          name="segmentId"  
          value={store?.state?.segmentId}
          disabled={!store?.isBroadcastBot || disabled}
        />
      </div>
      <div className="mb-3">
        <ReactDatePicker
          minDate={new Date(moment().subtract(1, "days").valueOf())}
          selected={store?.state.startDate}
          className="w-100"
          onChange={(value) =>
            onDateChangeHandler({ name: "startDate", value })
          }
          customInput={<MDBInput label="Start Date*" />}
        />
      </div>
      <div>
        <ReactDatePicker
          className="w-100"
          minDate={new Date()}
          selected={store?.state.endDate}
          onChange={(value) => onDateChangeHandler({ name: "endDate", value })}
          customInput={<MDBInput label="End Date*" />}
        />
      </div>
    </MDBRow>
  );
};

export default ConversationSetup;
