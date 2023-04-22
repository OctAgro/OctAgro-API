import React from "react"
import { Link } from "react-router-dom"

import { InformacoesRecebedor } from "../../../components/Informacoes/InformacoesRecebedor/InformacoesRecebedor"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


// IMPORTANDO CSS
import styles from "./InfoDocAnalistaRecebedor.module.css"

export const InfoDocAnalistaRecebedor = ({ numeroPedido }) => {
  return (
    <div className={styles.external}>
      <InformacoesRecebedor/>
      
      <div>
        <Link to={`/analista/mercadoria/${numeroPedido}`}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </Link>
      </div>
    </div>
  )
}
