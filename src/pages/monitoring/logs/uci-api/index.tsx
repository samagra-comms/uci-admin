import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import "./style.css";
import Ansi from "ansi-to-react";
import { useStore } from "../../../../store";
import toast from "react-hot-toast";
import { getFilesData } from "../../../../api/getFiles";
import { downloadLogData } from "../../../../api/downloadLog";
import { downloadErrLogData } from "../../../../api/downloadErrLog";
import { fetchServiceData } from "../../../../api/fetchService";
import DatePicker from "react-datepicker";
import { MDBIcon } from "mdb-react-ui-kit";

interface DropdownItem {
  value: number;
}

interface UCIAPIlogsProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
}

export const UCIAPIlogs: React.FC<UCIAPIlogsProps> = ({ theme }) => {
  const store: any = useStore();
  const [searchText, setSearchText] = useState<number>(0);
  const [filterText, setFilterText] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    DropdownItem[]
  >([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [messageLines, setMessageLines] = useState<string[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("normal");
  const [flag, setFlag] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const maxLines = process.env.REACT_APP_MAX_LINES
    ? parseInt(process.env.REACT_APP_MAX_LINES)
    : 5000;

  const [logdate, setLogDate] = useState<Date | null>(new Date());
  const [date, setDate] = useState<string>();

  function formatDateTo_dd_mm_yyyy(inputDate) {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}_${month}_${year}`;
  }

  const handleDateChange = (date: Date | null) => {
    setLogDate(date);
    let d = formatDateTo_dd_mm_yyyy(date);
    setDate(d);
  };

  const fetchMessageData = async () => {
    setFlag(false);
    setIsLoading(true);
    try {
      let logData = "";
      let responseType = activeButton === "normal" ? "logs" : "error";
      const response = await fetchServiceData("uci-apis", searchText, date);
      logData = response.data.result[responseType];
      const lines = logData.split("\n");
      setMessageLines(lines);
      setFlag(true);
    } catch (error) {
      console.error("Error reading the file:", error);
    }
    setIsLoading(false);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSearchText(Number(value));

    const data = [10, 100, 1000, 5000];
    const uniqueData = Array.from(new Set(data));

    const suggestions: DropdownItem[] = uniqueData.map((val) => ({
      value: val,
    }));

    setAutocompleteSuggestions(suggestions.filter((item) => item.value));
    setShowDropdown(true);
  };

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFilterText(value);
    setFilter(true);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchPerformed(true);
    setShowDropdown(false);
    fetchMessageData();
  };

  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMessageData();
  };

  const handleDropdownItemClick = (value: number) => {
    setSearchText(value);
    setShowDropdown(false);
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    fetchMessageData();
  };

  const handleDownload = async (activeButton, date) => {
    let response;
    if (activeButton === "normal") {
      response = await downloadLogData("uci-apis", date);
    } else {
      response = await downloadErrLogData("uci-apis", date);
    }
    const responseData = response.data;
    console.log(responseData);

    const blob = new Blob([responseData], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const tempAnchor = document.createElement("a");
    tempAnchor.href = url;
    const serviceName = "uci_api";
    const filename = `${serviceName}_${date}.txt`;
    tempAnchor.download = filename;
    document.body.appendChild(tempAnchor);
    tempAnchor.click();

    document.body.removeChild(tempAnchor);

    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    store?.startLoading();
    getFilesData()
      .then((res) => {
        store?.stopLoading();
      })
      .catch((err) => {
        store?.stopLoading();
        toast.error(err.message);
      });

    if (activeButton) {
      fetchMessageData();
    }

    if (maxLines <= searchText) {
      handleDownload(activeButton, date);
    }
  }, [activeButton, date, maxLines, searchText]);
  return (
    <MDBContainer className="mt-5 px-5">
      <MDBRow className="my-3">
        <MDBCol className="date-picker-container">
          <MDBIcon icon="calendar-alt" className={`${theme}-icon`} />
          <DatePicker
            selected={logdate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            value={logdate.toLocaleDateString("en-GB")}
            className="date-picker"
          />
        </MDBCol>
        <MDBCol className="mx-3">
          <form
            className="d-flex input-group w-auto"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Enter No. of lines"
              aria-label="Search"
              value={searchText === 0 ? "" : searchText}
              onChange={handleSearchInputChange}
            />
            <MDBBtn color="primary" type="submit">
              Search
            </MDBBtn>
          </form>
          {showDropdown && autocompleteSuggestions.length > 0 && (
            <ul className={`autocomplete-dropdown ${theme}-dropdown`}>
              {autocompleteSuggestions.map((item) => (
                <li
                  key={item.value}
                  onClick={() => handleDropdownItemClick(item.value)}
                >
                  {item.value}
                </li>
              ))}
            </ul>
          )}
        </MDBCol>
        <MDBCol className="d-flex justify-content-end">
          <form
            className="d-flex input-group w-auto"
            onSubmit={handleFilterSubmit}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Filter"
              aria-label="Filter"
              value={filterText}
              onChange={handleFilterInputChange}
              disabled={messageLines.length === 0}
            />
            <MDBBtn color="primary" type="submit">
              Filter
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
      {flag && searchPerformed && (
        <MDBBtnGroup
          style={{
            width: "1000px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <MDBBtn
            active={activeButton === "normal"}
            onClick={() => handleClick("normal")}
            style={{
              backgroundColor:
                activeButton === "normal" ? "#007BFF" : "#B0C4DE",
              borderColor: "#007BFF",
            }}
          >
            Normal Logs
          </MDBBtn>
          <MDBBtn
            active={activeButton === "err"}
            onClick={() => handleClick("err")}
            style={{
              backgroundColor: activeButton === "err" ? "#007BFF" : "#B0C4DE",
              borderColor: "#007BFF",
            }}
          >
            Error
          </MDBBtn>
        </MDBBtnGroup>
      )}
      {flag && searchPerformed && !isLoading && messageLines.length === 0 && (
        <p style={{ textAlign: "center" }}>
          No data available for selected date
        </p>
      )}

      {!searchPerformed && (
        <p style={{ textAlign: "center" }}>Please select a date</p>
      )}
      {searchPerformed && (
        <MDBCol className="d-flex justify-content-center mt-2">
          <MDBBtn
            onClick={() => handleDownload(activeButton, date)}
            style={{
              backgroundColor: "#007BFF",
              borderColor: "#007BFF",
            }}
          >
            Download
          </MDBBtn>
        </MDBCol>
      )}
      {searchPerformed && maxLines > searchText && (
        <div
          style={{ maxHeight: "800px", overflowY: "scroll", padding: "15px" }}
        >
          {searchPerformed && (
            <div
              className="white-box"
              style={{
                background: "white",
                color: "black",
                padding: "15px",
              }}
            >
              {!filter &&
                activeButton === "normal" &&
                messageLines.slice(0, searchText).map((line, index) => (
                  <p key={index}>
                    <Ansi>{line}</Ansi>
                  </p>
                ))}
              {filter &&
                activeButton === "normal" &&
                messageLines
                  .slice(0, searchText)
                  .filter((line) => line.includes(filterText))
                  .map((line, index) => (
                    <p key={index}>
                      <Ansi>{line}</Ansi>
                    </p>
                  ))}
              {!filter &&
                activeButton === "err" &&
                messageLines.slice(0, searchText).map((line, index) => (
                  <p key={index}>
                    <Ansi>{line}</Ansi>
                  </p>
                ))}
              {filter &&
                activeButton === "err" &&
                messageLines
                  .slice(0, searchText)
                  .filter((line) => line.includes(filterText))
                  .map((line, index) => (
                    <p key={index}>
                      <Ansi>{line}</Ansi>
                    </p>
                  ))}
            </div>
          )}
        </div>
      )}
      {searchPerformed && maxLines <= searchText && (
        <div>
          <p className="d-flex justify-content-center mt-2">
            Too large to display!
          </p>
        </div>
      )}
    </MDBContainer>
  );
};

export default UCIAPIlogs;
