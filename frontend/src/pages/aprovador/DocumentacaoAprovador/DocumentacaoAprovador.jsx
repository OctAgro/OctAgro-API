import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"

import { InformacoesDocumentos } from "../../../components/Informacoes/InformacoesDocumentos/InformacoesDocumentos"
import { InformacoesAnalista } from "../../../components/Informacoes/InformacoesAnalista/InformacoesAnalista"
import { InformacoesRecebedor } from "../../../components/Informacoes/InformacoesRecebedor/InformacoesRecebedor"

// importando foto
import UserImg from "../../../assets/UserImg.webp"

// importando o css
import styles from "./DocumentacaoAprovador.module.css"

let numeroPedido = '1001'

export const DocumentacaoAprovador = ({ documentacao, analista, recebedor/* , numeroPedido */ }) => {
  if (documentacao) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />
        <div className={styles.container}>
          <div className={styles.content}>
            <InformacoesDocumentos numeroPedido={numeroPedido} />
          </div>
        </div>
      </div>
    )
  } else if (analista) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.content}>
            <InformacoesAnalista />;
          </div>
        </div>
      </div>
    )
  } else if (recebedor) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.content}>
            <InformacoesRecebedor />;
          </div>
        </div>
      </div>
    )
  }
}