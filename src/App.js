import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Toaster } from "react-hot-toast";
import AddBot from "./pages/add";
import SidebarComponent from "./components/sidebar";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useMemo, useState } from "react";
import { AppContext } from "./provider/contextProvider";
import { useAuthContext } from "./provider/authProvider";
import RequireAuth from "./hoc/requireAuth";
import Loader from "./components/fullscreenLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useMemo(() => ({ isLoading, setIsLoading }), [isLoading]);
  const { user } = useAuthContext()

  const location = useLocation()
  const pathName = location.state?.from || '/'

  return (
    <div className="App">
      <AppContext.Provider value={values}>
        <>
        <Loader loading={isLoading}  />
          <MDBRow>
            <MDBCol md={2} className="p-0">
              <SidebarComponent />
            </MDBCol>
            <MDBCol>
              <Routes>
                {user ? <Route path='/login' element={<Navigate to={pathName} />} /> : <Route path='/login' element={<Login />} />}
                <Route path='/' element={<RequireAuth><Dashboard /></RequireAuth>} />
                <Route path='/add-bot' element={<RequireAuth><AddBot /></RequireAuth>} />
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
