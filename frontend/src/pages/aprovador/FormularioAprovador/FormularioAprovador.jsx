import React from "react";

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador";
import { HeaderAprovadorVoltar } from "../../../components/header/HeaderAprovadorVoltar/HeaderAprovadorVoltar";
import { FormAprovador } from "../../../components/FormAprovador/FormAprovador";

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp";


import styles from "./FormularioAprovador.module.css";

export const FormularioAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome="Thiago Zani"
        funcao="Aprovador"
        imagem={UserImg}
      />

      <div className={styles.container}>
      <HeaderAprovadorVoltar link="/aprovador/relatorio" />
        <div>
          <FormAprovador numeroPedido="1001" nomeAnalista="Thiago Zani" />
        </div>
      </div>
    </div>
  );
};
