import React, { useContext, useEffect, useState } from "react"
import styles from "./HeaderUsuarios.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"

import { UsuariosCadastradosContext } from "../../../../context/UsuariosCadastradosContext"
import { buscarContadores } from "../../../../hooks/buscarContadoresSistema"

export const HeaderUsuarios = (props) => {
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
          <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        </div>
        <div className={styles.rightSide}>
          {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}

          <h1 className={styles.title}>{contadores.totalUsuarios}</h1>
          <h3 className={styles.subtitle}>
            Usuários
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1 className={styles.title}>{contadores.countRecebedores}</h1>
          <h3 className={styles.subtitle}>
            Recebedor
          </h3>
        </div>
      </div>
      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1 className={styles.title}>{contadores.countAnalistas}</h1>
          <h3 className={styles.subtitle}>
            Analista
          </h3>
        </div>
      </div>
      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1 className={styles.title}>{contadores.countAprovadores}</h1>
          <h3 className={styles.subtitle}>
            Aprovador
          </h3>
        </div>
      </div>
    </div>
  )
}
