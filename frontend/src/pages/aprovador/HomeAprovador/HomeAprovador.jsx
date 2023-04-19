import React, { useState, useEffect } from "react"

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

export const HomeAprovador = () => {
  const [relatoriosPendentes, setRelatoriosPendentes] = useState(null)

  useEffect(() => {
    async function fetchRelatoriosPendentes() {
      const response = await fetch(
        "https://api.example.com/relatorios/pendentes"
      )
      const data = await response.json()
      setRelatoriosPendentes(data.quantidade)
    }
    fetchRelatoriosPendentes()
  }, [])

  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome="Thiago Zani"
        funcao="Aprovador"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <HeaderAprovador />
        <div>
          <RelatoriosPendentes relatoriosPendentes={relatoriosPendentes} />
        </div>
      </div>
    </div>
  )
}
