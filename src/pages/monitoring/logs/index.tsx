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
import { useStore } from "../../../store";
import toast from "react-hot-toast";
import { getFilesData } from "../../../api/getFiles";
import { downloadLogData } from "../../../api/downloadLog";
import { downloadErrLogData } from "../../../api/downloadErrLog";
import { fetchServiceData } from "../../../api/fetchService";
import { MDBIcon } from "mdb-react-ui-kit";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

interface DropdownItem {
  value: number;
}

interface ServicelogsProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
  fileName: string;
  fetchData: string;
}

export const Servicelogs: React.FC<ServicelogsProps> = ({
  theme,
  fileName,
  fetchData,
}) => {
  const store: any = useStore();
  const [searchText, setSearchText] = useState<number>(0);
  const [filterText, setFilterText] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    DropdownItem[]
  >([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const [messageLines, setMessageLines] = useState<string[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("normal");
  const [flag, setFlag] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const maxLines = process.env.REACT_APP_MAX_LINES
    ? parseInt(process.env.REACT_APP_MAX_LINES)
    : 5000;

  const [logdate, setLogDate] = useState<Date | null>(new Date());
  const [date, setDate] = useState<string>("");

  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [endDateFormatted, setEndDateFormatted] = useState<string>("");

  function formatDateTo_dd_mm_yyyy(inputDate) {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}_${month}_${year}`;
  }

  const handleDateChange = (date: Date | null) => {
    setLogDate(date);
    if (date) {
      // Format date as needed
      let formattedDate = formatDateTo_dd_mm_yyyy(date);
      setDate(formattedDate);
    } else {
      setDate("");
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    if (date) {
      // Format date as needed
      let formattedDate = formatDateTo_dd_mm_yyyy(date);
      setEndDateFormatted(formattedDate);
    } else {
      setEndDateFormatted("");
    }
  };

  const fetchMessageData = async () => {
    setFlag(false);
    setIsLoading(true);
    try {
      let logData = "";
      let responseType = activeButton === "normal" ? "logs" : "error";
      const response = await fetchServiceData(fetchData, searchText, date);
      logData = response.data.result[responseType];
      const lines = logData.split("\n");
      const isEmptyLine = (lines) => {
        return /^\s*$/.test(lines);
      };
      setIsEmpty(isEmptyLine(lines));
      setMessageLines(lines);
      setFlag(true);
    } catch (error) {
      // toast.error("An error occurred: " + error.message);
      setIsEmpty(true);
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
    setShowDropdown(false);
    fetchMessageData();
  };

  const handleDownload = async (activeButton, date) => {
    let response;
    if (activeButton === "normal") {
      response = await downloadLogData(fetchData, date);
    } else {
      response = await downloadErrLogData(fetchData, date);
    }
    const responseData = response.data;

    const blob = new Blob([responseData], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const tempAnchor = document.createElement("a");
    tempAnchor.href = url;
    const serviceName = fileName;
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
  }, [activeButton, maxLines, searchText, date]);

  return (
    <MDBContainer className="mt-5 px-5">
      <div className="parent-container">
        <MDBRow className="my-3 mx-10">
          <MDBCol className="date-picker-container col my-3">
            <label className={`${theme}-label`}>Start Date&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <MDBIcon icon="calendar-alt" className={`${theme}-icon`} />
            <DateTimePicker
              onChange={handleDateChange}
              value={logdate}
              format="dd-MM-yyyy HH:mm:ss"
              className={`date-picker ${theme}-date-picker`}
            />
          </MDBCol>
          <MDBCol className="date-picker-container col my-3">
            <label className={`${theme}-label`}>End Date&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <MDBIcon icon="calendar-alt" className={`${theme}-icon`} />
            <DateTimePicker
              onChange={handleEndDateChange}
              value={endDate}
              format="dd-MM-yyyy HH:mm:ss"
              className={`date-picker ${theme}-date-picker`}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
          <div className="autocomplete-container">
            <form className="input-group" onSubmit={handleSearchSubmit}>
              <input
                type="number"
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
            {showDropdown &&
              autocompleteSuggestions.length > 0 &&
              searchText !== 0 && (
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
            {!searchPerformed && (
              <p style={{ textAlign: "center" }}>
                Please select number of lines
              </p>
            )}
            </div>
          </MDBCol>
          <MDBCol>
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
      </div>
      <br />
      {!isEmpty && flag && searchPerformed && (
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
      {isEmpty && searchPerformed && !isLoading && (
        <p style={{ textAlign: "center" }}>
          No data available for selected date
        </p>
      )}
      {!isEmpty && searchPerformed && (
        <MDBCol className="d-flex justify-content-end mt-2">
          <MDBBtn
            onClick={() => handleDownload(activeButton, date)}
            style={{
              backgroundColor: "#007BFF",
              borderColor: "#007BFF",
            }}
          >
            <MDBIcon fas icon="file-download" />
          </MDBBtn>
        </MDBCol>
      )}
      {!isEmpty && searchPerformed && maxLines > searchText && (
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

export default Servicelogs;
