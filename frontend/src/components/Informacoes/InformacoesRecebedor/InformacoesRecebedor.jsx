import React from "react"

import { Link, useParams } from "react-router-dom"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

import styles from "./InformacoesRecebedor.module.css"
import { FormRecebedorUpdate } from "../../Forms/FormRecebedorUpdate/FormRecebedorUpdate"

export const InformacoesRecebedor = () => {
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

        <FormRecebedorUpdate />
      </div>
    </div>
  )
}
