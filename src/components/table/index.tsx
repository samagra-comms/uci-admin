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
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import { getBotUrl } from "../../utils";
import { useNavigate } from "react-router-dom";
import { startConversation } from "../../api/startConversation";

export const Table: FC<{ data: Array<any> }> = ({ data }) => {
  const navigate = useNavigate();
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
      navigate("/add-bot?edit=true", { state: data });
    },
    [navigate]
  );

  const onEnable = useCallback(
    (data) => {
      console.log("util:",{data})
     startConversation(data).then(res=>{
      console.log("util:",{res})
      toast.success("Bot Enabled")
     }).catch(err=>{
      console.log("util:",{err})
      toast.error(err.message)
     })
    },
    []
  );

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
                  Copy
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={onCopy(record?.id)}
                >
                  Copy
                </MDBBtn>
              </td>
              <td>
                <MDBDropdown group dropright className="shadow-0">
                  <MDBDropdownToggle color="link">Action</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      childTag="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onEdit(record);
                      }}
                      disabled
                    >
                      Edit
                    </MDBDropdownItem>
                    <MDBDropdownItem link
                     disabled
                    >Delete</MDBDropdownItem>
                    <MDBDropdownItem link             
                      childTag="button"
                      disabled
                      onClick={(ev) => {
                        ev.preventDefault();
                        onEnable(record);
                      }}>Enable</MDBDropdownItem>
                 
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
