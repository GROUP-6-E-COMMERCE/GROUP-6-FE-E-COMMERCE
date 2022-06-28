import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

import Layout from "../components/Layout";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit() {
    axios
      .post(
        //"https://alta-kitchen-sink.herokuapp.com/api/v1/login",
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { data } = res;
        localStorage.setItem("userToken", JSON.stringify(data.data.token));
        alert(data.message);
        this.props.navigate("/homepage", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { email, password } = this.state;

    return (
      <Layout>
        <div className="justify-center items-center h-full sm:flex">
          <img
            className="p-3 w-1/2 sm:w-1/3"
            src="https://dynamic.brandcrowd.com/asset/logo/6014a37c-f213-4222-95a4-afa6fad0294b/logo-search-grid-1x?v=637872391521570000"
            alt="Sunset in the mountains"
          />

          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  onChange={(e) => this.setState({ email: e.target.value })}
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
                  onChange={(e) => this.setState({ password: e.target.value })}
                />{" "}
              </div>
              <Button
                color="warning"
                className="w-1/2 py-3"
                variant="contained"
                onClick={() => this.handleSubmit()}
                disabled={email.length === 0 || password.length === 0}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Login;
