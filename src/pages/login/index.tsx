import React, { useCallback, useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { login } from "../../api/login";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
const {signIn} =useAuth()
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
      signIn(state)
      // login(state)
      //   .then((res) => {
      //     console.log({res})
      //     if(res.data.responseCode === "FAILURE"){
      //       toast.error(res?.data?.params?.errMsg || "Something Went Wrong")
      //     }
      //     if(res.data.responseCode=== "OK"){
      //       localStorage.setItem('accessToken', res.data.result.data.user.token);
      //       localStorage.setItem('self', JSON.stringify(res.data.result.data.user.user));
      //       navigate("/dashboard");
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //    toast.error(err.message)
      //   });
    },
    [signIn, state]
  );

  return (
    <MDBRow className="mt-5">
      <MDBCol size={4}></MDBCol>

      <MDBCol size="4">
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

          <MDBBtn type="submit" block>
            Sign in
          </MDBBtn>
        </form>
      </MDBCol>
      <MDBCol size={4}></MDBCol>
    </MDBRow>
  );
};

export default Login;
