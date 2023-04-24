import React from "react"
import { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../../../context/usuarioContext"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/Button"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faFaceSmileBeam, faFaceFrown, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

// CSS
import styles from "./FormAprovador.module.css"

// OUTROS IMPORTS
import axios from "axios"
import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"

export const FormAprovador = () => {
  const { id } = useParams()
  const pedidoId = parseInt(id)

  const { usuario } = useContext(UserContext)

  const usuarioCarregado = usuario ? usuario.id_usuario : null

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
      pedidos.produto.status_aprovacao ? setIsRecusadoWarning(true) : setIsAprovadoWarning(true)
    }
    fetchPedidos()
  }, [pedidoId])

  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)
  // pegar da api se o pedido atual foi recusado ou aprovado,
  // se analista recusou setIsAprovadoWarning(true), se o analista aprovou então setIsRecusadoWarning(true)

  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(false)

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
      idPedido: pedidos.id_pedido,
      idUsuario: usuarioCarregado,
      textoRevisaoFinalAprovador: revisao,
      statusFinalAprovacao: true, //PRECISA SER ALTERADO!
      ...data,
    }

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
            Relatório do Pedido {pedidoId} -{" "}
            {pedidos && pedidos.produto ? pedidos.produto.nome_produto : "..."}
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
                <Link to={`/aprovador/relatorio/${pedidoId}/documentacao`}>
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                    Visualizar
                  </button>
                </Link>
                <input
                  className={styles.aprovar}
                  type="checkbox"
                  id="checkboxDocumentacaoProdutoAprovado"
                  {...register("checkboxDocumentacaoProdutoAprovado")}
                />
                <input
                  className={styles.recusar}
                  type="checkbox"
                  id="checkboxDocumentacaoProdutoRecusado"
                  {...register("checkboxDocumentacaoProdutoRecusado")}
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
                  value={revisao}
                  onChange={(event) => setRevisao(event.target.value)}
                  required
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
                  <Link to={`/aprovador/relatorio/${pedidoId}/infoRecebedor`}>
                    <button className={styles.btn}>
                      <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                      Visualizar
                    </button>
                  </Link>
                  <input
                    className={styles.aprovar}
                    type="checkbox"
                    id="checkboxInfoRecebedorAprovado"
                    {...register("checkboxInfoRecebedorAprovado")}
                  />
                  <input
                    className={styles.recusar}
                    type="checkbox"
                    id="checkboxInfoRecebedorRecusado"
                    {...register("checkboxInfoRecebedorRecusado")}
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
                  <Link to={`/aprovador/relatorio/${pedidoId}/infoAnalista`}>
                    <button className={styles.btn}>
                      <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                      Visualizar
                    </button>
                  </Link>
                  <input
                    className={styles.aprovar}
                    type="checkbox"
                    id="checkboxInfoAnalistaAprovado"
                    {...register("checkboxInfoAnalistaAprovado")}
                  />
                  <input
                    className={styles.recusar}
                    type="checkbox"
                    id="checkboxInfoAnalistaRecusado"
                    {...register("checkboxInfoAnalistaRecusado")}
                  />
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
            ) : isAprovado && !isAprovadoWarning && !mensagemErro ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {pedidoId} foi aprovado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.buttonConfirm} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isRecusado && !isRecusadoWarning && !mensagemErro ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceFrown} className={styles.iconSmile} />
                <p className={styles.paragraph}>O Pedido {pedidoId} foi recusado!</p>
                <Link to="/aprovador/relatorio">
                  <Button className={styles.button} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : isAprovadoWarning && isAprovado && !mensagemErro ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconSmile} />
                <p className={styles.paragraph}>
                  Tem certeza que deseja aceitar?
                  <br />
                  Essa mercadoria foi recusada pelo Analista.
                </p>
                <Button className={styles.button} value1="CONFIRMAR" onClick={handleChangeModal} />
              </div>
            ) : isRecusadoWarning && isRecusado && !mensagemErro ? (
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
