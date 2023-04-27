import React, { useContext } from "react"
import styles from "./HeaderRecebedor.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { MercadoriasRecebedorContext } from "../../../context/MercadoriasRecebedorContext"

export const HeaderRecebedor = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dados = useContext(MercadoriasRecebedorContext)

  console.log(dados)

  const numeroMercadorias = dados[1]

  // Falta essa lógica no backEnd ainda, por enquanto pegando o numero de pedidos geral.
  const numeroMercadoriasTotal = dados[1]

  return (
    <div className={styles.external}>
      {arrow ? (
        <div className={styles.arrow}>
          <Link to={link} className={styles.arrow}>
            <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.iconArrow} />
          </Link>
        </div>
      ) : null}

      <div className={styles.clipboards}>
        <div className={styles.clipboardA}>
          <div className={styles.leftSideA}>
            <FontAwesomeIcon className="icon" icon={faTruck} />
          </div>
          <div className={styles.rightSideA}>
          <h2>{numeroMercadorias ? numeroMercadorias : 0}</h2>
            <h3>
              Mercadorias <br /> à Caminho
            </h3>
          </div>
        </div>

        <div className={styles.clipboardB}>
          <div className={styles.leftSideB}>
            <FontAwesomeIcon className={styles.icon} icon={faTruck} />
          </div>
          <div className={styles.rightSideB}>
          <h2>{numeroMercadoriasTotal ? numeroMercadoriasTotal : 0}</h2>
            <h3>
              Total <br /> Mercadorias
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
