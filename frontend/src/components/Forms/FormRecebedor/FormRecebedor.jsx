import React from "react"
import { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../../../context/usuarioContext"

//IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormRecebedor.module.css"
import axios from "axios"

//chamando o hook de encontrar pedidos por ID
import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"
import { encontrarCriteriosByPedidoId } from "../../../hooks/encontrarCriteriosById"

export const FormRecebedor = ({ hasButton }) => {
  const { usuario } = useContext(UserContext)

  const usuarioCarregado = usuario ? usuario.id_usuario : null

  //Para encontrar pedidos por ID
  const { id } = useParams()
  const pedidoId = parseInt(id)

  //puxar todos os criterios by id pedido
  const [criteriosNovos, setCriteriosNovos] = useState([])
  useEffect(() => {
    async function fetchCriteriosNovos() {
      const dadosCriterios = await encontrarCriteriosByPedidoId(pedidoId)
      setCriteriosNovos(dadosCriterios)
    }
    fetchCriteriosNovos()
  }, [])

  console.log("criterios: ", criteriosNovos)

  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  /*   console.log(pedidos) //Fim do codigo de encontrar pedidos por ID */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [textoNomeFornecedor, setTextoNomeFornecedor] = useState("")
  const [textoNomeEntregador, setTextoNomeEntregador] = useState("")
  const [textoPlacaVeiculo, setTextoPlacaVeiculo] = useState("")
  const [numeroQuantidade, setNumeroQuantidade] = useState(0)
  const [textoUnidadeMedida, setTextoUnidadeMedida] = useState("")
  const [textoDocmento, setTextoDocmento] = useState("")
  const [textoProduto, setTextoProduto] = useState("")

  const [mensagemErro, setMensagemErro] = useState(null)

  const onSubmit = (data) => {
    //chamando a funcao de enviar dados
    enviarDados(data)

    handleCadastrarMercadoria()
    handleAprovacao()
  } // enviando os dados pro banco de dados atraves do clique

  //conectando os dados do usuario para enviar ao banco de dados
  const enviarDados = async (data) => {
    const dados = {
      idPedido: pedidos.id_pedido,
      idUsuario: usuarioCarregado,
      ...data,
    }

    Object.keys(data).forEach((key) => {
      if (key.startsWith("checkbox")) {
        dados[key] = data[key];
      }
    });

    try {
      const resposta = await axios.post("http://localhost:3000/recebedor/entradamercadoria", dados)
      //esse console.log retorna respostas json do backend de erros de validacao
      /*       console.log(resposta.data.message) */
      setMensagemErro(resposta.data.message)
    } catch (erro) {
      //esse console.log abaixo exibe as mensagens de erro do AXIOS/HTTP request errors
      console.log(erro.message)
      /* setMensagemErro(erro) */
    }
  }

  const [isAprovado, setIsAprovado] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleCadastrarMercadoria = () => {
    setIsAprovado(true)
    setOpenModal(true)
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
            <label className={styles.label} htmlFor="FormRecebedorUpdate">
              Pedido {pedidos?.id_pedido} - {pedidos?.produto?.nome_produto}
            </label>
          </div>
          <form name="FormRecebedorUpdate" className={styles.formMain} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.leftSide}>
              <fieldset>
                <div>
                  <legend className={styles.legend}>Dados de Identificação - Entrada</legend>
                  <hr className={styles.row} />
                </div>
                <div className={styles.inputBlock}>
                  <label>
                    <h3>Fornecedor:</h3>
                    <div>
                      <input
                        className={styles.customSelect}
                        id="fornecedor"
                        name="textoNomeFornecedor"
                        form="FormRecebedorUpdate"
                        value={pedidos?.fornecedor?.nome_fornecedor}
                        onChange={(event) => setTextoNomeFornecedor(event.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <label>
                    <h3>Nome do Caminhoneiro:</h3>
                    <div>
                      <input
                        className={styles.customSelect}
                        type="text"
                        name="textoNomeEntregador"
                        value={pedidos?.fornecedor?.nome_motorista}
                        onChange={(event) => setTextoNomeEntregador(event.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="textoPlacaVeiculo">
                    <h3>Placa do Caminhão:</h3>
                    <input
                      className={styles.customSelect}
                      type="text"
                      name="textoPlacaVeiculo"
                      value={pedidos?.fornecedor?.placa_veiculo}
                      onChange={(event) => setTextoPlacaVeiculo(event.target.value)}
                    />
                  </label>
                </div>

                <div className={styles.idProduto}>
                  <div className={styles.divProduto}>
                    <h3>Data:</h3>
                    <input
                      className={styles.customSelect}
                      type="date"
                      value={pedidos?.produto?.data_entrada_empresa}
                    />
                  </div>
                  <div className={styles.divProduto}>
                    <h3>Horário:</h3>
                    <input
                      className={styles.SelectProduto}
                      type="time"
                      value={pedidos?.produto?.hora_entrada_empresa}
                    />
                  </div>
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="">
                    <h3>Documentos:</h3>
                    {/*                   <input type="file" /> */}
                    <input
                      className={styles.anexarBTN}
                      type="text"
                      name="textoDocmento"
                      value={textoDocmento}
                      onChange={(event) => setTextoDocmento(event.target.value)}
                    ></input>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className={styles.rightSide}>
              <fieldset className={styles.analise}>
                <div>
                  <legend className={styles.legend}>Dados de Identificação - Produto</legend>
                  <hr className={styles.row} />
                </div>
                <fieldset className={styles.idProduto}>
                  <div className={styles.divProduto}>
                    <h3>Produto:</h3>
                    <input
                      className={styles.SelectProduto}
                      type="text"
                      id="produtos"
                      name="textoProduto"
                      form="FormRecebedorUpdate"
                      value={pedidos?.produto?.nome_produto}
                      onChange={(event) => setTextoProduto(event.target.value)}
                    ></input>
                  </div>
                  <div>
                    <h3>Quantidade:</h3>
                    <input
                      className={styles.quantidade}
                      type="number"
                      name="numeroQuantidade"
                      value={pedidos?.produto?.quantidade_produto}
                      onChange={(event) => setNumeroQuantidade(event.target.value)}
                    />
                    <input
                      className={styles.selectMedida}
                      type="text"
                      id="produtos"
                      name="textoUnidadeMedida"
                      form="FormRecebedorUpdate"
                      value={pedidos?.produto?.unidade_medida}
                      onChange={(event) => setTextoUnidadeMedida(event.target.value)}
                    ></input>
                  </div>
                </fieldset>
                <div>
                  <div>
                    <label className={styles.label} htmlFor="infRecebedor">
                      Regras de Negócio:
                    </label>
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Coloração" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxColoracaoAprovado"
                      {...register("checkboxColoracaoAprovado")}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxColoracaoReprovado"
                      {...register("checkboxColoracaoReprovado")}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Odor" readOnly />
                    <input
                      type="checkbox"
                      className={styles.aprovar}
                      id="checkboxOdorAprovado"
                      {...register("checkboxOdorAprovado")}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxOdorReprovado"
                      {...register("checkboxOdorReprovado")}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Insetos vivos/mortos" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxAusenciaAnimaisAprovado"
                      {...register("checkboxAusenciaAnimaisAprovado")}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxAusenciaAnimaisReprovado"
                      {...register("checkboxAusenciaAnimaisReprovado")}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Mofo" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxAusenciaMofoAprovado"
                      {...register("checkboxAusenciaMofoAprovado")}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxAusenciaMofoReprovado"
                      {...register("checkboxAusenciaMofoReprovado")}
                    />
                  </div>

                  {/* for para distribuir os novos Critérios */}
                  <div>
                    {criteriosNovos.filter((criterio) => criterio.funcao === "Recebedor").map((criterio) => (
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
              {hasButton ? (
                <div className={styles.buttons}>
                  <input
                    className={styles.btnConfirmar}
                    type="submit"
                    value="CONFIRMAR"
                    onClick={handleSubmit}
                  />
                </div>
              ) : null}
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
                  <Link to="/recebedor/entradamercadoria">
                    <input className={styles.btnConfirmar} value="CONFIRMAR" />
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
