import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/Button"
import { CheckboxDupla } from "../../Checkbox/CheckboxDupla/CheckboxDupla"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmileBeam, faFaceFrown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAprovador.module.css"

export const FormAprovador = ({ numeroPedido, nomeAnalista }) => {
  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)

  // pegar da api se o pedido atual foi recusado ou aprovado,
  // se analista recusou setIsAprovadoWarning(true), se o analista aprovou então setIsRecusadoWarning(true)

  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(true)

  const handleAceitar = (e) => {
    e.preventDefault()
    if (isAprovadoWarning) {
      // useState que trata se foi aprovado ou recusado pelo aprovador vira false,
      // pois ele não pode aprovar ou recusar ainda, tem que ver o WARNING
      setIsAprovado(true)
      setIsRecusado(false)

      // abre modal (mostra o WARNING)
      setOpenModal(true)

      // seta o warning como falso pois o modal acima já vai ter chamado o warning, sendo assim, a proxima vez que usar o botão confirmar será para executar a ação de fato (vai para o else abaixo)
    } else {
      // se nao tiver warning, pode setar isAprovado para true e mostrar o modal

      // > implementar logica do backend quando pedido for aceito <

      setIsAprovado(true)
      setIsRecusado(false)

      setOpenModal(true)
    }
  }

  const handleRecusar = (e) => {
    e.preventDefault()
    if (isRecusadoWarning) {
      setIsAprovado(false)
      setIsRecusado(true)

      // abre modal (mostra o WARNING)
      setOpenModal(true)
    } else {
      // se nao tiver warning, pode setar isRecusado para true e mostrar o modal

      
      // > implementar logica do backend quando pedido for recusado <
      setIsAprovado(false)
      setIsRecusado(true)

      setOpenModal(true)
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // é chamado após exibir o warning, serve para mudar o modal para o de aprovado/recusado
  const handleChangeModal = () => {
    setIsAprovadoWarning(false)
    setIsRecusadoWarning(false)
    setOpenModal(false)
    setOpenModal(true)
  }

  return (
    <div className={styles.divMaster}>
      <div className={styles.divForm}>
        <div className={styles.formTop}>
          <label className={styles.label} htmlFor="formAprovador">
            Relatório do Pedido {numeroPedido} - {nomeAnalista}
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
              <CheckboxDupla
                btnVisualizar="True"
                nameAprovado="checkboxDocumentacaoProdutoAprovado"
                nameRecusado="checkboxDocumentacaoProdutoReprovado"
                link={`/aprovador/relatorio/${numeroPedido}/documentacao`}
                numeroPedido={numeroPedido}
              />
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
                <CheckboxDupla
                  btnVisualizar="True"
                  nameAprovado="checkboxInfoRecebedorAprovado"
                  nameRecusado="checkboxInfoRecebedorReprovado"
                  link={`/aprovador/relatorio/${numeroPedido}/infoRecebedor`}
                />
              </div>

              <div>
                <div>
                  <label className={styles.label} htmlFor="infAnalista">
                    Inf. do Analista
                  </label>
                </div>
                <CheckboxDupla
                  btnVisualizar="True"
                  nameAprovado="checkboxInfoAnalistaAprovado"
                  nameRecusado="checkboxInfoAnalistaReprovado"
                  link={`/aprovador/relatorio/${numeroPedido}/infoAnalista`}
                />
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
        <Modal isOpen={openModal} onClick={handleCloseModal}>
          <div className={styles.clearfix}>
            {isAprovado && !isAprovadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {numeroPedido} foi aprovado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.buttonConfirm} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isRecusado && !isRecusadoWarning ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceFrown} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {numeroPedido} foi recusado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.button} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isAprovadoWarning && isAprovado ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconSmile} />
                <p className={styles.paragraph}>
                  Tem certeza que deseja aceitar?
                  <br />
                  Essa mercadoria foi recusada pelo Analista.
                </p>
                <Button className={styles.button} value1="CONFIRMAR" onClick={handleChangeModal} />
              </div>
            ) : isRecusadoWarning && isRecusado ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconSmile} />
                <p className={styles.paragraph}>
                  Tem certeza que deseja recusar?
                  <br />
                  Essa mercadoria foi aprovada pelo Analista.
                </p>
                <Button className={styles.button} value1="CONFIRMAR" onClick={handleChangeModal} />
              </div>
            ) : null}
          </div>
        </Modal>
      </div>
    </div>
  )
}
