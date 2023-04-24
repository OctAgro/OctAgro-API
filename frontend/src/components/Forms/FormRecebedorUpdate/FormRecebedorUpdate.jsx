import React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/recebedorBtn/recebedorBtn"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormRecebedorUpdate.module.css"
import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"

export const FormRecebedorUpdate = () => {
  //Para encontrar pedidos por ID
  const { id } = useParams()
  const pedidoId = parseInt(id)

  const [pedidos, setPedidos] = useState([])

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

  // simulando fetch numa API fake, isso te ajuda, meu amigo do BackEnd?
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log(pedidos)

  const onSubmit = (
    data,
    textoNomeFornecedor,
    textoNomeEntregador,
    textoPlacaVeiculo,
    numeroQuantidade,
    textoUnidadeMedida,
    textoDocmento,
    textoProduto
  ) => {
    console.log("Booleans:")
    console.log(data)

    handleAtualizar()
  }

  const [isAprovado, setIsAprovado] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleAtualizar = (e) => {
    e.preventDefault()
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
          <form name="FormRecebedorUpdate" onSubmit={handleSubmit(onSubmit)} className={styles.formMain}>
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
                        type="text"
                        value={pedidos?.fornecedor?.nome_fornecedor}
                        onChange={(event) => setTextoNomeFornecedor(event.target.value)}
                      ></input>
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
                    <button
                      className={styles.anexarBTN}
                      type="text"
                      name="textoDocmento"
                      value={textoDocmento}
                      onChange={(event) => setTextoDocmento(event.target.value)}
                    >
                      anexar documentos
                    </button>
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
                      id="produtos"
                      name="textoProduto"
                      type="text"
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
                      id="produtos"
                      name="textoUnidadeMedida"
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
                      type="checkbox"
                      id="checkboxColoracaoAprovado"
                      className={styles.aprovar}
                      {...register("checkboxColoracaoAprovado")}
                    />
                    <input
                      type="checkbox"
                      id="checkboxColoracaoReprovado"
                      className={styles.recusar}
                      {...register("checkboxColoracaoReprovado")}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Odor" readOnly />
                    <input
                      type="checkbox"
                      id="checkboxOdorAprovado"
                      className={styles.aprovar}
                      {...register("checkboxOdorAprovado")}
                    />
                    <input
                      type="checkbox"
                      id="checkboxOdorReprovado"
                      className={styles.recusar}
                      {...register("checkboxOdorReprovado")}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Insetos vivos/mortos" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxAusenciaInsetosAprovado"
                      {...register("checkboxAusenciaInsetosAprovado")}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxAusenciaInsetosReprovado"
                      {...register("checkboxAusenciaInsetosReprovado")}
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
                </div>
              </fieldset>
              <div className={styles.buttons}>
                <Button value1="ATUALIZAR" type="submit" onClick={handleAtualizar} />
              </div>
            </div>
          </form>
        </div>
        <div className={styles.divModal}>
          <Modal isOpen={openModal} onClick={handleCloseModal}>
            <div className={styles.clearfix}>
              {isAprovado ? (
                <div className={styles.container}>
                  <FontAwesomeIcon icon={faArrowRotateRight} className={styles.iconSmile} />
                  <p className={styles.paragraph}>Mercadoria cadastrada com sucesso!</p>
                  <Link to="/recebedor/entradamercadoria">
                    <Button className={styles.buttonConfirm} value1="CONFIRMAR" />
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
