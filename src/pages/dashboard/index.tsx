import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getBots } from "../../api/getBots";
import { toast } from "react-hot-toast";
import { Table } from "../../components/table";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Pagination from "../../components/pagination";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

const getSortTypeLabel = (value: string) => {
  switch (value) {
    case "status":
      return "Status";
    case "createdAt":
      return "Date Created";
    case "endDate":
      return "Date Expired";
    default:
      return "Name";
  }
};

export const Dashboard = () => {
  const store: any = useStore();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [orderBy, setOrderBy] = useState("desc");
  const [botList, setBotList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    store?.startLoading();
    const data =
      searchText.length > 0
        ? { name: searchText, sortBy, orderBy }
        : { perPage, page, sortBy, orderBy };
    getBots(data)
      .then((res) => {
        store?.stopLoading();
        setBotList(res?.data?.result?.data);
        setTotalRecords(res?.data?.result?.totalCount || 0);
        if (searchText.length > 0) {
          setPage(1);
          setPerPage(10);
        }
      })
      .catch((err) => {
        store?.stopLoading();
        toast.error(err.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage, store.startLoading, store?.stopLoading, searchText,orderBy,sortBy]);

  const onSortChange = useCallback(
    (sortValue) => () => {
      setSortBy(sortValue);
    },
    []
  );

  const sortLabel = useMemo(() => getSortTypeLabel(sortBy), [sortBy]);
  const orderByIcon = useMemo(
    () => (orderBy === "desc" ? "sort-amount-down" : "sort-amount-up"),
    [orderBy]
  );
  
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
          <MDBDropdown group className="">
            <MDBDropdownToggle color="info">
              <MDBIcon fas icon="sort" /> {sortLabel} &nbsp;
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                link
                disabled={sortBy === "name"}
                onClick={onSortChange("name")}
              >
                Name
              </MDBDropdownItem>
              <MDBDropdownItem
                link
                disabled={sortBy === "status"}
                onClick={onSortChange("status")}
              >
                Status
              </MDBDropdownItem>
              <MDBDropdownItem
                link
                disabled={sortBy === "createdAt"}
                onClick={onSortChange("createdAt")}
              >
                Date Created
              </MDBDropdownItem>
              <MDBDropdownItem
                link
                disabled={sortBy === "endDate"}
                onClick={onSortChange("endDate")}
              >
                Date Expired
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBDropdown group className="mx-2" shadow="0">
            <MDBDropdownToggle color="info" shadow="0">
              <MDBIcon fas icon={orderByIcon} />
              &nbsp;
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                link
                disabled={orderBy === "desc"}
                onClick={() => setOrderBy("desc")}
              >
                Descending
              </MDBDropdownItem>
              <MDBDropdownItem
                link
                disabled={orderBy === "asc"}
                onClick={() => setOrderBy("asc")}
              >
                Ascending
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBBtn onClick={() => navigate("/add-bot")} className="mx-2">
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
