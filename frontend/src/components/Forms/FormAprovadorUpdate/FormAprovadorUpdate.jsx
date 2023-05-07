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

import styles from "./FormAprovadorUpdate.module.css"
import axios from "axios"

import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"
import { buscarCriteriosAprovadorPorId } from "../../../hooks/buscarCriteriosRecebedorPorId"

export const FormAprovadorUpdate = ({ hasButton }) => {
  //Para encontrar pedidos por ID

  const { usuario } = useContext(UserContext)

  const idUsuario = usuario ? usuario.id_usuario : null

  const { id } = useParams()
  const pedidoId = parseInt(id)



  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()

    async function fetchRelatoriosAprovadorPorCriterios() {
      const dadosRelatorioAprovador = await buscarCriteriosAprovadorPorId(pedidoId)
      setRelatorioAprovador(dadosRelatorioAprovador)

    }
    fetchRelatoriosAprovadorPorCriterios()

  }, [])

  const [revisao, setRevisao] = useState("")

  const [relatorioAprovador, setRelatorioAprovador] = useState([])

  console.log("esse: ", relatorioAprovador)

  useEffect(() => {
    setRevisao(relatorioAprovador?.revisao_aprovador)
  }, [relatorioAprovador])

  const [checkboxDocumentacaoProdutoAprovado, setCheckboxDocumentacaoProdutoAprovado] = useState(false);
  const [checkboxDocumentacaoProdutoReprovado, setCheckboxDocumentacaoProdutoReprovado] = useState(false);
  const [checkboxInfoRecebedorAprovado, setCheckboxInfoRecebedorAprovado] = useState(false);
  const [checkboxInfoRecebedorReprovado, setCheckboxInfoRecebedorReprovado] = useState(false);
  const [checkboxInfoAnalistaAprovado, setCheckboxInfoAnalistaAprovado] = useState(false);
  const [checkboxInfoAnalistaReprovado, setCheckboxInfoAnalistaReprovado] = useState(false);

  useEffect(() => {
    if (relatorioAprovador === undefined) {
      setCheckboxDocumentacaoProdutoAprovado(false);
      setCheckboxDocumentacaoProdutoReprovado(false);
    }
    else if (relatorioAprovador.doc_status === true) {
      setCheckboxDocumentacaoProdutoAprovado(relatorioAprovador.doc_status);
      setCheckboxDocumentacaoProdutoReprovado(!relatorioAprovador.doc_status);
    } else {
      setCheckboxDocumentacaoProdutoReprovado(true);
      setCheckboxDocumentacaoProdutoAprovado(false);
    }
  }, [relatorioAprovador]);

  useEffect(() => {
    if (relatorioAprovador === undefined) {
      setCheckboxInfoRecebedorAprovado(false);
      setCheckboxInfoRecebedorReprovado(false);
    }
    else if (relatorioAprovador.info_recebedor_status === true) {
      setCheckboxInfoRecebedorAprovado(relatorioAprovador.info_recebedor_status);
      setCheckboxInfoRecebedorReprovado(!relatorioAprovador.info_recebedor_status);
    } else {
      setCheckboxInfoRecebedorReprovado(true);
      setCheckboxInfoRecebedorAprovado(false);
    }
  }, [relatorioAprovador]);

  //useEffect para carregar checkbox de nível de agrotóxicos
  useEffect(() => {
    if (relatorioAprovador === undefined) {
      setCheckboxInfoAnalistaAprovado(false);
      setCheckboxInfoAnalistaReprovado(false);
    }
    else if (relatorioAprovador.info_analista_status === true) {
      setCheckboxInfoAnalistaAprovado(relatorioAprovador.info_analista_status);
      setCheckboxInfoAnalistaReprovado(!relatorioAprovador.info_analista_status);
    } else {
      setCheckboxInfoAnalistaReprovado(true);
      setCheckboxInfoAnalistaAprovado(false);
    }
  }, [relatorioAprovador]);

  const handleCheckboxDPAChange = () => {
    setCheckboxDocumentacaoProdutoAprovado(!checkboxDocumentacaoProdutoAprovado);
  }
  const handleCheckboxDPRChange = () => {
    setCheckboxDocumentacaoProdutoReprovado(!checkboxDocumentacaoProdutoReprovado);
  }

  const handleCheckboxIRAChange = () => {
    setCheckboxInfoRecebedorAprovado(!checkboxInfoRecebedorAprovado);
  }
  const handleCheckboxIRRChange = () => {
    setCheckboxInfoRecebedorReprovado(!checkboxInfoRecebedorReprovado);
  }

  const handleCheckboxIAAChange = () => {
    setCheckboxInfoAnalistaAprovado(!checkboxInfoAnalistaAprovado);
  }
  const handleCheckboxIARChange = () => {
    setCheckboxInfoAnalistaReprovado(!checkboxInfoAnalistaReprovado);
  }

  const onSubmit = () => {
    //chamando a funcao de enviar dados
    console.log("chegou aqui")
  } // enviando os dados pro banco de dados atraves do clique

  const handleAtualizar = () => {
    enviarDados()
    setIsAprovado(true)
    setOpenModal(true)
  }

  //conectando os dados do usuario para enviar ao banco de dados
  const enviarDados = async () => {
    const data = {
      textoRevisaoFinalAprovador: revisao,
      idPedido: pedidos.id_pedido,
      idUsuario: idUsuario,
      checkboxDocumentacaoProdutoAprovado,
      checkboxDocumentacaoProdutoReprovado,
      checkboxInfoRecebedorAprovado,
      checkboxInfoRecebedorReprovado,
      checkboxInfoAnalistaAprovado,
      checkboxInfoAnalistaReprovado,

    }

    console.log("dados aqui: ", data)

    try {
      const resposta = await axios.post("http://localhost:3000/aprovador/relatorios/editar", data)
      //esse console.log retorna respostas json do backend de erros de validacao
      console.log("enviou?: ", resposta.data.message)
    } catch (erro) {
      //esse console.log abaixo exibe as mensagens de erro do AXIOS/HTTP request errors
      console.log(erro.message)
    }
  }

  // fechando incluindo trecho de contexto de usuario e salvar dados

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [openModal, setOpenModal] = useState(false)
  const [isAprovado, setIsAprovado] = useState(false)
  const [isRecusado, setIsRecusado] = useState(false)
  const [isAprovadoWarning, setIsAprovadoWarning] = useState(false)
  const [isRecusadoWarning, setIsRecusadoWarning] = useState(false)

  const handleAceitar = (e) => {
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

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className={styles.divMaster}>
      <div className={styles.divForm}>
        <div className={styles.formTop}>
          <label className={styles.label} htmlFor="formAprovador">
            Pedido #{pedidos?.id_pedido} - {pedidos?.produto?.nome_produto}
          </label>
        </div>
        <form name="formAprovadorUpdate" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                  checked={checkboxDocumentacaoProdutoAprovado}
                  onClick={handleCheckboxDPAChange}
                />
                <input
                  className={styles.recusar}
                  type="checkbox"
                  id="checkboxDocumentacaoProdutoReprovado"
                  {...register("checkboxDocumentacaoProdutoReprovado")}
                  checked={checkboxDocumentacaoProdutoReprovado}
                  onClick={handleCheckboxDPRChange}
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
                    checked={checkboxInfoRecebedorAprovado}
                    onClick={handleCheckboxIRAChange}

                  />
                  <input
                    className={styles.recusar}
                    type="checkbox"
                    id="checkboxInfoRecebedorReprovado"
                    {...register("checkboxInfoRecebedorReprovado")}
                    checked={checkboxInfoRecebedorReprovado}
                    onClick={handleCheckboxIRRChange}
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
                    checked={checkboxInfoAnalistaAprovado}
                    onClick={handleCheckboxIAAChange}

                  />
                  <input
                    className={styles.recusar}
                    type="checkbox"
                    id="checkboxInfoAnalistaRecusado"
                    {...register("checkboxInfoAnalistaRecusado")}
                    checked={checkboxInfoAnalistaReprovado}
                    onClick={handleCheckboxIARChange}
                  />
                </div>
              </div>
            </fieldset>

            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button style={{ backgroundColor: "#512c13" }} value1="ATUALIZAR" type="submit" onClick={handleAtualizar} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.divModal}>
        <Modal isOpen={openModal} onClick={handleCloseModal}>
          <div className={styles.clearfix}>
            {isAprovado ? (
              <div className={styles.container}>
                <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                <p className={styles.paragraph}>Mercadoria atualizada com sucesso!</p>
                <Link to="/aprovador/mercadoriascadastradas">
                  <Button style={{ backgroundColor: "#512c13" }} className={styles.button} value1="CONFIRMAR" />
                </Link>
              </div>
            ) : null}
          </div>
        </Modal>
      </div>
    </div>
  )
}
