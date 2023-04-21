import React, { useState } from "react"

import { Link } from "react-router-dom"
import { Checkbox } from "../Checkbox"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

import styles from "../CheckboxDupla/CheckboxDupla.module.css"

export const CheckboxDupla = ({
  nameAprovado,
  nameRecusado,
  link,
  btnVisualizar,
  readOnly,
  regra,
  numeroPedido,
}) => {
  const [checkboxAprovado, setCheckboxAprovado] = useState(false)
  const [checkboxReprovado, setCheckboxReprovado] = useState(false)

  const handleCheckboxAprovar = (e) => {
    if (checkboxAprovado) {
      setCheckboxAprovado(false)
    } else {
      setCheckboxAprovado(true)
      setCheckboxReprovado(false)
    }
  }

  const handleCheckboxRecusar = (e) => {
    if (checkboxReprovado) {
      setCheckboxReprovado(false)
    } else {
      setCheckboxReprovado(true)
      setCheckboxAprovado(false)
    }
  }
  if (btnVisualizar) {
    return (
      <div className={styles.inputBlock}>
        <Link
          to={{
            pathname: `${link}`,
            state: { numeroPedido: numeroPedido },
          }}
        >
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
            Visualizar
          </button>
        </Link>
        <Checkbox fill={checkboxAprovado} check="True" name={nameAprovado} onClick={handleCheckboxAprovar} />
        <Checkbox fill={checkboxReprovado} check="" name={nameRecusado} onClick={handleCheckboxRecusar} />
      </div>
    )
  } else if (readOnly) {
    return (
      <div className={styles.inputBlock}>
        <input className={styles.btnReadOnly} value={regra} readOnly />
        <Checkbox
          fill={checkboxAprovado}
          check="True"
          name={nameAprovado}
          onClick={handleCheckboxAprovar}
        />
        <Checkbox
          fill={checkboxReprovado}
          check=""
          name={nameRecusado}
          onClick={handleCheckboxRecusar}
        />
      </div>
    )
  } else {
    return null
  }
}
