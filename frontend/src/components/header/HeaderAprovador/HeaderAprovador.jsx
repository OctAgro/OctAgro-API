import React, { useContext } from "react"
import styles from "./HeaderAprovador.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

import { RelatoriosAprovadorContext } from "../../../context/RelatoriosAprovadorContext"

export const HeaderAprovador = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dadosAnalista = useContext(RelatoriosAprovadorContext)

  console.log(dadosAnalista)

  const numeroRelatorios = 1

  // Falta essa lógica no backEnd ainda, por enquanto pegando o numero de relatórios geral.
  const numeroRelatoriosTotal = 1

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
          <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{numeroRelatorios ? numeroRelatorios : 0}</h1>
          <h3 className={styles.subtitle}>
            Relatório(s) <br /> pendentes
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
        </div>
        <div className={styles.rightSide}>
          <h1 className={styles.title}>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h1>
          <h3 className={styles.subtitle}>
            Total <br /> de relatórios
          </h3>
        </div>
      </div>
    </div>
  )
}
