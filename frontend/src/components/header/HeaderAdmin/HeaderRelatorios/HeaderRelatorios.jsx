import React, { useContext, useEffect, useState } from "react"
import styles from "./HeaderRelatorios.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePen, faCheckDouble, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

import { UsuariosCadastradosContext } from "../../../../context/UsuariosCadastradosContext"
import { buscarContadores } from "../../../../hooks/buscarContadoresSistema"

export const HeaderRelatorios = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dadosTodosUsuarios = useContext(UsuariosCadastradosContext)

  console.log(dadosTodosUsuarios)

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
      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faFilePen} />
        </div>
        <div className={styles.rightSide}>
          {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}

          <h1 className={styles.title}>{contadores.totalRelatorios}</h1>
          <h3 className={styles.subtitle}>
            Relatórios
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faCheckDouble} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1 className={styles.title}>{contadores.countRelatoriosAprovados}</h1>
          <h3 className={styles.subtitle}>
            Aprovados
          </h3>
        </div>
      </div>
      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faThumbsDown} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1 className={styles.title}>{contadores.countRelatoriosRecusados}</h1>
          <h3 className={styles.subtitle}>
            Recusados
          </h3>
        </div>
      </div>
    </div>
  )
}
