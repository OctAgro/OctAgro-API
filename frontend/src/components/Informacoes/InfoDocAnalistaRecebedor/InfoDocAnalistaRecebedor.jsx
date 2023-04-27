import React from "react"
import { Link, useParams } from "react-router-dom"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO CSS
import styles from "./InfoDocAnalistaRecebedor.module.css"
import { FormRecebedor } from "../../Forms/FormRecebedor/FormRecebedor"

export const InfoDocAnalistaRecebedor = () => {
  const { id } = useParams()
  const pedidoId = parseInt(id)

  return (
    <div className={styles.external}>
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
