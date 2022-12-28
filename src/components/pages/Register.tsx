import { FunctionComponent, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";

const Register: FunctionComponent = () => {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/login");
  };
  return (
    <div>
      <Input
        className={
          "w-48 mr-5 mb-5 rounded-lg border-gray-300 border tracking-wider text-base h-7 indent-2"
        }
        value={username}
        onChange={setUsername}
        placeholder="username"
      />
      <Input
        className={
          "w-48 mr-5 mb-5 rounded-lg border-gray-300 border tracking-wider text-base h-7 indent-2"
        }
        value={password}
        onChange={setPassword}
        placeholder="password"
      />
      <Input
        className={
          "w-48 mr-5 mb-5 rounded-lg border-gray-300 border tracking-wider text-base h-7 indent-2"
        }
        value={name}
        onChange={setName}
        placeholder="name"
      />
      <Button
        className={`text-black mx-0.5 rounded-lg h-min cursor-pointer bg-gray-300 px-2 py-0.5 hover:bg-gray-200`}
        onClick={handleRegister}
        children="Register"
        type={"submit"}
      />
    </div>
  );
};

export default Register;
