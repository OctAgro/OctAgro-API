import React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Button } from "../../Button/Button"
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormRecebedorUpdate.module.css"

export const FormRecebedorUpdate = ({ numeroPedido, nomeAnalista }) => {
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
    <div className={styles.divMaster}>
      <div className={styles.divForm}>
        <div className={styles.formTop}>
          <label className={styles.label} htmlFor="FormRecebedorUpdate">
            Relatório do Pedido {numeroPedido} - {nomeAnalista}
          </label>
        </div>
        <form name="FormRecebedorUpdate" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.leftSide}>
            <fieldset className={styles.documentacao}>
              <div>
                <legend className={styles.legend}>Dados de Identificação - Entrada</legend>
                <hr className={styles.row} />
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="">
                  Fornecedor:
                  <select
                    id="fornecedor"
                    name="textoNomeFornecedor"
                    form="FormRecebedorUpdate"
                    value={textoNomeFornecedor}
                    onChange={(event) => setTextoNomeFornecedor(event.target.value)}
                  >
                    <option value="produto1">Trigo</option>
                    <option value="produto2">Café</option>
                    <option value="produto3">Milho</option>
                    <option value="produto4">Feijão</option>
                  </select>
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="">
                  Nome do Caminhoneiro:
                  <input
                    type="text"
                    name="textoNomeEntregador"
                    value={textoNomeEntregador}
                    onChange={(event) => setTextoNomeEntregador(event.target.value)}
                  />
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="textoPlacaVeiculo">
                  Placa do Caminhão:
                  <input
                    type="text"
                    name="textoPlacaVeiculo"
                    value={textoPlacaVeiculo}
                    onChange={(event) => setTextoPlacaVeiculo(event.target.value)}
                  />
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="">
                  Data:
                  <input type="date" />
                </label>
                <label htmlFor="">
                  Horário:
                  <input type="time" />
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="">
                  Documentos:
                  {/*                   <input type="file" /> */}
                  <input
                    type="text"
                    name="textoDocmento"
                    value={textoDocmento}
                    onChange={(event) => setTextoDocmento(event.target.value)}
                  />
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
              <div>
                <label htmlFor="">
                  Produto:
                  <select
                    id="produtos"
                    name="textoProduto"
                    form="FormRecebedorUpdate"
                    value={textoProduto}
                    onChange={(event) => setTextoProduto(event.target.value)}
                  >
                    <option value="produto1">Trigo</option>
                    <option value="produto2">Café</option>
                    <option value="produto3">Milho</option>
                    <option value="produto4">Feijão</option>
                  </select>
                </label>

                <label htmlFor="produtos">
                  Quantidade:
                  <input
                    type="number"
                    name="numeroQuantidade"
                    value={numeroQuantidade}
                    onChange={(event) => setNumeroQuantidade(event.target.value)}
                  />
                  <select
                    id="produtos"
                    name="textoUnidadeMedida"
                    form="FormRecebedorUpdate"
                    value={textoUnidadeMedida}
                    onChange={(event) => setTextoUnidadeMedida(event.target.value)}
                  >
                    <option value="tipo1">Quilograma (kg)</option>
                    <option value="tipo2">Toneladas (Sc)</option>
                    <option value="tipo3">Sacas</option>
                    <option value="tipo4">Bushel</option>
                  </select>
                </label>
              </div>
              <div>
                <div>
                  <label className={styles.label} htmlFor="infRecebedor">
                    Regras de Negócio:
                  </label>
                </div>
                <div className={styles.inputBlock}>
                  <input className={styles.btnReadOnly} value="Coloração" readOnly />
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
                  <input className={styles.btnReadOnly} value="Odor" readOnly />
                  <input type="checkbox" id="checkboxOdorAprovado" {...register("checkboxOdorAprovado")} />
                  <label htmlFor="checkboxOdorAprovado">Aprovado</label>
                  <input type="checkbox" id="checkboxOdorReprovado" {...register("checkboxOdorReprovado")} />
                  <label htmlFor="checkboxOdorReprovado">Recusado</label>
                </div>
                <div className={styles.inputBlock}>
                  <input className={styles.btnReadOnly} value="Ausência de Insetos vivos/mortos" readOnly />
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
                  <input className={styles.btnReadOnly} value="Ausência de Mofo" readOnly />
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
                style={{ backgroundColor: "#4C4B16" }}
              />
            </div>
          </div>
        </form>

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
