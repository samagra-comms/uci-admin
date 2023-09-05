import React, { useEffect } from "react";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import "./style.css";
import { useStore } from "../../../store";

type Theme = "light" | "dark";

export const Overview = () => {
  const store: any = useStore();
  const [theme, setTheme] = React.useState<Theme>(store?.theme);

  useEffect(() => {
    setTheme(store?.theme);
  }, [store?.theme]);

  return (
    <div className="container my-3 text-center align-items-center">
      <div className="row mx-4">
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">80</h5>
              <p className="card-text">No. of Notifications sent</p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">65</h5>
              <p className="card-text">
                No. of Notifications received by users
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">50</h5>
              <p className="card-text">No. of Notifications opened by users</p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <div className="row mx-4">
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">80</h5>
              <p className="card-text">No. of Notifications sent</p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">65</h5>
              <p className="card-text">
                No. of Notifications received by users
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">50</h5>
              <p className="card-text">No. of Notifications opened by users</p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

// export default Overview;
