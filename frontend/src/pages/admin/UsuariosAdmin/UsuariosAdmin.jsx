import React from "react"

// Importando o Provider
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderUsuarios } from "../../../components/header/HeaderAdmin/HeaderUsuarios/HeaderUsuarios"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./UsuariosAdmin.module.css"

export const UsuariosAdmin = () => {
  return (
    <UsuariosCadastradosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAdmin />
        </div>
        <div id={styles["header"]}>
          <HeaderUsuarios />
        </div>
        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/usuarios" linkCadastrar="/admin/usuarios/cadastrousuarios">
            <FontAwesomeIcon icon={faUserPlus} title="Cadastrar novo usuário!" />
          </BarraAdmin>
        </div>

        <div id={styles["body"]}>{/*  < Body /> */}</div>
      </div>
    </UsuariosCadastradosProvider>
  )
}
