import React from "react";
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador";
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador";
import UserImg from "../../../assets/UserImg.webp"

import styles from "./HomeAprovador.module.css";

export const HomeAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador nome='Thiago Zani' funcao='Aprovador' imagem={UserImg} />

      <div className={styles.containerHeader}>
        <HeaderAprovador />
      </div>
    </div>
  );
};
