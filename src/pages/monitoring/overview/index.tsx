import { MDBCol, MDBRow, MDBBtn, MDBSwitch } from "mdb-react-ui-kit";
import "../style.css";
import { useEffect, useState } from "react";
import { triggerRealtimeDataRes } from "../../../api/triggerRealtime";
import { stopRealtime } from "../../../api/stopRealtimeData";
import { getFilesData } from "../../../api/getFiles";
import { fetchOverviewData } from "../../../api/fetchOverview";
import {
  convertToShortDate,
  formatDate,
  reverseFormatDate,
} from "../../../utils/functions";
import OverviewComponent from "./card";
import { toast } from "react-hot-toast";

interface OverviewHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
}

interface AutocompleteItem {
  value: string;
}

export const Overview: React.FC<OverviewHeaderProps> = ({ theme }) => {
  const [isRealtimeEnabled, setIsRealtimeEnabled] = useState(false);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    AutocompleteItem[]
  >([]);
  const [selected, setSelected] = useState("");
  const [dropdown, setDropdown] = useState(true);
  const [flag, setFlag] = useState(false);
  const [OverviewData, setOverviewData] = useState({});

  const handleSearchInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSelected(value);
    setFlag(false);

    const lowercasedValue = value.toLowerCase();
    const apiEndpoint = getFilesData();
    let data = [];

    try {
      const response = await apiEndpoint;
      data = response.data.result;
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }

    const suggestions: AutocompleteItem[] = data.map((name) => ({
      value: formatDate(name),
    }));

    setAutocompleteSuggestions(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(lowercasedValue)
      )
    );
    setDropdown(true);
  };

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else if (typeof value === "object") {
      return isObjectEmpty(value);
    } else {
      return !value;
    }
  }
  function isObjectEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "object" && !isObjectEmpty(obj[key])) {
          return false;
        }
        if (typeof obj[key] !== "object" || !isEmpty(obj[key])) {
          return false;
        }
      }
    }
    return true;
  }
  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setDropdown(false);
    setFlag(true);
    const shortDate = convertToShortDate(selected);
    localStorage.setItem("shortDate", shortDate);
    localStorage.setItem("data_time", selected);

    const file = reverseFormatDate(selected);
    localStorage.setItem("file", file);

    const apiEndpoint = fetchOverviewData(file);
    let res;

    try {
      const response = await apiEndpoint;
      res = response.data.result;

      const parsedData = JSON.parse(res);

      setOverviewData(parsedData);
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
    setDropdown(false);
  };

  const handleAutocompleteItemClick = (value) => {
    setSelected(value);
    setDropdown(false);
  };

  const handleToggleChange = async () => {
    setIsRealtimeEnabled(!isRealtimeEnabled);
    const apiEndpoint = isRealtimeEnabled
      ? triggerRealtimeDataRes()
      : stopRealtime();

    try {
      const response = await apiEndpoint;
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  async function fetchData() {
    if (localStorage.getItem("file")) {
      const file = localStorage.getItem("file");
      const apiEndpoint = fetchOverviewData(file);
      let res;
      const response = await apiEndpoint;
      res = response.data.result;

      const parsedData = JSON.parse(res);

      setOverviewData(parsedData);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-3 text-center align-items-center">
      <MDBRow className="mx-4 my-4">
        <MDBCol className="d-flex justify-content-start">
          <MDBCol className="mx-3">
            <div className="autocomplete-container">
              <form
                className="d-flex input-group w-auto"
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter Date"
                  aria-label="Search"
                  value={
                    !selected && localStorage.getItem("data_time") != null
                      ? localStorage.getItem("data_time")
                      : selected
                  }
                  onChange={handleSearchInputChange}
                />
                <MDBBtn color="primary" type="submit">
                  Select
                </MDBBtn>
              </form>
              {dropdown && autocompleteSuggestions.length > 0 && (
                <ul className="autocomplete-dropdown">
                  {autocompleteSuggestions.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => handleAutocompleteItemClick(item.value)}
                      className={`${theme}-dropdown`}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </MDBCol>
        </MDBCol>
        <MDBCol className="d-flex justify-content-end">
          Toggle Realtime &nbsp;
          <MDBSwitch
            className="ml-2"
            checked={isRealtimeEnabled}
            onChange={handleToggleChange}
          />
        </MDBCol>
      </MDBRow>
      {(selected || localStorage.getItem("file") != null || flag) &&
        isObjectEmpty(OverviewData) && <p>No data available</p>}
      {(selected || localStorage.getItem("file") != null) && (
        <OverviewComponent theme={theme} jsonData={OverviewData} />
      )}
      {!selected && localStorage.getItem("file") == null && (
        <p>Please enter a date</p>
      )}
    </div>
  );
};
