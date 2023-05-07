import React from "react"

// Importando o Provider
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderUsuarios } from "../../../components/header/HeaderAdmin/HeaderUsuarios/HeaderUsuarios"
import { FormCadUsuario } from "../../../components/Forms/FormsAdmin/FormCadUsuario/FormCadUsuario"

// Importando CSS
import styles from "./CadastroUsuario.module.css"

export const CadastroUsuario = () => {
  return (
    <UsuariosCadastradosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderUsuarios /></div>
        <div id={styles["barraPesquisa"]}>Barra Pesquisa</div>
        <div id={styles["body"]}><FormCadUsuario /></div>          
      </div>
    </UsuariosCadastradosProvider>
  )
}
