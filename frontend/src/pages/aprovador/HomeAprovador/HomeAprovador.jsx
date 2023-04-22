import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

export const HomeAprovador = () => {
    const location = useLocation();
    const dados = location.state.dados;
    console.log(dados.id_usuario)

  const [relatoriosPendentes, setRelatoriosPendentes] = useState(1)

  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome={dados.nome}
        funcao={dados.funcao}
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