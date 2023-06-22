import React, { useCallback, useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";


//@ts-ignore
import loginBg from '../../assets/images/uci.svg';
//@ts-ignore
import uci_logo from '../../assets/images/uci.ico';
import { login } from "../../api/login";
import { toast } from "react-hot-toast";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
export const Login = () => {
 
  const [state, setState] = useState({ loginId: "", password: "" });
  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    },
    []
  );
const navigate=useNavigate();
  const store:any =useStore();
  const onSubmitHandler = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();
      store?.startLoading();
      login(state)
      .then((res) => {
        store?.stopLoading();
        if (res.data.responseCode === "FAILURE") {
          toast.error(res?.data?.params?.errMsg || "Something Went Wrong");
        }
        if (res.data.responseCode === "OK") {
          localStorage.setItem("accessToken", res.data.result.data.user.token);
          localStorage.setItem(
            "self",
            JSON.stringify(res.data.result.data.user.user)
          );
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.result.data.user)
          );
          store?.setUser(res.data.result.data.user);
          // setUser(res.data.result.data.user);
          setTimeout(()=>{
            navigate("/")
          },20)
         
        }
      })
      .catch((err) => {
        store?.stopLoading();
        toast.error(err.message);
      });
    },
    [navigate, state, store]
  );

  return (
    <MDBRow className="w-100 p-0 m-0" style={{height:'100vh' ,overflow:'hidden'}}>
      <MDBCol size={8} className="p-0 m-0 " style={{overflow:'hidden'}}>
        <img src={loginBg}  alt="background"/>
      </MDBCol>

      <MDBCol size={4} className="p-5">
        <h4 className="my-5"> UCI ADMIN PANEL</h4>
        <div className="text-center mb-3">
          <img src={uci_logo} alt="uci-logo" style={{height: '140px',
    width: '140px',
    borderRadius: '50%'}} className="mx-auto mb-3"/>
        </div>
        <form onSubmit={onSubmitHandler}>
          <MDBInput
            className="mb-4"
            type="text"
            name="loginId"
            label="User Id"
            value={state?.loginId}
            onChange={onChangeHandler}
          />
          <MDBInput
            className="mb-4"
            type="password"
            label="Password"
            name="password"
            value={state?.password}
            onChange={onChangeHandler}
          />
{/* #78041E */}
          <MDBBtn type="submit" block >
            Sign in
          </MDBBtn>
        </form>
      </MDBCol>
      {/* <MDBCol size={4}></MDBCol> */}
    </MDBRow>
  );
};

export default Login;
