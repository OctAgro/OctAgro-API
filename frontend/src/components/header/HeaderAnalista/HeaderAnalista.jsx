import React, { useContext, useEffect, useState } from "react"
import styles from "./HeaderAnalista.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

import { PedidosAnalistaContext } from "../../../context/PedidosAnalistaContext"
import { buscarContadores } from "../../../hooks/buscarContadoresSistema"

export const HeaderAnalista = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dados = useContext(PedidosAnalistaContext)

  console.log(dados)

  const numeroPedidos = dados[1]

  // Falta essa lógica no backEnd ainda, por enquanto pegando o numero de pedidos geral.
  const numeroPedidosTotal = dados[1]

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
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className={styles.iconArrow}
            />
          </Link>
        </div>
      ) : null}


      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{contadores.countRecebedorPendente}</h1>
          <h3 className={styles.subtitle}>
            Pedido(s) <br /> pendentes
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{contadores.countRecebedorRecebido}</h1>
          <h3 className={styles.subtitle}>
            Total <br /> de Pedidos
          </h3>
        </div>
      </div>
    </div>

  )
}
