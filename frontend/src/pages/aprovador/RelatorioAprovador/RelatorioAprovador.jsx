import React from "react";

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador";
import { HeaderAprovadorVoltar } from "../../../components/header/HeaderAprovador/HeaderAprovador";

// importando o CSS do module.css
import styles from "./RelatorioAprovador.module.css";

export const RelatorioAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador />

      <div className={styles.containerHeader}>

        <HeaderAprovadorVoltar />
      </div>
    </div>
  );
};
