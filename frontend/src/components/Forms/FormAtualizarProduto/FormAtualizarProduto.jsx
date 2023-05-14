import React, { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

import styles from "./FormAtualizarProduto.module.css"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines, faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// HOOK
import { procurarProduto } from "../../../hooks/procurarProduto"
import { atualizarProduto } from "../../../hooks/atualizarProduto"

export const FormAtualizarProduto = () => {
  // NAVIGATE DO REACT ROUTER DOM
  const navigate = useNavigate()

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

  // HANDLE SUBMIT
  // AQUI ESTÁ CRIANDO, FAZER UM HOOK PARA ATUALIZAR O PRODUTO
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = {
        nome_produto,
        tipo,
        quantidade_produto,
        descricao
      }
      console.log("dados do produto: ", data)

      const produto = await atualizarProduto(produtoId, data)
      console.log(produto)
      setErrorMessage(produto.data.message)
      setOpenModalProdutoAtualizado(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalProdutoAtualizado(true)
      alert(errorMessage)
    }
  }

  // TENTANDO ENCONTRAR PEDIDO POR ID
  useEffect(() => {
    async function fetchProdutos() {
      const dadosProdutos = await procurarProduto(produtoId)
      setProduto(dadosProdutos)
      /*       console.log('Informações do Produto que chegam do BackEnd ' + JSON.stringify(dadosProdutos.data.message)) */
      setNomeProduto(dadosProdutos.data.message.nome_produto)
      setTipo(dadosProdutos.data.message.tipo)
      setDescricao(dadosProdutos.data.message.descricao)
    }
    fetchProdutos()
  }, [])

  // STATES DO FORMULÁRIO
  // PRECISA PEGAR DO BACKEND AGORA.
  const [nome_produto, setNomeProduto] = useState("")
  const [tipo, setTipo] = useState("")
  const [quantidade_produto, setQuantidadeProduto] = useState(1)
  const [unidade_medida, setUnidadeMedida] = useState("kg")
  const [descricao, setDescricao] = useState("")
  const [data_entrada_empresa, setDataEntradaEmpresa] = useState("01/01/2023")
  const [hora_entrada_empresa, setHoraEntradaEmpresa] = useState("12:00")

  //Para encontrar produto por ID
  const { id } = useParams()
  const produtoId = parseInt(id)

  const [produto, setProduto] = useState([])

  // ModalProdutoAtualizado
  const [openModalProdutoAtualizado, setOpenModalProdutoAtualizado] = useState(false)

  // HANDLES DO MODAL DE ATUALIZAR
  const handleCloseModalProdutoAtualizado = () => {
    setOpenModalProdutoAtualizado(false)
  }

  // Error message do Modal acima

  const [errorMessage, setErrorMessage] = useState("")

  const handleRedirect = () => {
    navigate("/admin/produtos/")
  }
  return (
    <div>
      {errorMessage === "Produto atualizado com sucesso!" ? (
        /* MODAL ATUALIZAR */
        <Modal isOpen={openModalProdutoAtualizado} onClick={handleRedirect}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <Link to="/admin/produtos/">
              <input className={styles.botaoConfirmarModal} type="button" value="OK" />
            </Link>
          </div>
        </Modal>
      ) : (
        <Modal isOpen={openModalProdutoAtualizado} onClick={handleCloseModalProdutoAtualizado}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <input
              className={styles.botaoConfirmarModal}
              type="button"
              value="OK"
              onClick={handleCloseModalProdutoAtualizado}
            />
          </div>
        </Modal>
      )}

      <form action="" method="post">
        <div id={styles["container"]}>
          <div id={styles["titulo1"]}>ATUALIZAR PRODUTO - {produtoId}</div>
          <div>
            Dados de Identificação
            <hr />
          </div>

          <div id={styles["idProduto"]}>
            {/*             <div id={styles["id"]}>ID:</div>
            <div id={styles["inputId"]}>
              <input type="text" className={styles.fullSizeInput} />
            </div>
            <div id={styles["data"]}>Data:</div>
            <div id={styles["inputData"]}>
              <input type="date" className={styles.fullSizeInput} />
            </div> */}
            <div id={styles["nomeProduto"]}>Nome:</div>
            <div id={styles["inputNomeProduto"]}>
              <input
                type="text"
                className={styles.fullSizeInput}
                value={nome_produto}
                onChange={(event) => setNomeProduto(event.target.value)}
              />
            </div>
            <div id={styles["id"]}>TIPO:</div>
            <div id={styles["inputId"]}>
              <input
                type="text"
                className={styles.fullSizeInput}
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
              />
            </div>
            <div id={styles["data"]}>DESCRIÇÃO:</div>
            <div id={styles["inputData"]}>
              <input
                type="text"
                className={styles.fullSizeInput}
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </div>
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
            <div id={styles["boxRegras"]}>COLORAÇÃO</div>

            <input
              type="checkbox"
              id="checkboxColoracao"
              checked={checkboxColoracao}
              onClick={handleCheckboxColoracao}
              className={styles.checkAprovar}
            />

            <div id={styles["boxRegras"]}>ODOR</div>

            <input
              type="checkbox"
              id="checkboxOdor"
              className={styles.checkAprovar}
              checked={checkboxOdor}
              onClick={handleCheckboxOdor}
            />
            <div id={styles["boxRegras"]}>AUSÊNCIA DE INSETOS VIVOS/MORTOS</div>

            <input
              type="checkbox"
              id="checkboxAusenciaAnimais"
              className={styles.checkAprovar}
              checked={checkboxAusenciaAnimais}
              onClick={handleCheckboxAusenciaAnimais}
            />
            <div id={styles["boxRegras"]}>AUSÊNCIA DE MOFO</div>

            <input
              type="checkbox"
              id="checkboxAM"
              className={styles.checkAprovar}
              checked={checkboxAusenciaMofo}
              onClick={handleCheckboxAusenciaMofo}
            />

            <div id={styles["subtitle"]}>
              REGRAS - ANALISTA
              <hr />
            </div>

            <div id={styles["boxRegras"]}>QUALIDADE</div>

            <input
              type="checkbox"
              id="checkboxQualidade"
              className={styles.checkAprovar}
              checked={checkboxQualidade}
              onClick={handleCheckboxQualidade}
            />

            <div id={styles["boxRegras"]}>FORMATO</div>

            <input
              type="checkbox"
              id="checkboxFormato"
              className={styles.checkAprovar}
              checked={checkboxFormato}
              onClick={handleCheckboxFormato}
            />
            <div id={styles["boxRegras"]}>NÍVEL DE AGROTÓXICOS</div>

            <input
              type="checkbox"
              id="checkboxNA"
              className={styles.checkAprovar}
              checked={checkboxNA}
              onClick={handleCheckboxNA}
            />

            <div id={styles["valorMax"]}>MÁX.</div>

            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput} type="number" id="porcentagemImpurezas" />
            </div>
            <p>%</p>

            <div id={styles["boxRegras"]}>IMPUREZAS</div>

            <input
              type="checkbox"
              id="checkboxImpurezas"
              className={styles.checkAprovar}
              checked={checkboxImpurezas}
              onClick={handleCheckboxImpurezas}
            />

            <div id={styles["valorMax"]}>MÁX.</div>

            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput} type="number" id="porcentagemImpurezas" />
            </div>
            <p>%</p>

            <input
              type="submit"
              value="ATUALIZAR"
              onClick={handleSubmit}
              className={styles.botaoConfirmarModal}
            />

            <div className={styles.inserirRegra} onClick={handleOpenModalRegra}>
              <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
              <p className={styles.paragrafoRegra}>INSERIR NOVA REGRA</p>
            </div>
          </div>
        </div>
      </form>

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
                      <input type="text" className={styles.porcentagem} min="0" max="100" />
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
    </div>
  )
}
