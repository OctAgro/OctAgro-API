import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"

import { InformacoesDocumentos } from "../../../components/Informacoes/InformacoesDocumentos/InformacoesDocumentos"
import { InformacoesAnalista } from "../../../components/Informacoes/InformacoesAnalista/InformacoesAnalista"
import { InformacoesRecebedor } from "../../../components/Informacoes/InformacoesRecebedor/InformacoesRecebedor"

// importando o css
import styles from "./DocumentacaoAprovador.module.css"

// Importando o Provider
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"

let numeroPedido = "1001"

export const DocumentacaoAprovador = ({ documentacao, analista, recebedor /* , numeroPedido */ }) => {
  if (documentacao) {
    return (
      <RelatoriosProvider>
        <div className={styles.main}>
          <SidebarAprovador />
          <div className={styles.container}>
            <div className={styles.content}>
              <InformacoesDocumentos numeroPedido={numeroPedido} />
            </div>
          </div>
        </div>
      </RelatoriosProvider>
    )
  } else if (analista) {
    return (
      <RelatoriosProvider>
        <div className={styles.main}>
          <SidebarAprovador />
          <div className={styles.container}>
            <div className={styles.content}>
              <InformacoesAnalista />;
            </div>
          </div>
        </div>
      </RelatoriosProvider>
    )
  } else if (recebedor) {
    return (
      <RelatoriosProvider>
        <div className={styles.main}>
          <SidebarAprovador />

          <div className={styles.container}>
            <div className={styles.content}>
              <InformacoesRecebedor />;
            </div>
          </div>
        </div>
      </RelatoriosProvider>
    )
  }
}
