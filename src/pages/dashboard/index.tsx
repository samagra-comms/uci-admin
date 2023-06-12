import React, { useEffect, useState } from "react";
import { getBots } from "../../api/getBots";
import { toast } from "react-hot-toast";
import Loader from "../../components/loader";
import { Table } from "../../components/table";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import Pagination from "../../components/pagination";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

const Dashboard = () => {
  const {setIsLoading}=useAppContext();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [botList, setBotList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    getBots({ perPage, page })
      .then((res) => {
        console.log({ res });
        setIsLoading(false);
        setBotList(res?.data?.result?.data);
        setTotalRecords(res?.data?.result?.totalCount || 0);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.message);
      });
  }, [page, perPage, setIsLoading]);



  return (
    <MDBContainer className="mt-5">
      <MDBRow className="my-3">
        <MDBCol>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCol>
        <MDBCol className="d-flex justify-content-end">
          <MDBBtn onClick={()=>navigate('/add-bot')}> <MDBIcon fas icon='plus' />&nbsp;&nbsp; Add </MDBBtn>
         
        </MDBCol>
      </MDBRow>
      <div style={{ maxHeight: "85vh", overflow: "scroll" }}>
        <Table data={botList} />
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        rowCount={botList?.length}
        perPage={perPage}
        setPerPage={setPerPage}
        totalRecords={totalRecords}
      />
      
    </MDBContainer>
  );
};

export default Dashboard;
