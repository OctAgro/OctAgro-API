import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { TabelaMercadorias } from "../../../components/Tables/TabelaMercadorias/TabelaMercadorias"
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista"

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp"

// importando o CSS do module.css
import styles from "./MercadoriaAnalista.module.css"

export const MercadoriaAnalista = () => {
  return (
    <div className={styles.main}>
      <SidebarAnalista
        nome="Gabriel Briscese"
        funcao="Analista"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderAnalista arrow="True" link="/analista/home" />
        </div>

        <div className={styles.content}>
          <TabelaMercadorias
            numeroPedido="1001"
            descricao="Café"
            data="19/04/2023"
            funcionario="Thiago Zani"
          />
        </div>
      </div>
    </div>
  )
}
