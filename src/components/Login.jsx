import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import { Link } from "react-router-dom";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    console.log(username.value);
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:3000/api/auth/login", {
        email: username.value,
        password: password.value,
      })
      .then((response) => {
        response = response.data;
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/admin");
      })
      .catch((error) => {
        setLoading(false);
        if (error.status === "fail") setError(error.data.message);
        else setError("Sai mật khẩu hoặc tài khoản.");
      });
  };

  return (
    <div className="login-form">
      <div className="header-bar">
        <button className="btn btn-primary">
          <Link activeclassName="active" to="/">
            Đăng ký
          </Link>
        </button>
      </div>

      <div className="login-form__container">
        <h3 className="login-form__container__title">Đăng nhập</h3>
        <div>
          <p>Tên người dùng</p>
          <input
            className="login-form__container__input"
            type="text"
            {...username}
            autoComplete="new-password"
          />
        </div>
        <div>
          <p>Mật khẩu</p>
          <input
            className="login-form__container__input"
            type="password"
            {...password}
            autoComplete="new-password"
          />
        </div>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <input
          className="btn btn-primary"
          type="button"
          value={loading ? "Loading..." : "Đăng nhập"}
          onClick={handleLogin}
          disabled={loading}
        />
        <br />
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
