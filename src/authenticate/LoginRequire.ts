import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginRequire = () => {
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, userToken]);
};
