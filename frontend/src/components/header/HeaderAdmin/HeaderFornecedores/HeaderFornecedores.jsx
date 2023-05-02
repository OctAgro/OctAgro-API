import React, { useContext } from "react"
import styles from "./HeaderFornecedores.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuildingWheat, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

import { UsuariosCadastradosContext } from "../../../../context/UsuariosCadastradosContext"

export const HeaderFornecedores = (props) => {
  const arrow = props.arrow
  const link = props.link

  const dadosTodosUsuarios = useContext(UsuariosCadastradosContext)

  console.log(dadosTodosUsuarios)

  return (
    <div className={styles.clipboards}>
      <div className={styles.clipboard}>
        <div className={styles.leftSide}>
          <FontAwesomeIcon className={styles.icon} icon={faBuildingWheat} />
        </div>
        <div className={styles.rightSide}>
          {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}

          <h1>3</h1>
          <h3>
            Fornecedores
          </h3>
        </div>
      </div>

      <div className={styles.clipboard}>
        <div className={styles.leftSide}>      
          <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
        </div>
        <div className={styles.rightSide}>
          {/*             <h2>{numeroRelatoriosTotal ? numeroRelatoriosTotal : 0}</h2>
 */}
          <h1>42</h1>
          <h3>
            Pedidos
          </h3>
        </div>
      </div>      
    </div>
  )
}
