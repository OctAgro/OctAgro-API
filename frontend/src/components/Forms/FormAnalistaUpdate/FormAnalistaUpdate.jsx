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

import styles from "./FormAnalistaUpdate.module.css"
import axios from "axios"

import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"
import { buscarCriteriosAnalistaPorId } from "../../../hooks/buscarCriteriosRecebedorPorId"

export const FormAnalistaUpdate = ({ hasButton }) => {
  //Para encontrar pedidos por ID

  const { usuario } = useContext(UserContext)
  const idUsuario = usuario ? usuario.id_usuario : null

  const { id } = useParams()
  const pedidoId = parseInt(id)

  const [pedidos, setPedidos] = useState([])

  const [relatorioAnalista, setRelatorioAnalista] = useState([])

  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()

    async function fetchRelatoriosAnalistaPorCriterios() {
      const dadosRelatorioAnalista = await buscarCriteriosAnalistaPorId(pedidoId)
      setRelatorioAnalista(dadosRelatorioAnalista)

    }
    fetchRelatoriosAnalistaPorCriterios()

  }, [])

  const [revisao, setRevisao] = useState("")

  console.log("esse: ", relatorioAnalista)

  // Criando estrutura para as checkbox dos Criterios Adicionais
  const [criteriosAdicionais, setCriteriosAdicionais] = useState({});

  const [checkboxValues, setCheckboxValues] = useState({});

  useEffect(() => {
    if (relatorioAnalista !== undefined && relatorioAnalista.criteriosAdicionais) {
      setCriteriosAdicionais(relatorioAnalista.criteriosAdicionais);
    }
  }, [relatorioAnalista]);

  useEffect(() => {
    if (criteriosAdicionais) {
      const updatedCheckboxValues = {};
      for (const criterio in criteriosAdicionais) {
        updatedCheckboxValues[criterio] = criteriosAdicionais[criterio];
      }
      setCheckboxValues(updatedCheckboxValues);
    }
  }, [criteriosAdicionais]);

  const handleCheckboxChange = (criterio) => {
    setCheckboxValues((prevCheckboxValues) => ({
      ...prevCheckboxValues,
      [criterio]: !prevCheckboxValues[criterio]
    }));
  };

  useEffect(() => {
    setRevisao(relatorioAnalista?.analista_comentario)
  }, [relatorioAnalista])

  const [checkboxQualidadeGraoAprovado, setCheckboxQualidadeGraoAprovado] = useState(false)
  const [checkboxQualidadeGraoReprovado, setCheckboxQualidadeGraoReprovado] = useState(false)
  const [checkboxFormatoGraoAprovado, setCheckboxFormatoGraoAprovado] = useState(false)
  const [checkboxFormatoGraoReprovado, setCheckboxFormatoGraoReprovado] = useState(false)
  const [checkboxNivelAgrotoxicosAprovado, setCheckboxNivelAgrotoxicosAprovado] = useState(false)
  const [checkboxNivelAgrotoxicosReprovado, setCheckboxNivelAgrotoxicosReprovado] = useState(false)
  const [checkboxLimpezaGraosAprovado, setCheckboxLimpezaGraosAprovado] = useState(false)
  const [checkboxLimpezaGraosReprovado, setCheckboxLimpezaGraosReprovado] = useState(false)
  const [checkboxDocumentacaoProdutoAprovado, setCheckboxDocumentacaoProdutoAprovado] = useState(false)
  const [checkboxDocumentacaoProdutoReprovado, setCheckboxDocumentacaoProdutoReprovado] = useState(false)
  const [checkboxInfoAnalistaAprovado, setCheckboxInfoAnalistaAprovado] = useState(false)
  const [checkboxInfoAnalistaReprovado, setCheckboxInfoAnalistaReprovado] = useState(false)

  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxQualidadeGraoAprovado(false);
      setCheckboxQualidadeGraoReprovado(false);
    }
    else if (relatorioAnalista.qualidade_grao === true) {
      setCheckboxQualidadeGraoAprovado(relatorioAnalista.qualidade_grao);
      setCheckboxQualidadeGraoReprovado(!relatorioAnalista.qualidade_grao);
    } else {
      setCheckboxQualidadeGraoReprovado(true);
      setCheckboxQualidadeGraoAprovado(false);
    }
  }, [relatorioAnalista]);

  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxFormatoGraoAprovado(false);
      setCheckboxFormatoGraoReprovado(false);
    }
    else if (relatorioAnalista.formato_grao === true) {
      setCheckboxFormatoGraoAprovado(relatorioAnalista.formato_grao);
      setCheckboxFormatoGraoReprovado(!relatorioAnalista.formato_grao);
    } else {
      setCheckboxFormatoGraoReprovado(true);
      setCheckboxFormatoGraoAprovado(false);
    }
  }, [relatorioAnalista]);

  //useEffect para carregar checkbox de nível de agrotóxicos
  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxNivelAgrotoxicosAprovado(false);
      setCheckboxNivelAgrotoxicosReprovado(false);
    }
    else if (relatorioAnalista.nivel_agrotoxicos === true) {
      setCheckboxNivelAgrotoxicosAprovado(relatorioAnalista.nivel_agrotoxicos);
      setCheckboxNivelAgrotoxicosReprovado(!relatorioAnalista.nivel_agrotoxicos);
    } else {
      setCheckboxNivelAgrotoxicosReprovado(true);
      setCheckboxNivelAgrotoxicosAprovado(false);
    }
  }, [relatorioAnalista]);

  //useEffect para carregar checkbox de limpeza de grãos
  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxLimpezaGraosAprovado(false);
      setCheckboxLimpezaGraosReprovado(false);
    }
    else if (relatorioAnalista.limpeza_graos === true) {
      setCheckboxLimpezaGraosAprovado(relatorioAnalista.limpeza_graos);
      setCheckboxLimpezaGraosReprovado(!relatorioAnalista.limpeza_graos);
    } else {
      setCheckboxLimpezaGraosReprovado(true);
      setCheckboxLimpezaGraosAprovado(false);
    }
  }, [relatorioAnalista]);

  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxDocumentacaoProdutoAprovado(false);
      setCheckboxDocumentacaoProdutoReprovado(false);
    }
    else if (relatorioAnalista.limpeza_graos === true) {
      setCheckboxDocumentacaoProdutoAprovado(relatorioAnalista.doc_status);
      setCheckboxDocumentacaoProdutoReprovado(!relatorioAnalista.doc_status);
    } else {
      setCheckboxDocumentacaoProdutoReprovado(true);
      setCheckboxDocumentacaoProdutoAprovado(false);
    }
  }, [relatorioAnalista]);

  useEffect(() => {
    if (relatorioAnalista === undefined) {
      setCheckboxInfoAnalistaAprovado(false);
      setCheckboxInfoAnalistaReprovado(false);
    }
    else if (relatorioAnalista.limpeza_graos === true) {
      setCheckboxInfoAnalistaAprovado(relatorioAnalista.info_recebedor_status);
      setCheckboxInfoAnalistaReprovado(!relatorioAnalista.info_recebedor_status);
    } else {
      setCheckboxInfoAnalistaReprovado(true);
      setCheckboxInfoAnalistaAprovado(false);
    }
  }, [relatorioAnalista]);



  const handleCheckboxQGAChange = () => {
    setCheckboxQualidadeGraoAprovado(!checkboxQualidadeGraoAprovado);
  }
  const handleCheckboxQGRChange = () => {
    setCheckboxQualidadeGraoReprovado(!checkboxQualidadeGraoReprovado);
  }

  const handleCheckboxFGAChange = () => {
    setCheckboxFormatoGraoAprovado(!checkboxFormatoGraoAprovado);
  }
  const handleCheckboxFGRChange = () => {
    setCheckboxFormatoGraoReprovado(!checkboxFormatoGraoReprovado);
  }

  const handleCheckboxAAAChange = () => {
    setCheckboxNivelAgrotoxicosAprovado(!checkboxNivelAgrotoxicosAprovado);
  }
  const handleCheckboxAARChange = () => {
    setCheckboxNivelAgrotoxicosReprovado(!checkboxNivelAgrotoxicosReprovado);
  }

  const handleCheckboxLGAChange = () => {
    setCheckboxLimpezaGraosAprovado(!checkboxLimpezaGraosAprovado);
  }
  const handleCheckboxLGRChange = () => {
    setCheckboxLimpezaGraosReprovado(!checkboxLimpezaGraosReprovado);
  }

  const handleCheckboxDPAChange = () => {
    setCheckboxDocumentacaoProdutoAprovado(!checkboxDocumentacaoProdutoAprovado);
  }
  const handleCheckboxDPRChange = () => {
    setCheckboxDocumentacaoProdutoReprovado(!checkboxDocumentacaoProdutoReprovado);
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
      comentarioAnalista: revisao,
      idPedido: pedidos.id_pedido,
      criteriosAdicionais: checkboxValues,
      idUsuario: idUsuario,
      checkboxQualidadeGraoAprovado,
      checkboxQualidadeGraoReprovado,
      checkboxFormatoGraoAprovado,
      checkboxFormatoGraoReprovado,
      checkboxNivelAgrotoxicosAprovado,
      checkboxNivelAgrotoxicosReprovado,
      checkboxLimpezaGraosAprovado,
      checkboxLimpezaGraosReprovado,
      checkboxDocumentacaoProdutoAprovado,
      checkboxDocumentacaoProdutoReprovado,
      checkboxInfoAnalistaAprovado,
      checkboxInfoAnalistaReprovado,
    }

    console.log("dados aqui: ", data)

    try {
      const resposta = await axios.post("http://localhost:3000/analista/relatorios/atualizar", data)
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
          <form name="FormAnalistaUpdate" onSubmit={handleSubmit(onSubmit)}>
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
                        checked={checkboxQualidadeGraoAprovado}
                        onClick={handleCheckboxQGAChange}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxQualidadeGraoReprovado"
                        {...register("checkboxQualidadeGraoReprovado")}
                        checked={checkboxQualidadeGraoReprovado}
                        onClick={handleCheckboxQGRChange}
                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Formato do Grão" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxFormatoGraoAprovado"
                        {...register("checkboxFormatoGraoAprovado")}
                        checked={checkboxFormatoGraoAprovado}
                        onClick={handleCheckboxFGAChange}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxFormatoGraoReprovado"
                        {...register("checkboxFormatoGraoReprovado")}
                        checked={checkboxFormatoGraoReprovado}
                        onClick={handleCheckboxFGRChange}
                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Nível de Agrotóxico" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxNivelAgrotoxicosAprovado"
                        {...register("checkboxNivelAgrotoxicosAprovado")}
                        checked={checkboxNivelAgrotoxicosAprovado}
                        onClick={handleCheckboxAAAChange}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxNivelAgrotoxicosReprovado"
                        {...register("checkboxNivelAgrotoxicosReprovado")}
                        checked={checkboxNivelAgrotoxicosReprovado}
                        onClick={handleCheckboxAARChange}

                      />
                    </div>
                    <div className={styles.inputBlock}>
                      <input className={styles.btnsRN} value="Limpeza do Grão" readOnly />
                      <input
                        className={styles.aprovar}
                        type="checkbox"
                        id="checkboxLimpezaGraosAprovado"
                        {...register("checkboxLimpezaGraosAprovado")}
                        checked={checkboxLimpezaGraosAprovado}
                        onClick={handleCheckboxLGAChange}
                      />
                      <input
                        className={styles.recusar}
                        type="checkbox"
                        id="checkboxLimpezaGraosReprovado"
                        {...register("checkboxLimpezaGraosReprovado")}
                        checked={checkboxLimpezaGraosReprovado}
                        onClick={handleCheckboxLGRChange}
                      />
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
                  <label className={styles.label} htmlFor="infAnalista">
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
                      checked={checkboxDocumentacaoProdutoAprovado}
                      onClick={handleCheckboxDPAChange}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxDocumentacaoProdutoRecusado"
                      {...register("checkboxDocumentacaoProdutoRecusado")}
                      checked={checkboxDocumentacaoProdutoReprovado}
                      onClick={handleCheckboxDPRChange}
                    />
                  </div>
                </div>

                <label className={styles.label} htmlFor="infAnalista">
                  Info. do Analista:
                </label>

                <div className={styles.inputBlock}>
                  {hasButton ? (
                    <Link to={`/analista/documentacaoAnalista/${pedidoId}`}>
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

                <div>
                  {Object.entries(criteriosAdicionais).map(([criterio, value]) => (

                    <div key={criterio}>
                      <div className={styles.inputBlock}>
                        <input className={styles.btnsRN} value={criterio} readOnly />
                        <input className={styles.aprovar} type="checkbox" checked={checkboxValues[criterio]} onChange={() => handleCheckboxChange(criterio)} />
                        <input className={styles.recusar} type="checkbox" checked={!checkboxValues[criterio]} onChange={() => handleCheckboxRecusarChange(criterio)} />
                      </div>
                    </div>
                  ))}
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
                    value={revisao}
                    onChange={(event) => setRevisao(event.target.value)}
                  />
                  <div className={styles.buttons}>
                    <div className={styles.button}>
                      <Button style={{ backgroundColor: "#FF8A00" }} value1="ATUALIZAR" type="submit" onClick={handleAtualizar} />
                    </div>
                  </div>
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
