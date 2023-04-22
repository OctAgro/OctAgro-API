import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"

import { TabelaMercadoriasCadastradas } from "../../../components/TabelaMercadoriasCadastradas/TabelaMercadoriasCadastradas"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./MercadoriaRecebedor.module.css"

export const MercadoriaRecebedor = () => {
  return (
    <div className={styles.main}>
      <SidebarRecebedor nome="Leandro Luz" funcao="Recebedor" imagem={UserImg} />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderRecebedor arrow="True" link="/recebedor/home" />
        </div>

        <div className={styles.content}>
          <TabelaMercadoriasCadastradas
            numeroPedido="1001"
            fornecedor="Coffelicious"
            tipoCarga="Café"
            statusAnalise="Não Iniciada"
          />
        </div>
      </div>
    </div>
  )
}
