import React, { useState } from "react";
import Cookies from "js-cookie";
import octagroTransparente from "../assets/octagroTransparente.png";
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import { fazerLogin } from "../hooks/usarLogin";

export const Login = () => {
  // USA MODULO 'JS-COOKIE' PARA LEMBRAR O USERNAME SE O USUARIO MARCAR A OPÇÃO DE 'LEMBRAR-ME'

  const navigate = useNavigate();
  
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dados = await fazerLogin(username, password);
      alert(dados.message);

      //capturando a funcao do usuario
      const tipoFuncao = dados.funcao;

      //redirecionamento do usuário para a página "home" com base no tipo de função
      if (tipoFuncao === "Aprovador") {
        navigate("/aprovador/home");
      } else if (tipoFuncao === "Analista"){
        navigate("/analista/home");
      } else if (tipoFuncao === "Recebedor"){
        navigate("/recebedor/home");
      }

    } catch (erro) {
      setErrorMessage(erro.response.data.message);
      alert(errorMessage);
    }
  };

  return (
    <div className={styles.fundoLogin}>
      <div className={styles.boxLogin}>
        <img
          className={styles.logoTop}
          src={octagroTransparente}
          alt="Logo da OctAgro"
        />


        <form className={styles.formsUser} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" id="username-label" className={styles.label}>
              Login:
            </label>
            <br />
            <input
              className={styles.inputLogin}
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
            <label htmlFor="password" id="password-label" className={styles.label}>
              Senha:
            </label>
            <br />
            <input
              className={styles.inputLogin}
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
            className={styles.inputLoginAcessar}
            type="submit"
            value="Acessar"
            onClick={handleSubmit}
          />
        </form>

        <p>{errorMessage}</p>

        <div className={styles.bottomBoxLogin}>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            onChange={handleRemember}
          />
          <label htmlFor="remember" id="remember-label" className={styles.label}>
            Lembrar-me
          </label>
        </div>
        <a className={styles.forgotPassword} href="">
          Esqueceu a senha?
        </a>
      </div>
    </div>
  );
};
