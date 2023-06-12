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
import React, { FC, useCallback, useMemo, useState } from "react";
import { calculatePagesCount } from "../../utils";

const Pagination: FC<{
  perPage?: number;
  setPerPage: (arg: number) => void;
  page:number;
  setPage:(arg: any) => void;
  totalRecords:number;
  rowCount:number;
}> = ({ perPage, setPerPage,totalRecords,page,setPage,rowCount }) => {
  const [recsPerPage, setRecsPerPage] = useState(perPage || 10);
  const pageItems = useMemo(() => [5, 10, 20, 30], []);

  const onPageSizeChange = useCallback(
    (newSize: number) => () => {
      setRecsPerPage(newSize);
      setPerPage(newSize);
    },
    [setPerPage]
  );


  const totalPages = useMemo(
    () => calculatePagesCount(recsPerPage, totalRecords),
    [recsPerPage, totalRecords]
  );
  const startNumber = useMemo(
    () =>
    rowCount > 0 ? recsPerPage * (page - 1) + 1 : 0,
    [page, recsPerPage, rowCount]
  );

  const endNumber = useMemo(
    () =>
      totalRecords> 0
        ? startNumber + rowCount - 1
        : 0,
    [rowCount, startNumber, totalRecords]
  );

 


  const onNextPage=useCallback(()=>{
   
    if (page < totalPages) {
        setPage((prev:number)=>prev+1);
      }
  },[page, setPage, totalPages]);

  const onPreviousPage=useCallback(()=>{
   
    if (page > 1) {
        setPage((prev:number)=>prev-1);
      }
  },[page, setPage]);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <MDBRow>
            <MDBCol>
              Items Per Page
              <MDBDropdown group dropright className="shadow-0">
                <MDBDropdownToggle color="link">
                  {recsPerPage}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {pageItems?.map((item, index) => (
                    <MDBDropdownItem
                      key={item}
                      link
                      onClick={onPageSizeChange(item)}
                    >
                      {item}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol className="d-flex justify-content-evenly">
               <div> Showing {startNumber}- {endNumber} of {totalRecords} </div>
               <div>

              
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#3b5998" }}
                onClick={onPreviousPage}
                disabled={page===0}
              >
                <MDBIcon fas icon="chevron-left" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#3b5998" }}
                onClick={onNextPage}
                disabled={page===totalPages}
              >
                <MDBIcon fas icon="chevron-right" />
              </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Pagination;
