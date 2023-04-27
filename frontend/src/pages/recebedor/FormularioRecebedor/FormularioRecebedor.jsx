import React from "react"

// importando os componentes
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormRecebedor } from "../../../components/Forms/FormRecebedor/FormRecebedor"

import styles from "./FormularioRecebedor.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const FormularioRecebedor = () => {
  return (
    <MercadoriasProvider>
      <div className={styles.main}>
        <SidebarRecebedor />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderRecebedor arrow="True" link="/recebedor/entradamercadoria" />
          </div>

          <div className={styles.content}>
            <FormRecebedor hasButton="true" />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}
