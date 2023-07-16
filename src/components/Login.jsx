import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.email && data.password) {
      setLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="home" />;
  }

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">名前</label>
          <div className="loginError">{errors.name && errors.name.message}</div>
          <input
            id="name"
            type="text"
            {...register("name", { required: "名前を入力してください" })}
            placeholder="名前"
          />

          <label htmlFor="email">メールアドレス</label>
          <div className="loginError">{errors.email && errors.email.message}</div>
          <input
            id="email"
            type="email"
            {...register("email", { required: "メールアドレスを入力してください" })}
            placeholder="メールアドレス"
          />

          <label htmlFor="password">パスワード</label>
          <div className="loginError">{errors.password && errors.password.message}</div>
          <input
            id="password"
            type="password"
            {...register("password", { required: "パスワードを入力してください" })}
            placeholder="パスワード"
          />

          <button className="loginButton" type="submit">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
