import React from "react";

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista";
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista";
import { FormAnalista } from "../../../components/Forms/FormAnalista/FormAnalista";

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp";


import styles from "./FormularioAnalista.module.css";

export const FormularioAnalista = () => {
  return (
    <div className={styles.main}>
      <SidebarAnalista
        nome="Gabriel Briscese"
        funcao="Analista"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderAnalista arrow="True" link="/analista/mercadoria" />
        </div>
        <div className={styles.content}>
          <FormAnalista numeroPedido="1001" nomeProduto="Café" />
        </div>
      </div>
    </div>
  );
};
