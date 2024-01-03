import React, { FC, useCallback, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import { getBotUrl } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { updateBot } from "../../api/updateBot";
import { deleteBot } from "../../api/deleteBot";
import { removeBotsFromNl } from "../../api/removeBotsfromNl";
import { startConversation } from "../../api/startConversation";

export const Table: FC<{ data: Array<any> }> = ({ data }) => {
  const navigate = useNavigate();
  const store: any = useStore();
  const [phoneNumber, setPhoneNumber] = useState(
    process.env.REACT_APP_botPhoneNumber || ""
  );
  const onCopy = useCallback(
    (textToCopy: string) => () => {
      navigator.clipboard.writeText(textToCopy);
      toast.success("Successfully Copied");
    },
    []
  );

  const onEdit = useCallback(
    (data) => {
      localStorage.setItem("botToEdit", JSON.stringify(data));
      store?.setBotToEdit(data);
      store?.setConversationLogic(data?.logicIDs);
      setTimeout(
        () => navigate(`/add-bot?bot=${data.id}`, { state: data }),
        20
      );
    },
    [navigate, store]
  );

  const onEnable = useCallback(
    (data) => {
      store.startLoading();
      const newValue = {
        id: data.id,
        status: data.status === "DISABLED" ? "ENABLED" : "DISABLED",
      };

      updateBot(newValue)
        .then((res) => {
          store.stopLoading();
          const toastMsg =
            data.status === "DISABLED"
              ? "Bot Enabled Succesfully"
              : "Bot Disabled Succesfully";
          toast.success(toastMsg);
          window.location.reload();
        })
        .catch((err) => {
          store.stopLoading();
          toast.error(`Error occured in updating bot-${err.message}`);
          console.log({ err });
        });
    },
    [store]
  );

  const onDelete=useCallback((bot)=>{
    store.startLoading();
    const data = {
      "botId": bot.id,
    };

    deleteBot(data)
      .then((res) => {
        store.stopLoading();
       // toast.success('Bot Deleted Succesfully');
       // window.location.reload();

        removeBotsFromNl(res.data.result)
        .then((res) => {
          toast.success(
            `Bots succesfully removed from NL-${
              res?.data?.data?.delete_segment_bots?.affected_rows || 0
            }`
          );
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
      })
      .catch((err) => {
        store.stopLoading();
        toast.error(`Error occured in updating bot-${err.message}`);
        console.log({ err });
      });
  },
  [store])

  const onResendNotification =useCallback((bot)=>{
   store.startLoading();
    startConversation(bot).then(response=>{
      console.log({response})
      toast.success(`Notification Triggered`)
      store.stopLoading();
    }).catch(err=>{
      toast.error(err.message);
      store.stopLoading();
    })
  },[store]);
  
  return (
    <MDBTable align="middle" small>
      <MDBTableHead>
        <tr>
          <th scope="col" className="fw-bold ">
            Name
          </th>
          <th scope="col" className="fw-bold ">
            Status
          </th>
          <th scope="col" className="fw-bold ">
            Description
          </th>
          <th scope="col" className="fw-bold ">
            Starting Message
          </th>
          <th scope="col" className="fw-bold ">
            Bot URL
          </th>
          <th scope="col" className="fw-bold ">
            Bot ID
          </th>
          <th scope="col" className="fw-bold ">
            Action
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((record, index) => {
          return (
            <tr key={record?.id}>
              <td>
                <p className="fw-bold ">{record?.name}</p>
              </td>
              <td>
                <MDBBadge
                  color={record?.status === "ENABLED" ? "success" : "warning"}
                  pill
                >
                  {record?.status === "ENABLED" ? "Active" : "DRAFT"}
                </MDBBadge>
              </td>
              <td>
                <p className="">
                  {record?.description || "No Description Provided"}
                </p>
              </td>
              <td>
                <p className="">{record?.startingMessage}</p>
              </td>

              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(
                    getBotUrl({
                      startingMessage: record?.startingMessage,
                      phoneNumber,
                    })
                  )}
                >
                  <MDBIcon
                    fas
                    icon="copy"
                    style={{ fontSize: "18px", color: "#4F4F4F" }}
                  />
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(record?.id)}
                >
                  <MDBIcon
                    fas
                    icon="copy"
                    style={{ fontSize: "18px", color: "#4F4F4F" }}
                  />
                </MDBBtn>
              </td>
              <td className="no-icon">
                <MDBDropdown group dropright className="shadow-0">
                  <MDBDropdownToggle color="link">
                    <MDBIcon
                      fas
                      icon="ellipsis-v"
                      style={{ fontSize: "18px", color: "#4F4F4F" }}
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onEdit(record);
                      }}
                    >
                      Edit
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onEnable(record);
                      }}
                    >
                      {record?.status === "DISABLED" ? "Enable" : "Disable"}
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onDelete(record);
                      }}
                    >
                      Delete Bot
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onResendNotification(record);
                      }}
                    >
                      Trigger Notification
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};
