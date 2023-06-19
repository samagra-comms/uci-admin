import React, { useEffect, useState } from "react";
import { getBots } from "../../api/getBots";
import { toast } from "react-hot-toast";
import { Table } from "../../components/table";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Pagination from "../../components/pagination";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

export const Dashboard = () => {
  const store: any = useStore();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [botList, setBotList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    store?.startLoading();
    const data = searchText.length > 0 ? {name:searchText} : {perPage, page};
    getBots(data)
      .then((res) => {
        console.log({ res });
        store?.stopLoading();
        setBotList(res?.data?.result?.data);
        setTotalRecords(res?.data?.result?.totalCount || 0);
        if(searchText.length >0 ){
          setPage(1);
          setPerPage(10)
        }
      })
      .catch((err) => {
        store?.stopLoading();
        toast.error(err.message);
      });
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage, store.startLoading, store?.stopLoading,searchText]);

  
  
  return (
    <MDBContainer className="mt-5 px-5">
      <MDBRow className="my-3">
        <MDBCol>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={ev=>setSearchText(ev.target.value)}
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCol>
        <MDBCol className="d-flex justify-content-end">
        <MDBBtn onClick={() => navigate("/add-bot")}>
            <MDBIcon fas icon="plus" />
            &nbsp;&nbsp; Add
          </MDBBtn>
        {/* <MDBBtn onClick={() => null}  className="mx-2">
           <MDBIcon fas icon="redo" />
            &nbsp;&nbsp; Refresh
          </MDBBtn> */}
          
        </MDBCol>
      </MDBRow>
      <div style={{ maxHeight: "80vh", overflow: "scroll" }} >
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
