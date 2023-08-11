import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import "./style.css";

interface OverviewHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  theme: string;
}
export const Overview: React.FC<OverviewHeaderProps> = ({
  children,
  theme,
  ...rest
}) => {
  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
  };

  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container my-3 text-center align-items-center">
      <MDBRow className="mx-4 my-4">
        <MDBCol className="d-flex justify-content-start">
          <form
            className="d-flex input-group w-auto"
            onSubmit={handleFilterSubmit}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Filter"
              aria-label="Filter"
              // value={filterText}
              onChange={handleFilterInputChange}
            />
            <MDBBtn color="primary" type="submit">
              Filter
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mx-4">
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">80</h5>
              <p className="card-text">No. of Notifications sent</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">65</h5>
              <p className="card-text">
                No. of Notifications received by users
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">50</h5>
              <p className="card-text">No. of Notifications opened by users</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="row mx-4">
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">80</h5>
              <p className="card-text">No. of Notifications sent</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">65</h5>
              <p className="card-text">
                No. of Notifications received by users
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-sm-12 col-md-4 mb-3">
          <MDBCard className={`${theme}-card`}>
            <MDBCardBody>
              <h5 className="card-title">50</h5>
              <p className="card-text">No. of Notifications opened by users</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
