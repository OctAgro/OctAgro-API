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

import styles from "./FormAnalista.module.css"
import axios from "axios"

import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"
import { encontrarCriteriosByPedidoId } from "../../../hooks/encontrarCriteriosById"

export const FormAnalista = ({ hasButton }) => {
  //incluindo trecho de contexto de usuario e salvar dados

  const { usuario } = useContext(UserContext)

  const usuarioCarregado = usuario ? usuario.id_usuario : null

  //Para encontrar pedidos por ID
  const { id } = useParams()
  const pedidoId = parseInt(id)

  const [revisao, setRevisao] = useState("")

  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  const [criteriosNovos, setCriteriosNovos] = useState([])
  useEffect(() => {
    async function fetchCriteriosNovos() {
      const dadosCriterios = await encontrarCriteriosByPedidoId(pedidoId)
      setCriteriosNovos(dadosCriterios)
    }
    fetchCriteriosNovos()
  }, [])

  console.log("criterios: ", criteriosNovos)

  const onSubmit = (data) => {
    //chamando a funcao de enviar dados
    enviarDados(data)
    console.log(data)

    handleCadastrarMercadoria()
    handleAprovacao()
  } // enviando os dados pro banco de dados atraves do clique

  //conectando os dados do usuario para enviar ao banco de dados
  const enviarDados = async (data, event) => {
    const dados = {
      comentarioAnalista: revisao,
      idPedido: pedidos.id_pedido,
      idUsuario: usuarioCarregado,
      ...data,
    }

    Object.keys(data).forEach((key) => {
      if (key.startsWith("checkbox")) {
        dados[key] = data[key];
      }
    });

    handleAceitar(event)
    console.log("aqui: " + dados)

    try {
      const resposta = await axios.post("http://localhost:3000/analista/relatorios", dados)
      //esse console.log retorna respostas json do backend de erros de validacao
      console.log(resposta.data.message)
      setMensagemErro(resposta.data.message)
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
    <div>
      <div className={styles.mercadoria}>
        <h1>Entrada de Mercadoria</h1>
      </div>

      <div className={styles.divMaster}>
        <div className={styles.divForm}>
          <div className={styles.formTop}>
            <label className={styles.label} htmlFor="FormAnalista">
              Pedido #{pedidos?.id_pedido} - {pedidos?.produto?.nome_produto}
            </label>
          </div>
          <form name="FormAnalista" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formMain}>
              <div className={styles.leftSide}>
                <fieldset>
                  <div>
                    <legend className={styles.legend}>Regras de Aceitação</legend>
                    <hr className={styles.row} />
                  </div>
                  <div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Qualidade do Grão" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxQualidadeGraoAprovado"
                        {...register("checkboxQualidadeGraoAprovado")}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxQualidadeGraoReprovado"
                        {...register("checkboxQualidadeGraoReprovado")}
                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Formato do Grão" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxFormatoGraoAprovado"
                        {...register("checkboxFormatoGraoAprovado")}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxFormatoGraoReprovado"
                        {...register("checkboxFormatoGraoReprovado")}
                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Nível de Agrotóxico" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxNivelAgrotoxicosAprovado"
                        {...register("checkboxNivelAgrotoxicosAprovado")}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxNivelAgrotoxicosReprovado"
                        {...register("checkboxNivelAgrotoxicosReprovado")}
                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Limpeza do Grão" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxLimpezaGraosAprovado"
                        {...register("checkboxLimpezaGraosAprovado")}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxLimpezaGraosReprovado"
                        {...register("checkboxLimpezaGraosReprovado")}
                      />
                    </div>

                    {/* for para distribuir os novos Critérios */}
                    <div>
                      {criteriosNovos.filter((criterio) => criterio.funcao === "Analista").map((criterio) => (
                        <div key={criterio.id_criterio}>
                          <div className={styles.inputBlock}>
                            <input className={styles.btnsRN} value={criterio.descricao_regra} readOnly />
                            <input
                              className={styles.aprovar}
                              type="checkbox"
                              id={`checkbox${criterio.descricao_regra}Aprovado`}
                              {...register(`checkbox${criterio.descricao_regra}Aprovado`)}
                            />
                            <input
                              className={styles.recusar}
                              type="checkbox"
                              id={`checkbox${criterio.descricao_regra}Reprovado`}
                              {...register(`checkbox${criterio.descricao_regra}Reprovado`)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

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

                  <div className={styles.inputBlock}>
                    {hasButton ? (
                      <Link to={`/analista/documentacao/${pedidoId}`}>
                        <button className={styles.btn}>
                          <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                          Visualizar
                        </button>
                      </Link>
                    ) : (
                      <button className={styles.btn}>
                        <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                        Visualizar
                      </button>
                    )}
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
                      {...register("checkboxDocumentacaoProdutoReprovado")}
                    />
                  </div>
                </div>

                <label className={styles.label} htmlFor="infRecebedor">
                  Info. do Recebedor:
                </label>

                <div className={styles.inputBlock}>
                  {hasButton ? (
                    <Link to={`/analista/documentacaoRecebedor/${pedidoId}`}>
                      <button className={styles.btn}>
                        <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                        Visualizar
                      </button>
                    </Link>
                  ) : (
                    <button className={styles.btn}>
                      <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                      Visualizar
                    </button>
                  )}
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
                    {...register("checkboxInfoRecebedorReprovado")}
                  />
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
                    rows="4"
                    cols="600"
                    value={revisao}
                    onChange={(event) => setRevisao(event.target.value)}
                  />
                  {hasButton ? (
                    <div className={styles.buttons}>
                      <div className={styles.button}>
                        <Button style={{ backgroundColor: "#FF8A00" }} value1="CONFIRMAR" type="submit" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </fieldset>
            </div>
          </form>
        </div>
        <div className={styles.divModal}>
          <Modal isOpen={openModal} onClick={handleCloseModal}>
            <div className={styles.clearfix}>
              {isAprovado ? (
                <div className={styles.container}>
                  <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.iconSmile} />
                  <p className={styles.paragraph}>Mercadoria cadastrada com sucesso!</p>
                  <Link to="/analista/mercadoria">
                    <Button style={{ backgroundColor: "#FF8A00" }} className={styles.button} value1="CONFIRMAR" />
                  </Link>
                </div>
              ) : null}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}
