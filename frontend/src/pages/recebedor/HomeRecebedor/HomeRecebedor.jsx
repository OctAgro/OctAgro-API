import React, { useState } from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { MercadoriasPendentes } from "../../../components/MercadoriasPendentes/MercadoriasPendentes"

// IMPORTANDO CSS
import styles from "./HomeRecebedor.module.css"

export const HomeRecebedor = () => {

  const [mercadoriasPendentes, setRelatoriosPendentes] = useState(1)

  return (
    <div className={styles.main}>
      <SidebarRecebedor
      />

      <div className={styles.container}>
        <HeaderRecebedor />
        <div>
          <MercadoriasPendentes mercadoriasPendentes={mercadoriasPendentes} />
        </div>
      </div>
    </div>
  )
}