import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { SidebarComponent } from "./components/sidebar";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "./provider/contextProvider";
import { useAuthContext } from "./provider/authProvider";
import RequireAuth from "./hoc/requireAuth";
import Loader from "./components/fullscreenLoader";
import { useStore } from "./store";
import { SuccessScreen, Dashboard, Login, Add, Overview } from "./pages";
import { history } from "./utils/history";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./provider/authProvider";
import useWindowSize from "./hooks/useWindow";
import Kafka from "./pages/monitoring/kafka";


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
            <user && MDBCol size={collapsed ? 1 : 2} className="p-0">
              {" "}
              <SidebarComponent
                collapsed={collapsed}
                handleCollapse={handleCollapse}
              />
            </MDBCol>
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
                      <Overview theme={theme} />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/monitoring/overview"
                  element={
                    <RequireAuth>
                      <Overview theme={theme} />
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
      {/* <SidebarComponent /> */}
    </div>
  );
}

export default App;
