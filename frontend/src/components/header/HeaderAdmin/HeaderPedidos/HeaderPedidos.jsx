import React, { useContext, useEffect, useState } from "react"
import styles from "./HeaderPedidos.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuildingWheat, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

import { UsuariosCadastradosContext } from "../../../../context/UsuariosCadastradosContext"
import { buscarContadores } from "../../../../hooks/buscarContadoresSistema"

export const HeaderPedidos = (props) => {
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
          <FontAwesomeIcon className={styles.icon} icon={faBuildingWheat} />
        </div>
        <div className={styles.rightSide}>
          {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}

          <h1 className={styles.title}>{contadores.totalFornecedores}</h1>
          <h3 className={styles.subtitle}>
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
          <h1 className={styles.title}>{contadores.totalProdutos}</h1>
          <h3 className={styles.subtitle}>
            Produtos
          </h3>
        </div>
      </div>      
    </div>
  )
}
