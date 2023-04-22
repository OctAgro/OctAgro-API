import { React, useState, useEffect, useContext } from "react"
import styles from "./HeaderAprovador.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO O CONTEXTO
import { RelatoriosAprovadorContext } from "../../../context/RelatoriosAprovadorContext.jsx"

export const HeaderAprovador = ({ arrow, link }) => {
  const [numerosRelatoriosPendentes, setNumerosRelatoriosPendentes] = useState("...")
  const [totalRelatoriosAprovador, setTotalRelatoriosAprovador] = useState(12)

  const dados = useContext(RelatoriosAprovadorContext)

  useEffect(() => {
    const numerosRelatorios = dados[1]
    setNumerosRelatoriosPendentes(numerosRelatorios)
/*     setTotalRelatoriosAprovador(numerosRelatorios) */
  }, [dados])

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
            <FontAwesomeIcon className="icon" icon={faClipboard} />
          </div>
          <div className={styles.rightSideA}>
            <h2>{numerosRelatoriosPendentes}</h2>
            <h3>
              Relatório(s) <br /> pendentes
            </h3>
          </div>
        </div>

        <div className={styles.clipboardB}>
          <div className={styles.leftSideB}>
            <FontAwesomeIcon className={styles.icon} icon={faClipboard} />
          </div>
          <div className={styles.rightSideB}>
            <h2>{totalRelatoriosAprovador}</h2>
            <h3>
              Total <br /> de relatórios
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
