import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import LogoNav from "../assets/images/altanotebook.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios
      .post("http://18.204.209.223/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const { data } = res;
        localStorage.setItem("token", data.data.token);
        alert(data.message);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="justify-center items-center h-full sm:flex">
        <img
          className="p-3 w-1/2 sm:w-1/3"
          src={LogoNav}
          alt="Sunset in the mountains"
        />

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-col justify-center h-full ">
            <div>Login</div>
            <div className="py-3">
              <TextField
                className="w-full bg-white"
                id="input-email"
                label="Email"
                variant="outlined"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-3">
              <TextField
                className="w-full bg-white"
                id="input-password"
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
            </div>
            <Button
              color="warning"
              className="w-1/2 py-3"
              variant="contained"
              onClick={(e) => handleSubmit(e)}
              disabled={email.length === 0 || password.length === 0}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
