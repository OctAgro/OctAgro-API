import React from "react";



// importando os componentes


import { InformacoesDocumentos } from "../../../components/Informacoes/InformacoesDocumentos/InformacoesDocumentos";
import { InformacoesAnalista } from "../../../components/Informacoes/InformacoesAnalista/InformacoesAnalista";
import { InformacoesRecebedor } from "../../../components/Informacoes/InformacoesRecebedor/InformacoesRecebedor";

// importando o css
import styles from "./DocumentacaoAprovador.module.css";

export const DocumentacaoAprovador = ({ documentacao, analista, recebedor }) => {
  if (documentacao) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/aprovador/relatorio" />
          </div>

          <div className={styles.content}>
            <InformacoesDocumentos />;
          </div>
        </div>
      </div>
    );
  } else if (analista) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/aprovador/relatorio" />
          </div>

          <div className={styles.content}>
            <InformacoesAnalista />;
          </div>
        </div>
      </div>
    );
  } else if (recebedor) {
    return (
      <div className={styles.main}>
        <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAprovador arrow="True" link="/aprovador/relatorio" />
          </div>

          <div className={styles.content}>
            <InformacoesRecebedor />;
          </div>
        </div>
      </div>
    );
  }
};
