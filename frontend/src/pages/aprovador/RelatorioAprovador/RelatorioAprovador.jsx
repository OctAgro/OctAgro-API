import React from "react";

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador";
import { HeaderAprovadorVoltar } from "../../../components/header/HeaderAprovadorVoltar/HeaderAprovadorVoltar";
import { TabelaRelatorios } from "../../../components/TabelaRelatorios/TabelaRelatorios";

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp";

// importando o CSS do module.css
import styles from "./RelatorioAprovador.module.css";

export const RelatorioAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome="Thiago Zani"
        funcao="Aprovador"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <HeaderAprovadorVoltar link="/aprovador/home" />
        <div>
          <TabelaRelatorios
            numeroPedido="1001"
            descricao="Café"
            situacao="Aceito"
            funcionario="Thiago Zani"
          />
        </div>
      </div>
    </div>
  );
};
