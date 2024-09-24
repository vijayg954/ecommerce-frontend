import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "signUp") {
        const response = await axios.post(
          backendUrl + "/api/v1/user/register",
          {
            name,
            email,
            password,
          }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message);
        } else {
          console.log("errror hai");
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/v1/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);

          localStorage.setItem("token", response.data.token);

          console.log(response.data);
        }else{
          toast.error(response.data.message);

        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
useEffect(()=>{
if(token){
  navigate("/")
}
},[token])
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
      </div>
      {currentState === "login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("signUp")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button
        className="bg-black text-white  font-light px-8 py-2 mt-4"
        type="submit"
      >
        {currentState === "login" ? "login" : "signUp"}
      </button>
    </form>
  );
};

export default Login;
