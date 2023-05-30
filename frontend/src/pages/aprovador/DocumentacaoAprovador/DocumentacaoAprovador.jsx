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

export const DocumentacaoAprovador = ({ documentacao, analista, recebedor }) => {
  if (documentacao) {
    return (
      <RelatoriosProvider>
        <div className={styles.main}>
          <SidebarAprovador />
          <div className={styles.container}>
            <div className={styles.content}>
              <InformacoesDocumentos />
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
        <div id={styles["main"]}>
          <div id={styles["sidebar"]}>
            <SidebarAprovador />
          </div>
          <div id={styles["header"]}>
          </div>

          <div id={styles["body"]}>
            <InformacoesRecebedor />
          </div>
        </div>
      </RelatoriosProvider>
    )
  }
}
