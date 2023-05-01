import React from "react"

// Importando o Provider
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderUsuarios } from "../../../components/header/HeaderAdmin/HeaderUsuarios/HeaderUsuarios"

// Importando CSS
import styles from "./UsuariosAdmin.module.css"

export const UsuariosAdmin = () => {
  return (
    <UsuariosCadastradosProvider>
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>    
          <HeaderUsuarios />
          <div>
           {/*  < Body /> */}
          </div>
        </div>
      </div>
    </UsuariosCadastradosProvider>
  )
}
