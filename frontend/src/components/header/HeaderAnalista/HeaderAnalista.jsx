import React, { useContext } from "react"
import styles from "./HeaderAnalista.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

import { PedidosAnalistaContext } from "../../../context/PedidosAnalistaContext"

export const HeaderAnalista = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dados = useContext(PedidosAnalistaContext)

  console.log(dados)

  const numeroPedidos = dados[1]

  // Falta essa lógica no backEnd ainda, por enquanto pegando o numero de pedidos geral.
  const numeroPedidosTotal = dados[1]

  return (
    <div className={styles.external}>
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

      <div className={styles.clipboards}>
        <div className={styles.clipboardA}>
          <div className={styles.leftSideA}>
            <FontAwesomeIcon className="icon" icon={faClipboard} />
          </div>
          <div className={styles.rightSideA}>
            <h2>{numeroPedidos ? numeroPedidos : 0}</h2>
            <h3>
              Pedido(s) <br /> pendentes
            </h3>
          </div>
        </div>

        <div className={styles.clipboardB}>
          <div className={styles.leftSideB}>
            <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
          </div>
          <div className={styles.rightSideB}>
            <h2>{numeroPedidosTotal ? numeroPedidosTotal : 0}</h2>
            <h3>
              Total <br /> de Pedidos
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
