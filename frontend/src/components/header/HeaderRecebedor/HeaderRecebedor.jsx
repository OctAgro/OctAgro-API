import React, { useContext, useEffect, useState } from "react"
import styles from "./HeaderRecebedor.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

import { MercadoriasRecebedorContext } from "../../../context/MercadoriasRecebedorContext"
import { buscarContadores } from "../../../hooks/buscarContadoresSistema"

export const HeaderRecebedor = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dados = useContext(MercadoriasRecebedorContext)

  console.log(dados)

  const numeroMercadorias = dados[1]

  // Falta essa lógica no backEnd ainda, por enquanto pegando o numero de pedidos geral.
  const numeroMercadoriasTotal = dados[1]

  //Pegando dados dos contadores
  const [contadores, setContadores] = useState([])

  useEffect(() => {
    async function fetchContadores() {
      const dadosContadores = await buscarContadores()
      setContadores(dadosContadores)
    }
    fetchContadores()
  }, [])

  return (
    <div className={styles.clipboards}>
      
        {arrow ? (
          <div className={styles.arrow}>
            <Link to={link} className={styles.arrow}>
              <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.iconArrow} />
            </Link>
          </div>
        ) : null}
      

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faTruck} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{contadores.countPedidoPendente}</h1>
          <h3 className={styles.subtitle}>
            Mercadorias <br /> Pendentes
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faTruck} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{contadores.countPedidoRecebido}</h1>
          <h3 className={styles.subtitle}>
            Mercadorias <br /> Recebidas
          </h3>
        </div>
      </div>
    </div>

  )
}
