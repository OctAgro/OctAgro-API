import React from "react"

// importando os componentes
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormRecebedorUpdate } from "../../../components/Forms/FormRecebedorUpdate/FormRecebedorUpdate"

import styles from "./FormularioRecebedorUpdate.module.css"

// Importando o Provider
import { MercadoriasProvider } from "../../../context/MercadoriasRecebedorContext"

export const FormularioRecebedorUpdate = () => {
  return (
    <MercadoriasProvider>
      <div className={styles.main}>
        <SidebarRecebedor />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderRecebedor arrow="True" link="/recebedor/mercadoriascadastradas" />
          </div>

          <div className={styles.content}>
            <FormRecebedorUpdate />
          </div>
        </div>
      </div>
    </MercadoriasProvider>
  )
}
