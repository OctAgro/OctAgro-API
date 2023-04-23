import React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/recebedorBtn/recebedorBtn"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormRecebedorUpdate.module.css"

export const FormRecebedorUpdate = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [textoNomeFornecedor, setTextoNomeFornecedor] = useState('');
  const [textoNomeEntregador, setTextoNomeEntregador] = useState('');
  const [textoPlacaVeiculo, setTextoPlacaVeiculo] = useState('');
  const [numeroQuantidade, setNumeroQuantidade] = useState(0);
  const [textoUnidadeMedida, setTextoUnidadeMedida] = useState('');
  const [textoDocmento, setTextoDocmento] = useState('');
  const [textoProduto, setTextoProduto] = useState('');

  // simulando fetch numa API fake, isso te ajuda, meu amigo do BackEnd?
  useEffect(() => {
    fetch('https://example.com/data')
      .then(response => response.json())
      .then(data => {
        setTextoNomeFornecedor(data.nomeFornecedor);
        setTextoNomeEntregador(data.nomeEntregador);
        setTextoPlacaVeiculo(data.placaVeiculo);
        setNumeroQuantidade(data.quantidade);
        setTextoUnidadeMedida(data.unidadeMedida);
        setTextoDocmento(data.documento);
        setTextoProduto(data.produto);
      });
  }, []);


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

    console.log("textoNomeFornecedor:", textoNomeFornecedor)
    console.log("textoNomeEntregador:", textoNomeEntregador)
    console.log("textoPlacaVeiculo:", textoPlacaVeiculo)
    console.log("numeroQuantidade:", numeroQuantidade)
    console.log("textoUnidadeMedida:", textoUnidadeMedida)
    console.log("textoDocmento:", textoDocmento)
    console.log("textoProduto:", textoProduto)

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
              Pedido {props.numeroPedido} - {props.nomeProduto}
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
                      <select className={styles.customSelect}
                        id="fornecedor"
                        name="textoNomeFornecedor"
                        form="FormRecebedorUpdate"
                        value={textoNomeFornecedor}
                        onChange={(event) => setTextoNomeFornecedor(event.target.value)}
                      >
                        <option value="produto1">TRIGOSTOSO</option>
                        <option value="produto2">COFFELICIOUS</option>
                        <option value="produto3">KORN FLAKES</option>
                        <option value="produto4">SOY ATACK</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <label>
                    <h3>Nome do Caminhoneiro:</h3>
                    <div>
                      <input className={styles.customSelect}
                        type="text"
                        name="textoNomeEntregador"
                        value={textoNomeEntregador}
                        onChange={(event) => setTextoNomeEntregador(event.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="textoPlacaVeiculo">
                    <h3>Placa do Caminhão:</h3>
                    <input className={styles.customSelect}
                      type="text"
                      name="textoPlacaVeiculo"
                      value={textoPlacaVeiculo}
                      onChange={(event) => setTextoPlacaVeiculo(event.target.value)}
                    />
                  </label>
                </div>

                <div className={styles.idProduto}>
                  <div className={styles.divProduto}>
                    <h3>Data:</h3>
                    <input className={styles.customSelect} type="date" />
                  </div>
                  <div className={styles.divProduto}>
                    <h3>Horário:</h3>
                    <input className={styles.SelectProduto} type="time" />
                  </div>
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="">
                    <h3>Documentos:</h3>
                    {/*                   <input type="file" /> */}
                    <button className={styles.anexarBTN}
                      type="text"
                      name="textoDocmento"
                      value={textoDocmento}
                      onChange={(event) => setTextoDocmento(event.target.value)}
                    >anexar documentos</button>
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
                    <select className={styles.SelectProduto}
                      id="produtos"
                      name="textoProduto"
                      form="FormRecebedorUpdate"
                      value={textoProduto}
                      onChange={(event) => setTextoProduto(event.target.value)}
                    >
                      <option value="produto1">Trigo</option>
                      <option value="produto2">Café</option>
                      <option value="produto3">Milho</option>
                      <option value="produto4">Soja</option>
                    </select>
                  </div>
                  <div>
                    <h3>Quantidade:</h3>
                    <input className={styles.quantidade}
                      type="number"
                      name="numeroQuantidade"
                      value={numeroQuantidade}
                      onChange={(event) => setNumeroQuantidade(event.target.value)} />
                    <select className={styles.selectMedida}
                      id="produtos"
                      name="textoUnidadeMedida"
                      form="FormRecebedorUpdate"
                      value={textoUnidadeMedida}
                      onChange={(event) => setTextoUnidadeMedida(event.target.value)}
                    >
                      <option value="tipo1">Toneladas (Sc)</option>
                      <option value="tipo2">Quilograma (kg)</option>
                      <option value="tipo3">Sacas</option>
                      <option value="tipo4">Bushel</option>
                    </select>
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
                      {...register("checkboxColoracaoAprovado")}
                    />
                    <label htmlFor="checkboxColoracaoAprovado">Aprovado</label>
                    <input
                      type="checkbox"
                      id="checkboxColoracaoReprovado"
                      {...register("checkboxColoracaoReprovado")}
                    />
                    <label htmlFor="checkboxColoracaoReprovado">Recusado</label>
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Odor" readOnly />
                    <input type="checkbox" id="checkboxOdorAprovado" {...register("checkboxOdorAprovado")} />
                    <label htmlFor="checkboxOdorAprovado">Aprovado</label>
                    <input type="checkbox" id="checkboxOdorReprovado" {...register("checkboxOdorReprovado")} />
                    <label htmlFor="checkboxOdorReprovado">Recusado</label>
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Insetos vivos/mortos" readOnly />
                    <input
                      type="checkbox"
                      id="checkboxAusenciaInsetosAprovado"
                      {...register("checkboxAusenciaInsetosAprovado")}
                    />
                    <label htmlFor="checkboxAusenciaInsetosAprovado">Aprovado</label>
                    <input
                      type="checkbox"
                      id="checkboxAusenciaInsetosReprovado"
                      {...register("checkboxAusenciaInsetosReprovado")}
                    />
                    <label htmlFor="checkboxAusenciaInsetosReprovado">Recusado</label>
                  </div>
                  <div className={styles.inputBlock}>
                    <input className={styles.btnsRN} value="Ausência de Mofo" readOnly />
                    <input
                      type="checkbox"
                      id="checkboxAusenciaMofoAprovado"
                      {...register("checkboxAusenciaMofoAprovado")}
                    />
                    <label htmlFor="checkboxAusenciaMofoAprovado">Aprovado</label>
                    <input
                      type="checkbox"
                      id="checkboxAusenciaMofoReprovado"
                      {...register("checkboxAusenciaMofoReprovado")}
                    />
                    <label htmlFor="checkboxAusenciaMofoReprovado">Recusado</label>
                  </div>
                </div>
              </fieldset>
              <div className={styles.buttons}>
                <Button
                  value1="ATUALIZAR"
                  type="submit"
                  onClick={handleAtualizar}
                />
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
