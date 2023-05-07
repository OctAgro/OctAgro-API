import React from "react"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { BodyAdm } from "../../../components/Body/BodyAdm/BodyAdm"

// Importando CSS
import styles from "./HomeAdmin.module.css"
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

export const HomeAdmin = () => {

  return (
    <UsuariosCadastradosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>        
        <div id={styles["body"]}><BodyAdm /></div>          
      </div>      
    </UsuariosCadastradosProvider>
  )
}
