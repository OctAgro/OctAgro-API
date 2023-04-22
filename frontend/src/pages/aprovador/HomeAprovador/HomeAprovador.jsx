import { React } from "react"

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

// IMPORTANDO O PROVIDER
import { RelatoriosProvider } from "../../../context/RelatoriosAprovadorContext"
import { UserProvider } from "../../../context/userContext"

export const HomeAprovador = () => {
  return (
    <UserProvider>
      <RelatoriosProvider>
        <div className={styles.main}>
          <SidebarAprovador nome="Thiago Zani" funcao="Aprovador" imagem={UserImg} />

          <div className={styles.container}>
            <div className={styles.header}>
              <HeaderAprovador />
            </div>
            <div>
              <RelatoriosPendentes />
            </div>
          </div>
        </div>
      </RelatoriosProvider>
    </UserProvider>
  )
}
