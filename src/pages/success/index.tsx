import React from "react";
//@ts-ignore
import bot from "../../assets/images/bot.jpg";
//@ts-ignore
import check from "../../assets/images/success.svg";
import "./style.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
export const SuccessScreen = () => {
  const navigate =useNavigate();
  return (
    <div className="text-center success-container m-0 p-0" style={{background:'#ffffff'}}>
      <img src={bot} style={{ height: "60vh" }} alt="bot" />
      <div>
        <img src={check} alt="check" />
        <h4 className="text mt-2">Conversation Succesfully Created </h4>
      </div>
      <div className="mt-4">
        <MDBBtn outline className="mx-2" color="info" size="lg" onClick={()=>navigate('/')}>
          View Conversation List
        </MDBBtn>
      </div>
    </div>
  );
};
