import React from "react"
import { useState, useEffect } from "react"

import { useForm } from "react-hook-form"

import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/Button"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faFaceSmileBeam, faFaceFrown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAprovador.module.css"
import axios from "axios"

export const FormAprovador = ({ numeroPedido, nomeAnalista }) => {

  useEffect(() => {

  }, [])

  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  // pegar da api se o pedido atual foi recusado ou aprovado,
  // se analista recusou setIsAprovadoWarning(true), se o analista aprovou então setIsRecusadoWarning(true)

  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(true)

  //variaveis para mandar para o banco de dados
  const [revisao, setRevisao] = useState("")
  const [mensagemErro, setMensagemErro] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    handleAprovacao()
    enviarDados(data)
  }

  //fazendo o post
  const enviarDados = async (data) => {
    const dados = {
      textoRevisaoFinalAprovador: revisao,
      statusFinalAprovacao: true,
      ...data,
    }

    console.log(dados)

    try {
      const resposta = await axios.post("http://localhost:3000/aprovador/relatorios", dados)
      //esse console.log retorna respostas json do backend de erros de validacao
      console.log(resposta.data.message)
      setMensagemErro(resposta.data.message)
    } catch (erro) {
      //esse console.log abaixo exibe as mensagens de erro do AXIOS/HTTP request errors
      console.log(erro.message)
      /* setMensagemErro(erro) */
    }
  }

  const handleAprovacao = () => {
    if (isAprovadoWarning) {
      setIsAprovado(true)
      setIsRecusado(false)

      setOpenModal(true)
    } else if (isRecusadoWarning) {
      setIsAprovado(false)
      setIsRecusado(true)

      setOpenModal(true)
    } else {
      setIsAprovado(true)
      setIsRecusado(false)

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
        <form name="formAprovador" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                <Link to={`/aprovador/relatorio/${numeroPedido}/documentacao`}>
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                    Visualizar
                  </button>
                </Link>
                <input
                  type="checkbox"
                  id="checkboxDocumentacaoProdutoAprovado"
                  {...register("checkboxDocumentacaoProdutoAprovado")}
                />
                <label htmlFor="checkboxDocumentacaoProdutoAprovado">Aprovado</label>
                <input
                  type="checkbox"
                  id="checkboxDocumentacaoProdutoRecusado"
                  {...register("checkboxDocumentacaoProdutoRecusado")}
                />
                <label htmlFor="checkboxDocumentacaoProdutoRecusado">Recusado</label>
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
                  value={revisao}
                  onChange={(event) => setRevisao(event.target.value)}
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
                  <Link to={`/aprovador/relatorio/${numeroPedido}/infoRecebedor`}>
                    <button className={styles.btn}>
                      <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                      Visualizar
                    </button>
                  </Link>
                  <input
                    type="checkbox"
                    id="checkboxInfoRecebedorAprovado"
                    {...register("checkboxInfoRecebedorAprovado")}
                  />
                  <label htmlFor="checkboxInfoRecebedorAprovado">Aprovado</label>
                  <input
                    type="checkbox"
                    id="checkboxInfoRecebedorRecusado"
                    {...register("checkboxInfoRecebedorRecusado")}
                  />
                  <label htmlFor="checkboxInfoRecebedorRecusado">Recusado</label>
                </div>
              </div>

              <div>
                <div>
                  <label className={styles.label} htmlFor="infAnalista">
                    Inf. do Analista
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <Link to={`/aprovador/relatorio/${numeroPedido}/infoAnalista`}>
                    <button className={styles.btn}>
                      <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                      Visualizar
                    </button>
                  </Link>
                  <input
                    type="checkbox"
                    id="checkboxInfoAnalistaAprovado"
                    {...register("checkboxInfoAnalistaAprovado")}
                  />
                  <label htmlFor="checkboxInfoAnalistaAprovado">Aprovado</label>
                  <input
                    type="checkbox"
                    id="checkboxInfoAnalistaRecusado"
                    {...register("checkboxInfoAnalistaRecusado")}
                  />
                  <label htmlFor="checkboxInfoAnalistaRecusado">Recusado</label>
                </div>
              </div>
            </fieldset>

            <div className={styles.buttons}>
              <Button value1="RECUSAR" value2="MERCADORIA" type="submit" /* onClick={handleAprovacao}  */ />
              <Button value1="ACEITAR" value2="MERCADORIA" type="submit" /* onClick={handleAprovacao} */ />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.divModal}>
        <Modal isOpen={openModal} onClick={handleCloseModal}>
          <div className={styles.clearfix}>
            {mensagemErro ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                <p className={styles.paragraph}>{mensagemErro}</p>
              </div>
            ) : isAprovado && !isAprovadoWarning ? (
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
