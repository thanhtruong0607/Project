import React, { useState, useEffect } from "react";
import validation from "./validation";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import _ from "underscore";

import { DATA_BASE, HOST, USER_KEY } from "../utils/config";
import service from "../service/axios";

const LOGIN_URL = "/login";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      username: "",
      password: "",
      errors: {},
    };

    this.navigate = props.navigate;
  }

  componentDidMount() {
    console.log(`COMPONENT MOUNT`);
  }

  componentWillUnmount() {
    console.log(`COMPONENT UNMOUNT`);
  }

  componentDidUpdate() {
    console.log(`COMPONENT UPDATE`);
  }

  handleFormSubmit = async (event) => {
    const { username, password } = this.state;
    event.preventDefault();

    let _validation = validation(username, password);
    if (!_.isEmpty(_validation)) {
      this.setState({
        errors: _validation,
      });
    } else {
      const users = {
        username,
        password,
      };

      // TODO: Gọi đến DB Mongo => Lấy user => Lấy USER_KEY
      /**
       * user_info: { user_name: 'admin', password: 'admin', user_key: '7b36bc13-879a-4728-91a3-eb3772ba886e' }
       *
       * USER_KEY = user_info.user_key
       *
       */

      let user_info = {
        username: "admin",
        user_key: "7b36bc13-879a-4728-91a3-eb3772ba886e",
      };

      USER_KEY.KEY = user_info.user_key;

      const response = await service.post({}, HOST.CURRENT_SESSION);
      if (response && response.data.result) {
        user_info = {
          ...user_info,
          ...response.data.result,
        };
      }

      console.log(`user_info: `, user_info);

      // localStorage.setItem("users", JSON.stringify(response));
      this.navigate("/");
    }
  };

  hiddenPassword = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const { hidden, password, username, errors } = this.state;
    return (
      <div className="container-fluid row my-header">
        <div className="img text-center pb-4 mb-3 col-12">
          <img
            alt="Logo"
            src="https://www.xboss.com/web/image/res.company/3/logo?unique=cecfb71"
          ></img>
        </div>

        <div className="app-wrapper">
          <div>
            <h2 className="title">Welcome Back</h2>
          </div>
          <form>
            <div className="username">
              <label className="label">User Name</label>
              <input
                className="input"
                type="text"
                name="username"
                value={username}
                onChange={this.onChangeUsername}
              ></input>
            </div>
            {errors.username && <p className="error">{errors.username}</p>}
            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type={hidden ? "text" : "password"}
                name="password"
                value={password}
                onChange={this.onChangePassword}
              ></input>
              <svg className="eye" onClick={this.hiddenPassword}>
                {hidden ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </svg>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <div>
              <button className="submit" onClick={this.handleFormSubmit}>
                Login
              </button>
            </div>
          </form>
          <div className="title">
            <a href="https://www.xboss.com/">Don't have an account</a>
          </div>
          <div className="title">
            <a href="https://www.xboss.com/">Log in as superuser</a>
          </div>
          <span className="title">
            <a href="https://www.xboss.com/">Manage Database</a>
          </span>
          <span className="title">
            <a href="https://www.xboss.com/">Powered by Xboss</a>
          </span>
        </div>
      </div>
    );
  }
}

const HookLoginForm = () => {
  const navigate = useNavigate();
  return <LoginForm navigate={navigate} />;
};

export default HookLoginForm;
