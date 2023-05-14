import React from "react"

import { Link, useParams } from "react-router-dom"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

import styles from "./InformacoesRecebedorPageAnalista.module.css"
import { FormRecebedor } from "../../Forms/FormRecebedor/FormRecebedor"

export const InformacoesRecebedorPageAnalista = () => {
  const { id } = useParams()
  const pedidoId = parseInt(id)

  return (
    <div>
      <Link to={`/analista/mercadoria/${pedidoId}`}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </Link>

      <div>
        <FormRecebedor />
      </div>
    </div>
  )
}
