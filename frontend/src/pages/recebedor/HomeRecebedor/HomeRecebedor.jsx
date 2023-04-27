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
      <div className={styles.main}>
        <SidebarRecebedor />

        <div className={styles.container}>
          <HeaderRecebedor />
          <div>
            <MercadoriasPendentes />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}
