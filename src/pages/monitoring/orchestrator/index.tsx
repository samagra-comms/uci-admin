import {
  MDBBtn,
  MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBRow,
} from "mdb-react-ui-kit";
import BarChart from "../../../components/visualisation/bar";
import React, { useEffect, useState } from "react";
import { useStore } from "../../../store";
import { getBots } from "../../../api/getBots";
import { toast } from "react-hot-toast";
import "./style.css";
import PieChart from "../../../components/visualisation/pie";
import LineChart from "../../../components/visualisation/line";
// import { formatDate, reverseFormatDate } from "../../../utils/functions";
import { fetchRealtime } from "../../../api/fetchRealtimeData";
import { getFilesData } from "../../../api/getFiles";
import { convertToShortDate, formatDate, reverseFormatDate } from "../../../utils/functions";

interface AutocompleteItem {
  value: string;
}

interface OrchestratorProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
}

export const Orchestrator: React.FC<OrchestratorProps> = ({ theme }) => {
  const [selectedChart, setSelectedChart] = useState("barchart");
  const [dropdownLabel, setDropdownLabel] = useState("Select Chart");
  const [searchText, setSearchText] = useState("");
  // const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
  //   AutocompleteItem[]
  // >([]);
  const [autocompleteSuggestionsFile, setAutocompleteSuggestionsFile] =
    useState<AutocompleteItem[]>([]);
  const [botList, setBotList] = useState([]);
  const store: any = useStore();

  const [selected, setSelected] = useState("");
  const [dropdown, setDropdown] = useState(true);

  const [OrchestratorData, setOrchestratorData] = useState([]);

  const [final, setFinal] = useState("");

  const func = async () => {
    if (localStorage.getItem("file")) {
      const file = localStorage.getItem("file");
      const apiEndpoint = fetchRealtime(file);
      try {
        const response = await apiEndpoint;
        const res = JSON.parse(response.data.result);
        setOrchestratorData(res["Orchestrator".trim()] || {}); 
      } catch (error) {
        console.error("Error toggling:", error);
      }
    } else if (final !== "") {
      const file = reverseFormatDate(final);
      localStorage.setItem("file", file);

      const shortDate = convertToShortDate(selected);
      localStorage.setItem("shortDate", shortDate);
      localStorage.setItem("data_time", selected);

      const apiEndpoint = fetchRealtime(file);
      try {
        const response = await apiEndpoint;
        const res = JSON.parse(response.data.result);
        setOrchestratorData(res["Orchestrator".trim()] || {}); 
      } catch (error) {
        console.error("Error toggling:", error);
      }
    }
    fetchBotData();
  };

  useEffect(() => {
    func();
    // fetchBotData();
  }, [final]);

  const dataBar = {
    labels: Object.keys(OrchestratorData),
    datasets: [
      {
        label: "Orchestrator",
        data: Object.values(OrchestratorData).map(Number),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const dataPie = {
    labels: Object.keys(OrchestratorData),
    datasets: [
      {
        label: "Orchestrator",
        data: Object.values(OrchestratorData).map(Number),
      },
    ],
  };

  const dataLine = {
    labels: Object.keys(OrchestratorData),
    datasets: [
      {
        label: "Orchestrator",
        data: Object.values(OrchestratorData).map(Number),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const handleChartChange = (value, label) => {
    setSelectedChart(value);
    setDropdownLabel(label);
  };

  let chartComponent;
  if (selectedChart === "barchart") {
    chartComponent = <BarChart data={dataBar} />;
  } else if (selectedChart === "piechart") {
    // chartComponent = <PieChart data={dataPie} />;
    chartComponent = <PieChart data={dataPie} />;
  } else if (selectedChart === "linechart") {
    chartComponent = <LineChart data={dataLine} />;
  }

  const fetchBotData = async () => {
    store?.startLoading();
    const data = searchText.length > 0 ? { name: searchText } : {};
    try {
      const res = await getBots(data);
      store?.stopLoading();
      setBotList(res?.data?.result?.data.map((bot) => bot.name));
    } catch (err) {
      store?.stopLoading();
      toast.error(err.message);
    }
  };

  // const handleSearchInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { value } = event.target;
  //   setSearchText(value);

  //   const lowercasedValue = value.toLowerCase();
  //   const suggestions: AutocompleteItem[] = botList.map((name) => ({
  //     value: name,
  //   }));

  //   setAutocompleteSuggestions(
  //     suggestions.filter((item) =>
  //       item.value.toLowerCase().includes(lowercasedValue)
  //     )
  //   );
  // };

  // const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const handleSearchSubmitFile = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setDropdown(false);
    setFinal(selected);

    const shortDate = convertToShortDate(selected);
    localStorage.setItem("shortDate", shortDate);
    localStorage.setItem("data_time", selected);

    const file = reverseFormatDate(selected);
    localStorage.setItem("file", file);

    func();
  };

  const handleSearchInputChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSelected(value);

    const lowercasedValue = value.toLowerCase();
    const apiEndpoint = getFilesData();
    let data = [];

    try {
      const response = await apiEndpoint;
      data = response.data.result;
    } catch (error) {
      console.error("Error toggling:", error);
    }

    const suggestions: AutocompleteItem[] = data.map((name) => ({
      value: formatDate(name),
    }));

    setAutocompleteSuggestionsFile(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(lowercasedValue)
      )
    );
    setDropdown(true);
  };

  const handleAutocompleteItemClick = (value) => {
    setSelected(value);
    setDropdown(false);
  };

  return (
    <div>
      <MDBRow className="my-3">
        <MDBCol>
          <MDBDropdown>
            <MDBDropdownToggle
              caret="true"
              color="primary"
              style={{ cursor: "pointer" }}
            >
              {dropdownLabel}
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ width: "inherit" }}>
              <MDBDropdownItem
                className="p-2"
                onClick={() => handleChartChange("barchart", "Bar Chart")}
                style={{ cursor: "pointer" }}
              >
                Bar Chart
              </MDBDropdownItem>
              <MDBDropdownItem
                className="p-2"
                onClick={() => handleChartChange("piechart", "Pie Chart")}
                style={{ cursor: "pointer" }}
              >
                Pie Chart
              </MDBDropdownItem>
              <MDBDropdownItem
                className="p-2"
                onClick={() => handleChartChange("linechart", "Line Chart")}
                style={{ cursor: "pointer" }}
              >
                Line Chart
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCol>
        {/* <MDBCol className="mx-3">
          <form
            className="d-flex input-group w-auto"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search Bot Name"
              aria-label="Search"
              value={searchText}
              onChange={handleSearchInputChange}
            />
            <MDBBtn color="primary" type="submit">
              Search
            </MDBBtn>
          </form>
          {autocompleteSuggestions.length > 0 && (
            <ul className={`autocomplete-dropdown ${theme}-dropdown`}>
              {autocompleteSuggestions.map((item) => (
                <li key={item.value} onClick={() => setSearchText(item.value)}>
                  {item.value}
                </li>
              ))}
            </ul>
          )}
        </MDBCol> */}
        <MDBCol className="mx-3">
          <form
            className="d-flex input-group w-auto"
            onSubmit={handleSearchSubmitFile}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search Date"
              aria-label="Search"
              value={localStorage.getItem("data_time")!=null ? localStorage.getItem("data_time") : selected}
              onChange={handleSearchInputChangeFile}
            />
            <MDBBtn color="primary" type="submit">
              Search
            </MDBBtn>
          </form>
          {dropdown && autocompleteSuggestionsFile.length > 0 && (
            <ul className={`autocomplete-dropdown ${theme}-dropdown`}>
              {autocompleteSuggestionsFile.map((item) => (
                <li
                  key={item.value}
                  onClick={() => handleAutocompleteItemClick(item.value)}
                >
                  {item.value}
                </li>
              ))}
            </ul>
          )}
        </MDBCol>
      </MDBRow>
      {chartComponent}
    </div>
  );
};

export default Orchestrator;
