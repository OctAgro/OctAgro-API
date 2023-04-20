import React, { useState, useEffect } from "react";
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista";
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista";
import { MercadoriasPendentes } from "../../../components/MercadoriasPendentes/MercadoriasPendentes"

import UserImg from "../../../assets/UserImg.webp"

import styles from "./HomeAnalista.module.css";

export const HomeAnalista = () => {
  const [mercadoriasPendentes, setMercadoriasPendentes] = useState(null)

  useEffect(() => {
    async function fetchMercadoriasPendentes() {
      const response = await fetch(
        "https://api.example.com/mercadorias/pendentes"
      )
      const data = await response.json()
      setMercadoriasPendentes(data.quantidade)
    }
    fetchMercadoriasPendentes()
  }, [])

  return (
    <div className={styles.main}>
      <SidebarAnalista
      nome='Gabriel Briscese'
      funcao='Analista'
      imagem={UserImg} />

      <div className={styles.container}>
        <HeaderAnalista />
        <div>
          <MercadoriasPendentes mercadoriasPendentes={mercadoriasPendentes} />
        </div>
      </div>
    </div>
  );
};
