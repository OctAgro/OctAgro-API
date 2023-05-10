import React, { useState } from "react"

import { useForm } from "react-hook-form"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

import styles from "./FormCadastroProduto.module.css"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"

export const FormCadastroProduto = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // MODAL

  const [openModalRegra, setOpenModalRegra] = useState(false)
  const [openModalProduto, setOpenModalProduto] = useState(false)

  // CHECKBOX REGRAS RECEBEDOR

  const [checkboxColoracao, setCheckboxColoracao] = useState(false)
  const [checkboxOdor, setCheckboxOdor] = useState(false)
  const [checkboxAusenciaAnimais, setCheckboxAusenciaAnimais] = useState(false)
  const [checkboxAusenciaMofo, setCheckboxAusenciaMofo] = useState(false)

  // CHECKBOX REGRAS ANALISTA

  const [checkboxQualidade, setCheckboxQualidade] = useState(false)
  const [checkboxFormato, setCheckboxFormato] = useState(false)
  const [checkboxNA, setCheckboxNA] = useState(false)
  const [checkboxImpurezas, setCheckboxImpurezas] = useState(false)

  // INSERIR VALORES

  const [radioInserirValores, setRadioInserirValores] = useState(false)
  const [radioNaoInserirValores, setRadioNaoInserirValores] = useState(true)

  // MODAL

  const handleOpenModalRegra = () => {
    setOpenModalRegra(true)
  }

  const handleOpenModalProduto = () => {
    setOpenModalProduto(true)
  }

  // CHECKBOX REGRAS RECEBEDOR

  const handleCheckboxColoracao = () => {
    setCheckboxColoracao(!checkboxColoracao)
  }

  const handleCheckboxOdor = () => {
    setCheckboxOdor(!checkboxOdor)
  }

  const handleCheckboxAusenciaAnimais = () => {
    setCheckboxAusenciaAnimais(!checkboxAusenciaAnimais)
  }

  const handleCheckboxAusenciaMofo = () => {
    setCheckboxAusenciaMofo(!checkboxAusenciaMofo)
  }

  // CHECKBOX REGRAS ANALISTA

  const handleCheckboxQualidade = () => {
    setCheckboxQualidade(!checkboxQualidade)
  }

  const handleCheckboxFormato = () => {
    setCheckboxFormato(!checkboxFormato)
  }

  const handleCheckboxNA = () => {
    setCheckboxNA(!checkboxNA)
  }

  const handleCheckboxImpurezas = () => {
    setCheckboxImpurezas(!checkboxImpurezas)
  }

  // FECHAR MODAL
  const handleCloseModalRegra = () => {
    setOpenModalRegra(false)
  }

  // RADIO INSERIR VALORES

  const handleRadioInserirValores = () => {
    setRadioInserirValores(!radioInserirValores)
    setRadioNaoInserirValores(false)
  }

  const handleRadioNaoInserirValores = () => {
    setRadioNaoInserirValores(!radioNaoInserirValores)
    setRadioInserirValores(false)
  }

  return (
    <div>
      <form action="" method="post">

        <div id={styles["container"]}>
          <div id={styles["titulo1"]}>
            CADASTRO NOVO PRODUTO
          </div>
          <div>
            Dados de Identificação
            <hr />
          </div>

          <div id={styles["idProduto"]}>
            <div id={styles["id"]}>
              ID:
            </div>
            <div id={styles["inputId"]}><input type="text" className={styles.fullSizeInput} /></div>
            <div id={styles["data"]}>
              Data:
            </div>
            <div id={styles["inputData"]}><input type="date" className={styles.fullSizeInput} /></div>
            <div id={styles["nomeProduto"]}>
              Nome:
            </div>
            <div id={styles["inputNomeProduto"]}><input type="text" className={styles.fullSizeInput} /></div>
            <div id={styles["id"]}>
              TIPO:
            </div>
            <div id={styles["inputId"]}><input type="text" className={styles.fullSizeInput} /></div>
            <div id={styles["data"]}>
              DESCRIÇÃO:
            </div>
            <div id={styles["inputData"]}><input type="text" className={styles.fullSizeInput} /></div>
          </div>
          <div id={styles["titulo2"]}>
            Regras de Aceitação
            <hr />
          </div>


          <div id={styles["regrasAceitacao"]}>
            <div id={styles["subtitle"]}>
              REGRAS - RECEBEDOR
              <hr />
            </div>
            <div id={styles["boxRegras"]}>
              COLORAÇÃO
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["boxRegras"]}>
              ODOR
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />
            <div id={styles["boxRegras"]}>
              AUSÊNCIA DE INSETOS VIVOS/MORTOS
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />
            <div id={styles["boxRegras"]}>
              AUSÊNCIA DE MOFO
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["subtitle"]}>
              REGRAS - ANALISTA
              <hr />
            </div>

            <div id={styles["boxRegras"]}>
              COLORAÇÃO
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["boxRegras"]}>
              ODOR
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />
            <div id={styles["boxRegras"]}>
              AUSÊNCIA DE INSETOS VIVOS/MORTOS
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["valorMax"]}>
              MÁX.
            </div>

            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput}
                type="number"
                id="porcentagemImpurezas"
              />

            </div>
            <p>%</p>


            <div id={styles["boxRegras"]}>
              Impurezas
            </div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              {...register("checkboxColoracao")}
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["valorMax"]}>
              MÁX.
            </div>


            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput}
                type="number"
                id="porcentagemImpurezas"
              />
            </div>
            <p>%</p>

            <input type="submit" value="CADASTRAR" onClick={onClick} className={styles.botaoConfirmarModal} />

            <div className={styles.inserirRegra} onClick={handleOpenModalRegra}>
              <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
              <p className={styles.paragrafoRegra}>INSERIR NOVA REGRA</p>
            </div>

          </div>




        </div>


      </form >

      <div>
        <Modal isOpen={openModalRegra} onClick={handleCloseModalRegra}>
          <div className={styles.conteudoModalRegra}>
            <div className={styles.tituloModal}>
              <p>Nova regra de aceitação</p>
            </div>
            <div className={styles.usuarioModal}>
              <label>
                Usuário:
                <br />
                <select className={styles.inputModal}>
                  <option value="Recebedor">Recebedor</option>
                  <option value="Analista">Analista</option>
                </select>
              </label>
            </div>
            <div className={styles.descricaoModal}>
              <label>
                Descrição:
                <br />
                <input type="text" className={styles.inputModal} />
              </label>
            </div>
            <div className={styles.inserirModal}>
              <label className={styles.radioModal}>
                Inserir valores?
                <label className={styles.radioModal}>
                  Sim
                  <input
                    type="radio"
                    id="radioInserirValores"
                    className={styles.radioModal}
                    {...register("radioInserirValores")}
                    checked={radioInserirValores}
                    onClick={handleRadioInserirValores}
                  />
                </label>
                <label className={styles.radioModal}>
                  Não
                  <input
                    type="radio"
                    id="radioNaoInserirValores"
                    className={styles.radioModal}
                    {...register("radioNaoInserirValores")}
                    checked={radioNaoInserirValores}
                    onClick={handleRadioNaoInserirValores}
                  />
                </label>
              </label>
            </div>
            <div>
              {radioInserirValores && (
                <label>
                  Valores:
                  <div>
                    <label>
                      Máx.
                      <input
                        type="text"
                        className={styles.porcentagem}
                        min='0'
                        max='100'
                      />
                    </label>
                    %
                  </div>
                </label>
              )}
            </div>
            <input
              className={styles.botaoConfirmarModal}
              type="button"
              value="CADASTRAR"
              onClick={handleOpenModalRegra}
            />
          </div>
        </Modal>
      </div>

    </div >
  )
}
