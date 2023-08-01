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
import { startConversation } from "../../api/startConversation";
import { useStore } from "../../store";

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
      setTimeout(() => navigate(`/add-bot?bot=${data.id}`, { state: data }), 20);
    },
    [navigate, store]
  );

  const onEnable = useCallback((data) => {
    startConversation(data)
      .then((res) => {
        toast.success("Bot Enabled");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

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
                  <MDBIcon fas icon="copy" style={{fontSize:'18px',color:'#4F4F4F'}}/>
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(record?.id)}
                >
                  <MDBIcon fas icon="copy" style={{fontSize:'18px',color:'#4F4F4F'}} />
                </MDBBtn>
              </td>
              <td className="no-icon">
                <MDBDropdown group dropright className="shadow-0" >
                  <MDBDropdownToggle color="link"><MDBIcon fas icon="ellipsis-v" style={{fontSize:'18px',color:'#4F4F4F'}}/></MDBDropdownToggle>
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
                    {/* <MDBDropdownItem link
                     disabled
                    >Delete</MDBDropdownItem>
                    <MDBDropdownItem link             
                      childTag="button"
                      disabled
                      onClick={(ev) => {
                        ev.preventDefault();
                        onEnable(record);
                      }}>Enable</MDBDropdownItem> */}
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
