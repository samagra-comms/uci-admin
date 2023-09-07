import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { formatNumberWithCommas } from "../../../utils/functions";

const OverviewComponent = ({ theme, jsonData }) => {
  const data = jsonData;

  const renderDataCards = (data: { [key: string]: number }) => {
    return Object.entries(data).map(([key, value]) => (
      <MDBCol className="col-sm-12 col-md-4 mb-3" key={key}>
        <MDBCard className={`${theme}-card`}>
          <MDBCardBody>
            <h5 className="card-title">{formatNumberWithCommas(value)}</h5>
            <p className="card-text">{key}</p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));
  };

  return (
    <div>
      <MDBRow className="row mx-4">
        {Object.entries(data).map(([category, categoryData]) => (
          <React.Fragment key={category}>
            {categoryData &&
              renderDataCards(categoryData as { [key: string]: number })}
          </React.Fragment>
        ))}
      </MDBRow>
    </div>
  );
};

export default OverviewComponent;
