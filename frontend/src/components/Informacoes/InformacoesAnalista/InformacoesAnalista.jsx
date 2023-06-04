import React from "react"

import { Link, useParams } from "react-router-dom"

import styles from "./InformacoesAnalista.module.css"

import { FormAnalistaUpdate } from "../../Forms/FormAnalistaUpdate/FormAnalistaUpdate"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export const InformacoesAnalista = (props) => {
  //Para encontrar pedidos por ID
  const { id } = useParams()
  const pedidoId = parseInt(id)

  return (
    <div>
      <div>
        <div className={styles.icon}>
          <Link to={`/aprovador/relatorio/${pedidoId}`}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Link>
        </div>
      </div>
      <div>
        <FormAnalistaUpdate />
      </div>
    </div>
  )
}
