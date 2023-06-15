import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SidebarComponent from "./components/sidebar";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useMemo, useState } from "react";
import { AppContext } from "./provider/contextProvider";
import { useAuthContext } from "./provider/authProvider";
import RequireAuth from "./hoc/requireAuth";
import Loader from "./components/fullscreenLoader";
import { useStore } from "./store";
import { SuccessScreen, Dashboard, Login, Add } from "./pages";
import { history } from "./utils/history";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useMemo(() => ({ isLoading, setIsLoading }), [isLoading]);
  const { user } = useAuthContext();
  const store = useStore();
  const location = useLocation();
  const pathName = location.state?.from || "/";
  const showLoader = useMemo(() => store?.isLoading, [store?.isLoading]);
 
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <div className="App">
      <AppContext.Provider value={values}>
        <>
          <Loader loading={showLoader} />
          <MDBRow>
            <MDBCol size={2} className="p-0">
              <SidebarComponent />
            </MDBCol>
            <MDBCol size={10}>
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
