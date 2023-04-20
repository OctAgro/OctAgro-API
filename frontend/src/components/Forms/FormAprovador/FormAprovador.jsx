import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/Button"
import { Checkbox } from "../../Checkbox/Checkbox"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faFaceSmileBeam, faFaceFrown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAprovador.module.css"

export const FormAprovador = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)
  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(false)

  const [checkboxDocumentacaoProdutoAprovado, setCheckboxDocumentacaoProdutoAprovado] = useState(false)

  const [checkboxDocumentacaoProdutoReprovado, setCheckboxDocumentacaoProdutoReprovado] = useState(false)

  const [checkboxInfoRecebedorAprovado, setCheckboxInfoRecebedorAprovado] = useState(false)

  const [checkboxInfoRecebedorReprovado, setCheckboxInfoRecebedorReprovado] = useState(false)

  const [checkboxInfoAnalistaAprovado, setCheckboxInfoAnalistaAprovado] = useState(false)

  const [checkboxInfoAnalistaReprovado, setCheckboxInfoAnalistaReprovado] = useState(false)

  const handleAceitar = (e) => {
    e.preventDefault()
    if (isAprovadoWarning) {
      // useState que trata se foi aprovado ou recusado pelo aprovador vira false,
      // pois ele não pode aprovar ou recusar ainda, tem que ver o WARNING
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

  const handleCheckboxDocumentacaoAprovar = (e) => {
    setCheckboxDocumentacaoProdutoAprovado(true)
    setCheckboxDocumentacaoProdutoReprovado(false)
  }

  const handleCheckboxDocumentacaoRecusar = (e) => {
    setCheckboxDocumentacaoProdutoAprovado(false)
    setCheckboxDocumentacaoProdutoReprovado(true)
  }

  const handleCheckboxRecebedorAprovar = (e) => {
    setCheckboxInfoRecebedorAprovado(true)
    setCheckboxInfoRecebedorReprovado(false)
  }

  const handleCheckboxRecebedorRecusar = (e) => {
    setCheckboxInfoRecebedorAprovado(false)
    setCheckboxInfoRecebedorReprovado(true)
  }

  const handleCheckboxAnalistaAprovar = (e) => {
    setCheckboxInfoAnalistaAprovado(true)
    setCheckboxInfoAnalistaReprovado(false)
  }

  const handleCheckboxAnalistaRecusar = (e) => {
    setCheckboxInfoAnalistaAprovado(false)
    setCheckboxInfoAnalistaReprovado(true)
  }

  return (
    <div>
      <div className={styles.divForm}>
        <div className={styles.formTop}>
          <label className={styles.label} htmlFor="formAprovador">
            Relatório do Pedido {props.numeroPedido} - {props.nomeAnalista}
          </label>
        </div>

        <form name="formAprovador" className={styles.form}>
          <div className={styles.leftSide}>
            <fieldset className={styles.documentacao}>
              <div>
                <legend className={styles.legend}>Documentação</legend>
                <hr className={styles.row} />
              </div>
              <div>
                <label className={styles.label} htmlFor="checkboxDocumentos" />
                Documentos (RC/NF):
              </div>
              <div className={styles.inputBlock}>
                <button className={styles.btn}>
                  <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                  Visualizar
                </button>
                <Checkbox
                  fill={checkboxDocumentacaoProdutoAprovado}
                  check="True"
                  name="checkboxDocumentacaoProdutoAprovado"
                  onClick={handleCheckboxDocumentacaoAprovar}
                />
                <Checkbox
                  fill={checkboxDocumentacaoProdutoReprovado}
                  check=""
                  name="checkboxDocumentacaoProdutoReprovado"
                  onClick={handleCheckboxDocumentacaoRecusar}
                />
              </div>
            </fieldset>

            <fieldset className={styles.revisao}>
              <div>
                <legend className={styles.legend}>Sua revisão</legend>
                <hr className={styles.row} />
              </div>
              <div>
                <textarea
                  className={styles.textoRevisao}
                  name="textoRevisaoFinalAprovador"
                  id="textoRevisaoFinalAprovador"
                  rows="8"
                  cols="35"
                />
              </div>
            </fieldset>
          </div>

          <div className={styles.rightSide}>
            <fieldset className={styles.analise}>
              <div>
                <legend className={styles.legend}>Análises e Inspeções</legend>
                <hr className={styles.row} />
              </div>
              <div>
                <div>
                  <label className={styles.label} htmlFor="infRecebedor">
                    Inf. do Recebedor
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                    Visualizar
                  </button>
                  <Checkbox
                    fill={checkboxInfoRecebedorAprovado}
                    check="True"
                    name="checkboxDocumentacaoProdutoAprovado"
                    onClick={handleCheckboxRecebedorAprovar}
                  />
                  <Checkbox
                    fill={checkboxInfoRecebedorReprovado}
                    check=""
                    name="checkboxDocumentacaoProdutoReprovado"
                    onClick={handleCheckboxRecebedorRecusar}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label className={styles.label} htmlFor="infAnalista">
                    Inf. do Analista
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                    Visualizar
                  </button>
                  <Checkbox
                    fill={checkboxInfoAnalistaAprovado}
                    check="True"
                    name="checkboxDocumentacaoProdutoAprovado"
                    onClick={handleCheckboxAnalistaAprovar}
                  />
                  <Checkbox
                    fill={checkboxInfoAnalistaReprovado}
                    check=""
                    name="checkboxDocumentacaoProdutoReprovado"
                    onClick={handleCheckboxAnalistaRecusar}
                  />
                </div>
              </div>
            </fieldset>

            <div className={styles.buttons}>
              <Button value1="RECUSAR" value2="MERCADORIA" onClick={handleRecusar} />
              <Button value1="ACEITAR" value2="MERCADORIA" onClick={handleAceitar} />
            </div>
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
                <Link to="/aprovador/relatorio">
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
                <Link to="/aprovador/relatorio">
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