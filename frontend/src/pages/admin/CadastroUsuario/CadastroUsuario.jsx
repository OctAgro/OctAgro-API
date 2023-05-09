import React from "react"

// Importando o Provider
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderUsuarios } from "../../../components/header/HeaderAdmin/HeaderUsuarios/HeaderUsuarios"
import { FormCadUsuario } from "../../../components/Forms/FormsAdmin/FormCadUsuario/FormCadUsuario"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./CadastroUsuario.module.css"

export const CadastroUsuario = () => {
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
          <BarraAdmin linkVoltar="/admin/usuarios">
            <FontAwesomeIcon icon={faUserPlus} title="Cadastrar novo usuário!" />
          </BarraAdmin>
        </div>
        <div id={styles["body"]}>
          <FormCadUsuario />
        </div>
      </div>
    </UsuariosCadastradosProvider>
  )
}
