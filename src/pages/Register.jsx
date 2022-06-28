import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

import Layout from "../components/Layout";

class Register extends Component {
  // state = {
  //   name: "",
  //   email: "",
  //   password: "",
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData() {
  //   axios
  //     .get("https://alta-kitchen-sink.herokuapp.com/api/v1/profile", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(
  //           localStorage.getItem("userToken")
  //         )}`,
  //       },
  //     })
  //     .then((res) => {
  //       const { data } = res;
  //       this.setState({
  //         name: data.data.name,
  //         email: data.data.email,
  //         password: data.data.password,
  //       });
  //     })
  //     .catch((err) => {
  //       const { response } = err;
  //       alert(response.statusText);
  //       if (response.status === 401) {
  //         localStorage.removeItem("userToken");
  //         this.props.navigate("/login", { replace: true });
  //       }
  //     });
  // }

  // handleSubmit() {
  //   axios
  //     .post(
  //       "https://alta-kitchen-sink.herokuapp.com/api/v1/login",
  //       {
  //         name: this.state.name,
  //         email: this.state.email,
  //         password: this.state.password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const { data } = res;
  //       localStorage.setItem("userToken", JSON.stringify(data.data.token));
  //       alert(data.message);
  //       this.props.navigate("/homepage", { replace: true });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    //const { name, email, password } = this.state;

    //if (JSON.parse(localStorage.getItem("userToken"))) {
    return (
      <Layout>
        <div className="justify-center items-center h-full sm:flex">
          <img
            className="p-3 w-1/2 sm:w-1/3"
            src="https://dynamic.brandcrowd.com/asset/logo/6014a37c-f213-4222-95a4-afa6fad0294b/logo-search-grid-1x?v=637872391521570000"
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
                  // value={name}
                  type="text"
                  //onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="py-3">
                <TextField
                  className="w-full bg-white mb-2"
                  id="input-email"
                  label="Email"
                  variant="outlined"
                  // value={email}
                  type="email"
                  //onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="py-3">
                <TextField
                  className="w-full bg-white"
                  id="input-password"
                  label="Password"
                  variant="outlined"
                  //value={password}
                  type="password"
                  //onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="py-3">
                <TextField
                  className="w-full bg-white"
                  id="input-address"
                  label="Address"
                  variant="outlined"
                  //value={address}
                  type="text"
                  maxRows={4}
                  //onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <Button
                className="py-3 w-50"
                color="warning"
                variant="contained"
                // onClick={() => this.handleSubmit()}
                // disabled={
                //   name.length === 0 || email.length === 0 || password.length === 0
                // }
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </Layout>
    );
    // } else {
    //   return <Navigate to="/login" />;
    // }
  }
}

export default Register;
