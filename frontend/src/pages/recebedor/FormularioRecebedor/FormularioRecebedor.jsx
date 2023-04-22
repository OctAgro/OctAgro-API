import React from "react"

// importando os componentes
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { FormRecebedor } from "../../../components/Forms/FormRecebedor/FormRecebedor"

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp"

import styles from "./FormularioRecebedor.module.css"

export const FormularioRecebedor = () => {
  return (
    <div className={styles.main}>
      <SidebarRecebedor
        nome="Leandro Luz"
        funcao="Recebedor"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderRecebedor arrow="True" link="/recebedor/entradamercadoria" />
        </div>

        <div className={styles.content}>
          <FormRecebedor numeroPedido="1001" nomeAnalista="Thiago Zani" />
        </div>
      </div>
    </div>
  )
}
