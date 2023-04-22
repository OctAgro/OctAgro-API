import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"
import { MercadoriasPendentes } from "../../../components/MercadoriasPendentes/MercadoriasPendentes"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./HomeRecebedor.module.css"

export const HomeRecebedor = () => {
  const location = useLocation();
  const dados = location.state.dados;
  console.log(dados.id_usuario)

  

  const [mercadoriasPendentes, setRelatoriosPendentes] = useState(1)

  return (
    <div className={styles.main}>
      <SidebarRecebedor
        nome={dados.nome}
        funcao={dados.funcao}
        imagem={UserImg}
      />

      <div className={styles.container}>
        <HeaderRecebedor />
        <div>
          <MercadoriasPendentes mercadoriasPendentes={mercadoriasPendentes} />
        </div>
      </div>
    </div>
  )
}
