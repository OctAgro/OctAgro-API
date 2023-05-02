import React from "react";

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { BodyAdm } from "../../../components/Body/BodyAdm/BodyAdm"

// Importando CSS
import styles from "./HomeAdmin.module.css"
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

export const HomeAdmin = () => {
  return (
    <UsuariosCadastradosProvider>
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>
          <BodyAdm />
        </div>
      </div>
    </UsuariosCadastradosProvider>
  )
}
