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
import axios from "axios"

import { encontrarPedidosById } from "../../../hooks/encontrarPedidos"
import { buscarCriteriosRecebedorPorId } from "../../../hooks/buscarCriteriosRecebedorPorId"

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

  const [relatorioRecebedor, setRelatorioRecebedor] = useState([])

  useEffect(() => {
    setTextoNomeFornecedor(pedidos?.fornecedor?.nome_fornecedor)
    setTextoNomeEntregador(pedidos?.fornecedor?.nome_motorista)
    setTextoPlacaVeiculo(pedidos?.fornecedor?.placa_veiculo)
    setNumeroQuantidade(pedidos?.produto?.quantidade_produto)
    setTextoUnidadeMedida(pedidos?.produto?.unidade_medida)
    setTextoProduto(pedidos?.produto?.nome_produto)
  }, [relatorioRecebedor])

  // simulando fetch numa API fake, isso te ajuda, meu amigo do BackEnd?
  useEffect(() => {

    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidosById(pedidoId)
      setPedidos(dadosPedidos)
    }
    fetchPedidos()

    async function fetchRelatoriosRecebedorPorCriterios() {
      const dadosRelatorioRecebedor = await buscarCriteriosRecebedorPorId(pedidoId)
      setRelatorioRecebedor(dadosRelatorioRecebedor)
    }
    fetchRelatoriosRecebedorPorCriterios()

  }, [])

  console.log("relatorios", relatorioRecebedor)




  //lidando com as checkboxs vindas do BD

  const [checkboxColoracaoAprovado, setCheckboxColoracaoAprovado] = useState(false);
  const [checkboxColoracaoReprovado, setCheckboxColoracaoReprovado] = useState(false);

  const [checkboxOdorAprovado, setCheckboxOdorAprovado] = useState(false);
  const [checkboxOdorReprovado, setCheckboxOdorReprovado] = useState(false);

  const [checkboxAusenciaAnimaisAprovado, setCheckboxAusenciaAnimaisAprovado] = useState(false);
  const [checkboxAusenciaAnimaisReprovado, setCheckboxAusenciaAnimaisReprovado] = useState(false);

  const [checkboxAusenciaMofoAprovado, setCheckboxAusenciaMofoAprovado] = useState(false);
  const [checkboxAusenciaMofoReprovado, setCheckboxAusenciaMofoReprovado] = useState(false);


  useEffect(() => {
    if (relatorioRecebedor === undefined) {
      setCheckboxColoracaoAprovado(false);
      setCheckboxColoracaoReprovado(false);
    }
    else if (relatorioRecebedor.coloracao === true) {
      setCheckboxColoracaoAprovado(relatorioRecebedor.coloracao);
      setCheckboxColoracaoReprovado(!relatorioRecebedor.coloracao);
    } else {
      setCheckboxColoracaoReprovado(true);
      setCheckboxColoracaoAprovado(false);
    }
  }, [relatorioRecebedor]);

  useEffect(() => {
    if (relatorioRecebedor === undefined) {
      setCheckboxOdorAprovado(false);
      setCheckboxOdorReprovado(false);
    }
    else if (relatorioRecebedor.odor === true) {
      setCheckboxOdorAprovado(relatorioRecebedor.odor);
      setCheckboxOdorReprovado(!relatorioRecebedor.odor);
    } else {
      setCheckboxOdorReprovado(true);
      setCheckboxOdorAprovado(false);
    }
  }, [relatorioRecebedor]);

  //useEffect para carregar checkbox de animais
  useEffect(() => {
    if (relatorioRecebedor === undefined) {
      setCheckboxAusenciaAnimaisAprovado(false);
      setCheckboxAusenciaAnimaisReprovado(false);
    }
    else if (relatorioRecebedor.ausencia_animais === true) {
      setCheckboxAusenciaAnimaisAprovado(relatorioRecebedor.ausencia_animais);
      setCheckboxAusenciaAnimaisReprovado(!relatorioRecebedor.ausencia_animais);
    } else {
      setCheckboxAusenciaAnimaisReprovado(true);
      setCheckboxAusenciaAnimaisAprovado(false);
    }
  }, [relatorioRecebedor]);
  
  //useEffect para carregar checkbox de mofo
  useEffect(() => {
    if (relatorioRecebedor === undefined) {
      setCheckboxAusenciaMofoAprovado(false);
      setCheckboxAusenciaMofoReprovado(false);
    }
    else if (relatorioRecebedor.ausencia_mofo === true) {
      setCheckboxAusenciaMofoAprovado(relatorioRecebedor.ausencia_mofo);
      setCheckboxAusenciaMofoReprovado(!relatorioRecebedor.ausencia_mofo);
    } else {
      setCheckboxAusenciaMofoReprovado(true);
      setCheckboxAusenciaMofoAprovado(false);
    }
  }, [relatorioRecebedor]);


  console.log(pedidos)

  //possibilitando as mudanças de checkbox ao clique
  const handleCheckboxCAChange = () => {
    setCheckboxColoracaoAprovado(!checkboxColoracaoAprovado);
  }
  const handleCheckboxCRChange = () => {
    setCheckboxColoracaoReprovado(!checkboxColoracaoReprovado);
  }


  const handleCheckboxOAChange = () => {
    setCheckboxOdorAprovado(!checkboxOdorAprovado);
  }
  const handleCheckboxORChange = () => {
    setCheckboxOdorReprovado(!checkboxOdorReprovado);
  }


  const handleCheckboxAAChange = () => {
    setCheckboxAusenciaAnimaisAprovado(!checkboxAusenciaAnimaisAprovado);
  }
  const handleCheckboxARChange = () => {
    setCheckboxAusenciaAnimaisReprovado(!checkboxAusenciaAnimaisReprovado); //
  }
  
  
  const handleCheckboxMAChange = () => {
    setCheckboxAusenciaMofoAprovado(!checkboxAusenciaMofoAprovado);
  }
  const handleCheckboxMRChange = () => {
    setCheckboxAusenciaMofoReprovado(!checkboxAusenciaMofoReprovado); //
  }

  const enviarDados = async () => {

    const data = {
      idPedido: pedidos.id_pedido,
      checkboxColoracaoAprovado,
      checkboxColoracaoReprovado,
      checkboxOdorAprovado,
      checkboxOdorReprovado,
      checkboxAusenciaAnimaisAprovado,
      checkboxAusenciaAnimaisReprovado,
      checkboxAusenciaMofoAprovado,
      checkboxAusenciaMofoReprovado,
      textoNomeFornecedor,
      textoNomeEntregador,
      textoPlacaVeiculo,
      numeroQuantidade,
      textoUnidadeMedida,
      textoProduto,
    }  

    try {
      const resposta = await axios.post(`http://localhost:3000/recebedor/relatorios/editar`, data)
      //esse console.log retorna respostas json do backend de erros de validacao
      console.log("enviou? ", resposta)
      setMensagemErro(resposta.data.message)
    } catch (erro) {
      //esse console.log abaixo exibe as mensagens de erro do AXIOS/HTTP request errors
      console.log(erro.message)
      /* setMensagemErro(erro) */
    }
  }


  const onSubmit = () => {
    handleAtualizar()
  }

  const [isAprovado, setIsAprovado] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleAtualizar = () => {
    setIsAprovado(true)
    setOpenModal(true)
    enviarDados()
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
                        value={textoNomeFornecedor}
                        onChange={(event) => {setTextoNomeFornecedor(event.target.value)}}
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
                        value={textoNomeEntregador}
                        onChange={(event) => {setTextoNomeEntregador(event.target.value)}}
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
                      value={textoPlacaVeiculo}
                      onChange={(event) => {setTextoPlacaVeiculo(event.target.value)}}
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
                      value={textoProduto}
                      onChange={(event) => {setTextoProduto(event.target.value)}}
                    ></input>
                  </div>
                  <div>
                    <h3>Quantidade:</h3>
                    <input
                      className={styles.quantidade}
                      type="number"
                      name="numeroQuantidade"
                      value={numeroQuantidade}
                      onChange={(event) => {setNumeroQuantidade(event.target.value)}}
                    />
                    <input
                      className={styles.selectMedida}
                      id="produtos"
                      name="textoUnidadeMedida"
                      value={textoUnidadeMedida}
                      onChange={(event) => {setTextoUnidadeMedida(event.target.value)}}
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
                      name="checkboxColoracaoAprovado"
                      className={styles.aprovar}
                      {...register("checkboxColoracaoAprovado")}
                      checked={checkboxColoracaoAprovado}
                      onClick={handleCheckboxCAChange}
                    />
                    <input
                      type="checkbox"
                      id="checkboxColoracaoReprovado"
                      className={styles.recusar}
                      {...register("checkboxColoracaoReprovado")}
                      checked={checkboxColoracaoReprovado}
                      onClick={handleCheckboxCRChange}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Odor" readOnly />
                    <input
                      type="checkbox"
                      id="checkboxOdorAprovado"
                      className={styles.aprovar}
                      {...register("checkboxOdorAprovado")}
                      checked={checkboxOdorAprovado}
                      onClick={handleCheckboxOAChange}
                    />
                    <input
                      type="checkbox"
                      id="checkboxOdorReprovado"
                      className={styles.recusar}
                      {...register("checkboxOdorReprovado")}
                      checked={checkboxOdorReprovado}
                      onClick={handleCheckboxORChange}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Insetos vivos/mortos" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxAusenciaInsetosAprovado"
                      {...register("checkboxAusenciaInsetosAprovado")}
                      checked={checkboxAusenciaAnimaisAprovado}
                      onClick={handleCheckboxAAChange}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxAusenciaInsetosReprovado"
                      {...register("checkboxAusenciaInsetosReprovado")}
                      checked={checkboxAusenciaAnimaisReprovado}
                      onClick={handleCheckboxARChange}
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Mofo" readOnly />
                    <input
                      className={styles.aprovar}
                      type="checkbox"
                      id="checkboxAusenciaMofoAprovado"
                      {...register("checkboxAusenciaMofoAprovado")}
                      checked={checkboxAusenciaMofoAprovado}
                      onClick={handleCheckboxMAChange}
                    />
                    <input
                      className={styles.recusar}
                      type="checkbox"
                      id="checkboxAusenciaMofoReprovado"
                      {...register("checkboxAusenciaMofoReprovado")}
                      checked={checkboxAusenciaMofoReprovado}
                      onClick={handleCheckboxMRChange}
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
