import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { FormAprovador } from "../../../components/Forms/FormAprovador/FormAprovador"

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp"

import styles from "./FormularioAprovador.module.css"

// Importando o Provider
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

export const FormularioAprovador = () => {
  return (
    <RelatoriosProvider>
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/aprovador/relatorio" />
          </div>

          <div className={styles.content}>
            <FormAprovador numeroPedido="1001" nomeAnalista="Thiago Zani" />
          </div>
        </div>
      </div>
    </RelatoriosProvider>
  )
}
