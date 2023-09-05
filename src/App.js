import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { SidebarComponent } from "./components/sidebar";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "./provider/contextProvider";
import RequireAuth from "./hoc/requireAuth";
import Loader from "./components/fullscreenLoader";
import { useStore } from "./store";
import { SuccessScreen, Dashboard, Login, Add, Overview } from "./pages";
import { history } from "./utils/history";
import useWindowSize from "./hooks/useWindow";
import Uciapi from "./pages/monitoring/uci-api";
import Inbound from "./pages/monitoring/inbound";
import Orchestrator from "./pages/monitoring/orchestrator";
import BroadcastTransformer from "./pages/monitoring/broadcast-transformer";
import Outbound from "./pages/monitoring/outbound";
import Transformer from "./pages/monitoring/transformer";
import UCIAPIlogs from "./pages/monitoring/logs/uci-api";
import InboundLogs from "./pages/monitoring/logs/inbound";
import OrchestratorLogs from "./pages/monitoring/logs/orchestrator";
import TransformerLogs from "./pages/monitoring/logs/transformer";
import BroadcastTransformerLogs from "./pages/monitoring/logs/broadcast-transformer";
import OutboundLogs from "./pages/monitoring/logs/outbound";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useMemo(() => ({ isLoading, setIsLoading }), [isLoading]);
  const [collapsed, setCollapsed] = useState(false);
  const { width } = useWindowSize();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (width <= 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);

  const store = useStore();
  const location = useLocation();
  const pathName = location.state?.from || "/";
  const showLoader = useMemo(() => store?.isLoading, [store?.isLoading]);

  history.navigate = useNavigate();
  history.location = useLocation();
  const theme = useMemo(() => {
    if (store?.theme === "dark")
      return {
        background: "#1b1d21",
        color: "white",
      };
    return { background: "#f3f6f9" };
  }, [store?.theme]);
  const user = useMemo(() => store.user, [store.user]);

  return (
    <div style={{ height: "100vh", overflow: "hidden", ...theme }}>
      <AppContext.Provider value={values}>
        <>
          <Loader loading={showLoader} />
          <MDBRow>
            {user && (
              <MDBCol size={collapsed ? 1 : 2} className="p-0">
                {" "}
                <SidebarComponent
                  collapsed={collapsed}
                  handleCollapse={handleCollapse}
                />
              </MDBCol>
            )}
            <MDBCol size={user && collapsed ? 11 : 10}>
              <Routes>
                {user ? (
                  <Route path="/login" element={<Navigate to={pathName} />} />
                ) : (
                  <Route path="/login" element={<Login />} />
                )}
                <Route
                  path="/"
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/add-bot"
                  element={
                    <RequireAuth>
                      <Add />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/success"
                  element={
                    <RequireAuth>
                      <SuccessScreen />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring"
                  element={
                    <RequireAuth>
                      <Overview theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/overview"
                  element={
                    <RequireAuth>
                      <Overview theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/uci-api"
                  element={
                    <RequireAuth>
                      <Uciapi theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/inbound"
                  element={
                    <RequireAuth>
                      <Inbound theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/orchestrator"
                  element={
                    <RequireAuth>
                      <Orchestrator theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/broadcast-transformer"
                  element={
                    <RequireAuth>
                      <BroadcastTransformer theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/outbound"
                  element={
                    <RequireAuth>
                      <Outbound theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/transformer"
                  element={
                    <RequireAuth>
                      <Transformer theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs"
                  element={
                    <RequireAuth>
                      <UCIAPIlogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/uci-api"
                  element={
                    <RequireAuth>
                      <UCIAPIlogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/inbound"
                  element={
                    <RequireAuth>
                      <InboundLogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/orchestrator"
                  element={
                    <RequireAuth>
                      <OrchestratorLogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/transformer"
                  element={
                    <RequireAuth>
                      <TransformerLogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/broadcast-transformer"
                  element={
                    <RequireAuth>
                      <BroadcastTransformerLogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/logs/outbound"
                  element={
                    <RequireAuth>
                      <OutboundLogs theme={store?.theme} />
                    </RequireAuth>
                  }
                />
              </Routes>
            </MDBCol>
          </MDBRow>

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      </AppContext.Provider>
    </div>
  );
}

export default App;