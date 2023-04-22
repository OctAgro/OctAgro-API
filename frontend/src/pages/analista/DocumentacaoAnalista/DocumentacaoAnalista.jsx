import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"

import { InformacoesDocAnalistaRcNf } from "../../../components/Informacoes/InformacoesDocAnalistaRcNf/InformacoesDocAnalistaRcNf"


// importando foto
import UserImg from "../../../assets/UserImg.webp"

// importando o css
import styles from "./DocumentacaoAnalista.module.css"

let numeroPedido = '1001'

export const DocumentacaoAnalista = ({ documentacao, analista, recebedor/* , numeroPedido */ }) => {
  return (
    <div className={styles.main}>
      <SidebarAnalista 
      nome="Gabriel Briscese"
      funcao="Analista"
      imagem={UserImg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <InformacoesDocAnalistaRcNf numeroPedido={numeroPedido} />
        </div>
      </div>
    </div>
  )
}
