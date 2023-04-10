import React, { useState } from "react";
import Cookies from "js-cookie";
import octagroTransparente from "../assets/octagroTransparente.png";
import "./Login.css";

export const Login = () => {
  // USA MODULO 'JS-COOKIE' PARA LEMBRAR O USERNAME SE O USUARIO MARCAR A OPÇÃO DE 'LEMBRAR-ME'
  const handleRemember = (event) => {
    if (event.target.checked) {
      const username = document.getElementById("username").value;
      Cookies.set("rememberedUsername", username, { expires: 30 });
    } else {
      Cookies.remove("rememberedUsername");
    }
  };

  // CONST PARA ARMAZENAR OS VALORES DO SCRIPT
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // SCRIPT CRIADO PELO NOSSO CHEFE LEANDRO PARA VALIDAR OS CAMPOS (falta mesclar com o backend)
  const handleValidation = (event) => {
    if (username === "username" && password === "password") {
      alert("Login efetuado com sucesso!");
    } else {
      alert("Login ou senha incorretas! Tente de novo.");
    }
  };

  return (
    <div className="fundo-login">
      <div className="box-login">
        <img
          className="logo-top"
          src={octagroTransparente}
          alt="Logo da OctAgro"
        />
        <form className="forms-user">
          <div>
            <label htmlFor="username" id="username-label">
              Login:
            </label>
            <br />
            <input
              className="input-login"
              type="text"
              id="username"
              name="username"
              placeholder="Digite sua matrícula"
              required
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" id="password-label">
              Senha:
            </label>
            <br />
            <input
              className="input-login"
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <input
            className="input-login-acessar"
            type="submit"
            value="Acessar"
            onClick={handleValidation}
          />
        </form>
        <div className="bottom-box-login">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            onChange={handleRemember}
          />
          <label htmlFor="remember" id="remember-label">
            Lembrar-me
          </label>
        </div>
        <a className="forgot-password" href="">
          Esqueceu a senha?
        </a>
      </div>
    </div>
  );
};
