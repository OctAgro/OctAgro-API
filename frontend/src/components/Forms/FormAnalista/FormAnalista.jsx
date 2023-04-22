import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/analistaBtn/analistaBtn"
import { Checkbox } from "../../Checkbox/Checkbox"
import { Modal } from "../../Modal/Modal"
import { CheckboxDupla } from "../../Checkbox/CheckboxDupla/CheckboxDupla"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faFaceSmileBeam, faFaceFrown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAnalista.module.css"

export const FormAnalista = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)
  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(false)

  const handleAceitar = (e) => {
    e.preventDefault()
    if (isAprovadoWarning) {
      // useState que trata se foi aprovado ou recusado pelo aprovador vira false, pois ele não pode aprovar ou recusar ainda, tem que ver o WARNING
      setIsAprovado(false)
      setIsRecusado(false)

      // abre modal (mostra o WARNING)
      setOpenModal(true)
    } else {
      // se nao tiver warning, pode setar isAprovado para true e mostrar o modal

      // > implementar logica quando pedido for aceito <
      setIsAprovado(true)
      setIsRecusado(false)

      setOpenModal(true)
    }
  }

  const handleRecusar = (e) => {
    e.preventDefault()
    if (isRecusadoWarning) {
      setIsAprovado(false)
      setIsRecusado(false)

      // abre modal (mostra o WARNING)
      setOpenModal(true)
    } else {
      // se nao tiver warning, pode setar isRecusado para true e mostrar o modal

      // > implementar logica quando pedido for recusado <
      setIsAprovado(false)
      setIsRecusado(true)

      setOpenModal(true)
    }
  }

  return (
    <div>
      <h1 className={styles.mercadoria}>Entrada de Mercadoria</h1>
      <div className={styles.divForm}>
        <div className={styles.formTop}>
          <label className={styles.label} htmlFor="FormAnalista">
            Pedido #{props.numeroPedido} - {props.nomeProduto}
          </label>
        </div>

        <form name="FormAnalista">
          <div className={styles.formMain}>
            <div className={styles.leftSide}>
              <fieldset>
                <div>
                  <legend className={styles.legend}>Regras de Aceitação</legend>
                  <hr className={styles.row} />
                </div>
                <div>
                  <CheckboxDupla regra="Qualidade dos Grãos" readOnly />
                </div>
                <div>
                  <CheckboxDupla regra="Formato do Grão" readOnly />
                </div>
                <div>
                  <CheckboxDupla regra="Nível de Agrotóxicos" readOnly />
                </div>
                <div>
                  <CheckboxDupla regra="Limpeza dos Grãos" readOnly />
                </div>
              </fieldset>
            </div>
            <div className={styles.rightSide}>
              <div>
                <legend className={styles.legend}>Mercadoria</legend>
                <hr className={styles.row} />
              </div>
              <div>
                <label className={styles.label} htmlFor="infRecebedor">
                  Documentos (RC/NF):
                </label>
                <div>
                  <CheckboxDupla btnVisualizar />
                </div>
              </div>
              <div>
                <label className={styles.label} htmlFor="infAnalista">
                  Inf. do Recebedor
                </label>
                <div>
                  <CheckboxDupla btnVisualizar />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formDown}>
            <fieldset className={styles.comentario}>
              <div>
                <legend className={styles.legend}>Comentários:</legend>
                <textarea
                  className={styles.textoRevisao}
                  name="textoRevisaoFinalAprovador"
                  id="textoRevisaoFinalAprovador"
                  rows="3"
                  cols="20"
                />
                <div className={styles.btnConfirmar}>
                  <Button
                    value1="CONFIRMAR"
                    /* value2="MERCADORIA" */
                    onClick={handleAceitar}
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
      <div className={styles.divModal}>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div className={styles.clearfix}>
            {isAprovado && !isAprovadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {props.numeroPedido} foi aprovado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.button} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isRecusado && !isRecusadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceFrown} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {props.numeroPedido} foi recusado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.button} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isAprovadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconSmile} />
                <p className={styles.paragraph}>
                  Tem certeza que deseja aceitar?
                  <br />
                  Essa mercadoria foi recusada pelo Analista.
                </p>
                <Link to="/analista/mercadoria">
                  <Button className={styles.button} value1="CONFIRMAR" onClick={handleAceitar} />
                </Link>
              </div>
            ) : isRecusadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconSmile} />
                <p className={styles.paragraph}>
                  Tem certeza que deseja recusar?
                  <br />
                  Essa mercadoria foi aprovada pelo Analista.
                </p>
                <Link to="/analista/mercadoria">
                  <Button className={styles.button} value1="CONFIRMAR" onClick={handleRecusar} />
                </Link>
              </div>
            ) : null}
          </div>
        </Modal>
      </div>
    </div>
  )
}
