import { FunctionComponent, useContext, useState } from "react";
import AxiosInstance from "../../axios";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { AuthContext } from "../../authenticate/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = () => {
    AxiosInstance.post("/login", {
      username: username,
      password: password,
    })
      .then(function (response) {
        console.log(response.data.token);
        logIn(response.data.token);
        navigate("/");
      })
      .catch(function (err) {
        console.log(err);
        setError(err.response.data);
      });
  };

  const onChangeUserNameField = (username: string) => {
    setUsername(username);
    setError("");
  };
  const onChangePasswordField = (password: string) => {
    setPassword(password);
    setError("");
  };

  return (
    <div
      className={`bg-gray-100  flex flex-col items-center justify-center w-60 rounded-lg p-2.5`}
    >
      <label className={`text-2xl mb-5 text-3xl font-thin`}>LOGIN</label>
      <Input
        className="w-48 mr-5 mb-5 rounded-lg border-gray-300 border h-7 indent-2"
        value={username}
        onChange={onChangeUserNameField}
        name="username"
        placeholder="username"
      />
      <Input
        className="w-48 mr-5 mb-5 rounded-lg border-gray-300 border tracking-wider text-base h-7 indent-2"
        value={password}
        onChange={onChangePasswordField}
        type="password"
        placeholder="password"
      />
      <span>{error}</span>
      <a
        className={"text-black hover:text-gray-800"}
        href={"http://localhost:3001/register"}
      >
        Register
      </a>
      <Button
        className={`text-black mx-0.5 rounded-lg h-min cursor-pointer bg-gray-300 px-2 py-0.5 hover:bg-gray-200`}
        onClick={handleSubmit}
        children="Login"
        type="submit"
      />
    </div>
  );
};

export default Login;
