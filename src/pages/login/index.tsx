import React, { useCallback, useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useAuth } from "../../hooks/useAuth";

//@ts-ignore
import loginBg from '../../assets/images/uci.svg';
//@ts-ignore
import uci_logo from '../../assets/images/uci.ico';
export const Login = () => {
  const { signIn } = useAuth();
  const [state, setState] = useState({ loginId: "", password: "" });
  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    },
    []
  );

  const onSubmitHandler = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();
      signIn(state);
    },
    [signIn, state]
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
