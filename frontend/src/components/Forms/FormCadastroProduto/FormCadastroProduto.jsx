import React, { useState, useEffect } from "react"

import { Link, useNavigate } from "react-router-dom"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

import styles from "./FormCadastroProduto.module.css"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines, faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// HOOK
import { criarProduto } from "../../../hooks/criarProduto"
import { criarCriterio } from "../../../hooks/criarCriterio"
import { buscarProduto } from "../../../hooks/procurarProduto"
import { encontrarCriterios } from "../../../hooks/encontrarCriterios"

export const FormCadastroProduto = () => {
  //Buscando todos Produtos
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function fetchProdutos() {
      const dadosProdutos = await buscarProduto()
      setProdutos(dadosProdutos)
    }
    fetchProdutos()
  }, [])

  console.log("produtos: ", produtos)

  // MODAL
  const [openModalRegra, setOpenModalRegra] = useState(false)
  const [openModalProduto, setOpenModalProduto] = useState(false)

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
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const dados = {
        nome_produto,
        tipo,
        quantidade_produto,
        unidade_medida,
        descricao,
        data_entrada_empresa,
        hora_entrada_empresa,
      }

      console.log(dados)

      const produto = await criarProduto(dados)
      console.log(produto)
      setErrorMessage(produto.message)
      setOpenModalProdutoCadastrado(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalProdutoCadastrado(true)
      alert(errorMessage)
    }
  }

  // STATES DO FORMULÁRIO
  const [nome_produto, setNomeProduto] = useState("")
  const [tipo, setTipo] = useState("")
  const [quantidade_produto, setQuantidadeProduto] = useState(1)
  const [unidade_medida, setUnidadeMedida] = useState("kg")
  const [descricao, setDescricao] = useState("")
  const [data_entrada_empresa, setDataEntradaEmpresa] = useState("01/01/2023")
  const [hora_entrada_empresa, setHoraEntradaEmpresa] = useState("12:00")

  // MODAL CADASTRO PRODUTO
  const [openModalProdutoCadastrado, setOpenModalProdutoCadastrado] = useState(false)

  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalProdutoCadastrado = () => {
    setOpenModalProdutoCadastrado(false)
    window.location.reload();
  }

  const handleOpenModalProdutoCadastrado = (e) => {
    e.preventDefault()
    setOpenModalProdutoCadastrado(true)
  }

  // DEFININDO NAVIGATOR

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/admin/produtos/")
  }

  // CRIANDO HANDLESUBMIT PARA CRITERIOS NOVOS
  const [descricaoRegra, setDescricaoRegra] = useState("")
  const [inserirValor, setInserirValor] = useState("")
  const [valorMax, setValorMax] = useState(0)
  const [funcaoUsuario, setFuncaoUsuario] = useState("")
  const [produtoId, setProdutoId] = useState("")

  // enviando os dados
  const handleSubmitCriterio = async (event) => {
    event.preventDefault()
    try {
      const data = {
        descricaoRegra,
        inserirValor,
        valorMax,
        funcaoUsuario,
        /* produtoId */
      }

      console.log(data)

      const criterio = await criarCriterio(data)
      console.log(criterio)
      setErrorMessage(criterio.mensagem)
      setOpenModalProdutoCadastrado(true)
    } catch (erro) {
      setErrorMessage(erro)
      setOpenModalProdutoCadastrado(true)
      alert(errorMessage)
    }
  }

  //buscando todos os critérios
  const [todosCriterios, setTodosCriterios] = useState([])
  useEffect(() => {
    async function fetchTodosCriterios() {
      const dadosCriterios = await encontrarCriterios()
      setTodosCriterios(dadosCriterios)
    }
    fetchTodosCriterios()
  }, [])

  console.log("criterios: ", todosCriterios)

  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div>
      <form action="" method="post">
        <div id={styles["container"]}>
          {errorMessage === "Produto cadastrado com sucesso!" ? (
            <Modal isOpen={openModalProdutoCadastrado} onClick={handleRedirect}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p className={styles.textoModal}>{errorMessage}</p>
                <Link to='/admin/produtos/'>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalProdutoCadastrado}
                  />
                </Link>
              </div>
            </Modal>
          ) : (
            <Modal isOpen={openModalProdutoCadastrado} onClick={handleCloseModalProdutoCadastrado}>
              <div className={styles.conteudoModal}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                <p className={styles.textoModal}>{errorMessage}</p>
                <input
                  className={styles.botaoConfirmarModal}
                  type="button"
                  value="OK"
                  onClick={handleCloseModalProdutoCadastrado}
                />
              </div>
            </Modal>
          )}

          <div id={styles["titulo1"]}>CADASTRO NOVO PRODUTO</div>
          <div>
            Dados de Identificação
            <hr />
          </div>

          <div id={styles["idProduto"]}>
            {/*
            <div id={styles["id"]}>ID:</div>
            <div id={styles["inputId"]}>
              <input type="text" className={styles.fullSizeInput} />
            </div>
            <div id={styles["data"]}>Data:</div>
            <div id={styles["inputData"]}>
              <input type="date" className={styles.fullSizeInput} />
            </div>
            */}
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

            <div id={styles["boxRegras"]}>ODOR</div>

            <div id={styles["boxRegras"]}>AUSÊNCIA DE INSETOS VIVOS/MORTOS</div>

            <div id={styles["boxRegras"]}>AUSÊNCIA DE MOFO</div>

            {todosCriterios?.map((criterio) => {
              if (criterio.funcao === 'Recebedor') {
                return (
                  <div key={criterio.id_criterio}>
                    <div id={styles["boxRegras"]}>{criterio.descricao_regra.toUpperCase()}</div>
                  </div>
                );
              } else {
                return null;
              }
            })}

            <div id={styles["subtitle"]}>
              REGRAS - ANALISTA
              <hr />
            </div>

            <div id={styles["boxRegras"]}>QUALIDADE</div>

            <div id={styles["boxRegras"]}>FORMATO</div>

            <div id={styles["boxRegras"]}>NÍVEL DE AGROTÓXICOS</div>

            <div id={styles["valorMax"]}>MÁX.</div>

            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput} type="number" id="porcentagemImpurezas" />
            </div>
            <p>%</p>

            <div id={styles["boxRegras"]}>IMPUREZAS</div>

            <div id={styles["valorMax"]}>MÁX.</div>

            <div id={styles["inputValorMax"]}>
              <input className={styles.fullSizeInput} type="number" id="porcentagemImpurezas" />
            </div>
            <p>%</p>

            {todosCriterios?.map((criterio) => {
              if (criterio.funcao === 'Analista') {
                return (
                  <div key={criterio.id_criterio}>
                    <div id={styles["boxRegras"]}>{criterio.descricao_regra.toUpperCase()}</div>
                  </div>
                );
              } else {
                return null;
              }
            })}

            <input type="submit" value="CADASTRAR" onClick={handleSubmit} className={styles.botaoConfirmar} />

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
              <p>NOVA REGRA DE ACEITAÇÃO</p>
            </div>
            <div className={styles.usuarioModal}>
              <label>
                Usuário:
                <br />
                <select className={styles.inputModal}
                  onChange={(event) => setFuncaoUsuario(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Recebedor">Recebedor</option>
                  <option value="Analista">Analista</option>
                </select>
              </label>
            </div>
            {/* REMOVI PRODUTO DAQUI */}
            {/* <div className={styles.usuarioModal}>
              <label>
                Produto:
                <br />
                <select
                  className={styles.inputModal}
                  onChange={(event) => setProdutoId(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Todos">Todos</option>
                  {produtos.map((produto) => (
                    <option key={produto.id_produto} value={produto.id_produto}>
                      {produto.nome_produto}
                    </option>
                  ))}
                </select>
              </label>
            </div> */}
            <div className={styles.descricaoModal}>
              <label>
                Descrição:
                <br />
                <input type="text" className={styles.inputModal}
                  onChange={(event) => setDescricaoRegra(event.target.value)} />
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
                    value="true"
                    className={styles.radioModal}
                    checked={radioInserirValores}
                    onClick={handleRadioInserirValores}
                    onChange={(event) => setInserirValor(event.target.value)}
                  />
                </label>
                <label className={styles.radioModal}>
                  Não
                  <input
                    type="radio"
                    id="radioNaoInserirValores"
                    value="false"
                    className={styles.radioModal}
                    onClick={handleRadioNaoInserirValores}
                    onChange={(event) => setInserirValor(event.target.value)}
                  />
                </label>
              </label>
            </div>
            <div>
              {radioInserirValores ? (
                <label>
                  Valores:
                  <div>
                    <label>
                      Máx.
                      <input type="text" className={styles.porcentagem} min="0" max="100"
                        onChange={(event) => setValorMax(event.target.value)} />
                    </label>
                    %
                  </div>
                </label>
              ) : (null)}
            </div>
            <input
              className={styles.botaoConfirmarModal}
              type="button"
              value="CADASTRAR"
              onClick={handleSubmitCriterio}

            />
          </div>
        </Modal>
      </div>
    </div>
  )
}
