import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovadorVoltar } from "../../../components/header/HeaderAprovadorVoltar/HeaderAprovadorVoltar"
import { FormAprovador } from "../../../components/FormAprovador/FormAprovador"

// importando o CSS do module.css
import styles from "./RelatorioAprovador.module.css"

export const RelatorioAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador />

      <div className={styles.container}>
        <HeaderAprovadorVoltar />

        <FormAprovador />
      </div>
    </div>
  );
};