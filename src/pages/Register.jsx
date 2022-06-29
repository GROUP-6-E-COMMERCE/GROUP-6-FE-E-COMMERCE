import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import LogoNav from "../assets/images/altanotebook.png";

import Layout from "../components/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://18.204.209.223/users", {
        name: name,
        email: email,
        password: password,
        alamat: alamat,
      })
      .then((res) => {
        const { data } = res;
        //localStorage.setItem("userToken", JSON.stringify(data.data.token));
        navigate("/login", { replace: true });
        alert(data.message);
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
        <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
          <div className="flex flex-col justify-center h-full">
            <div>Register</div>
            <div className="py-3">
              <TextField
                className="w-full bg-white"
                id="input-name"
                label="Name"
                variant="outlined"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="py-3">
              <TextField
                className="w-full bg-white mb-2"
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
              />
            </div>
            <div className="py-3">
              <TextField
                className="w-full bg-white"
                id="input-address"
                label="Address"
                variant="outlined"
                value={alamat}
                type="text"
                maxRows={4}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            <Button
              className="py-3 w-50"
              color="warning"
              variant="contained"
              onClick={() => handleSubmit()}
              disabled={
                name.length === 0 ||
                email.length === 0 ||
                password.length === 0 ||
                alamat.length === 0
              }
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
