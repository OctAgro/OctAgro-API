import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../context/usuarioContext'

// IMPORTANDO COMPONENTES
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"
import { RelatoriosPendentes } from "../../../components/RelatoriosPendentes/RelatoriosPendentes"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./HomeAprovador.module.css"

export const HomeAprovador = () => {

  const [relatoriosPendentes, setRelatoriosPendentes] = useState(1)

  const { usuario } = useContext(UserContext);

  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome={usuario.nome}
        funcao={usuario.funcao}
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