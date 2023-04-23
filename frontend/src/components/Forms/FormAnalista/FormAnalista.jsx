import React from "react"
import { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../../../context/usuarioContext"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/analistaBtn/analistaBtn"
import { Checkbox } from "../../Checkbox/Checkbox"
import { Modal } from "../../Modal/Modal"
import { CheckboxDupla } from "../../Checkbox/CheckboxDupla/CheckboxDupla"


// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faFaceSmileBeam,
  faFaceFrown,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAnalista.module.css"
import axios from 'axios'

import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"

export const FormAnalista = (props) => {

  //incluindo trecho de contexto de usuario e salvar dados

  const { usuario } = useContext(UserContext)

  const usuarioCarregado = (usuario ? usuario.id_usuario : null)

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

  /* const onSubmit = (data) => {
    //chamando a funcao de enviar dados
    enviarDados(data)

    handleCadastrarMercadoria()
    handleAprovacao()
    
  } // enviando os dados pro banco de dados atraves do clique

  //conectando os dados do usuario para enviar ao banco de dados
  const enviarDados = async (data) => {

    const dados = {
      comentarioAnalista: revisao,
      idPedido: pedidos.id_pedido,
      idUsuario: usuarioCarregado,
      ...data
    }

    console.log("aqui: " + dados)
  
    try {
      const resposta = await axios.post('http://localhost:3000/analista/relatorios', dados)
      //esse console.log retorna respostas json do backend de erros de validacao
      console.log(resposta.data.message)
      setMensagemErro(resposta.data.message)
    } catch (erro) {
      //esse console.log abaixo exibe as mensagens de erro do AXIOS/HTTP request errors
      console.log(erro.message)
    }
  } */

  // fechando incluindo trecho de contexto de usuario e salvar dados

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
    }
    else {
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
    }
    else {
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
          <form name="FormAnalista">
            <div className={styles.formMain}>
              <div className={styles.leftSide}>
                <fieldset>
                  <div>
                    <legend className={styles.legend}>Regras de Aceitação</legend>
                    <hr className={styles.row} />
                  </div>
                  <div>
                    <CheckboxDupla
                      regra="Qualidade dos Grãos" readOnly />
                  </div>
                  <div>
                    <CheckboxDupla
                      regra="Formato do Grão" readOnly />
                  </div>
                  <div>
                    <CheckboxDupla
                      regra="Nível de Agrotóxicos" readOnly />
                  </div>
                  <div>
                    <CheckboxDupla
                      regra="Limpeza dos Grãos" readOnly />
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
                    <CheckboxDupla btnVisualizar link="/analista/documentacao/:id" />
                  </div>
                </div>
                <div>
                  <label className={styles.label} htmlFor="infAnalista">
                    Inf. do Recebedor
                  </label>
                  <div>
                    <CheckboxDupla btnVisualizar link="/analista/documentacaoRecebedor/:id" />
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
                  <div className={styles.buttons}>
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
          <Modal isOpen={openModal} onClick={handleCloseModal}>
            <div className={styles.clearfix}>
              {isAprovado ? (
                <div className={styles.container}>
                  <FontAwesomeIcon
                    icon={faFaceSmileBeam}
                    className={styles.iconSmile}
                  />
                  <p className={styles.paragraph}>
                    Mercadoria cadastrada com sucesso!
                  </p>
                  <Link to="/analista/mercadoria">
                    <Button className={styles.button} value1="CONFIRMAR" />
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
