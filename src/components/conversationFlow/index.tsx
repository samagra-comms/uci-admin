import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { FC } from "react";
//@ts-ignore
import emptyList from "../../assets/images/empty.svg";

const ConversationFlow: FC<{ compProps: any }> = ({ compProps }) => {
  const { conversationLogic, onToggle } = compProps;
  
  return (
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
            <img alt="empty" src={emptyList} height="200px" />
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
  );
};

export default ConversationFlow;
