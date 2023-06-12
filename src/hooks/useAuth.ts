import { login } from "../api/login";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {

  const [user, setUser] = useLocalStorage("user", null);
  
  const signIn = async (data) => {
    login(data)
      .then((res) => {
        console.log({ res });
        if (res.data.responseCode === "FAILURE") {
          toast.error(res?.data?.params?.errMsg || "Something Went Wrong");
        }
        if (res.data.responseCode === "OK") {
          localStorage.setItem("accessToken", res.data.result.data.user.token);
          localStorage.setItem(
            "self",
            JSON.stringify(res.data.result.data.user.user)
          );
          setUser(res.data.result.data.user);
          // navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
};
