import { login } from "../api/login";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { useStore } from "../store";

export const useAuth = () => {

  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const store:any=useStore();
  const signIn = useCallback( async (data) => {
    login(data)
      .then((res) => {
        if (res.data.responseCode === "FAILURE") {
          toast.error(res?.data?.params?.errMsg || "Something Went Wrong");
        }
        if (res.data.responseCode === "OK") {
          localStorage.setItem("accessToken", res.data.result.data.user.token);
          localStorage.setItem(
            "self",
            JSON.stringify(res.data.result.data.user.user)
          );
          store?.setUser(res.data.result.data.user);
          setUser(res.data.result.data.user);
          setTimeout(()=>{
            navigate("/")
          },20)
         
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  },[navigate, setUser, store]);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.clear();
    setTimeout(()=>{
      navigate("/login");
    },10)
   
  },[navigate, setUser]);

  
  return  useMemo(()=>({ user, signIn, signOut }),[signIn, signOut, user])   ;
};
