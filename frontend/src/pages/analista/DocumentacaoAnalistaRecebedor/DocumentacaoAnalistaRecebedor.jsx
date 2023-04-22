import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"

import { InfoDocAnalistaRecebedor } from "../../../components/Informacoes/InfoDocAnalistaRecebedor/InfoDocAnalistaRecebedor"


// importando foto
import UserImg from "../../../assets/UserImg.webp"

// importando o css
import styles from "./DocumentacaoAnalistaRecebedor.module.css"

let numeroPedido = '1001'

export const DocumentacaoAnalistaRecebedor = ({ documentacao, analista, recebedor/* , numeroPedido */ }) => {
  return (
    <div className={styles.main}>
      <SidebarAnalista 
      nome="Gabriel Briscese"
      funcao="Analista"
      imagem={UserImg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <InfoDocAnalistaRecebedor numeroPedido={numeroPedido} />
        </div>
      </div>
    </div>
  )
}
