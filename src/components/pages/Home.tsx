import { FunctionComponent, useContext } from "react";
import Button from "../atoms/Button";
import { AuthContext } from "../../authenticate/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };
  return (
    <div>
      <Button
        className={`text-black mx-0.5 rounded-lg h-min cursor-pointer bg-gray-300 px-2 py-0.5 hover:bg-gray-200`}
        onClick={handleLogOut}
        children="Logout"
        type={"button"}
      />
    </div>
  );
};

export default Home;
