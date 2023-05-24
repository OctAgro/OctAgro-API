import React, { useState } from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { MercadoriasPendentes } from "../../../components/MercadoriasPendentes/MercadoriasPendentes"

// IMPORTANDO CSS
import styles from "./HomeRecebedor.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const HomeRecebedor = () => {
  return (
    <MercadoriasProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarRecebedor />
        </div>
        <div id={styles["header"]}>
          <HeaderRecebedor arrow="True" link="/recebedor/home" />
        </div>
        <div id={styles["body"]}>
          <MercadoriasPendentes />
        </div>
      </div>      
    </MercadoriasProvider>
  )
}
