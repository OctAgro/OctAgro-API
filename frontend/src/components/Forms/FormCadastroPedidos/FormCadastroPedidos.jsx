import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO ESTILOS
import styles from "./FormCadastroPedidos.module.css"

// IMPORTANDO HOOK
import { criarPedido } from "../../../hooks/criarPedido"
import { buscarFornecedores } from "../../../hooks/buscarFornecedores"
import { buscarProduto } from "../../../hooks/procurarProduto"

export const FormCadastroPedidos = () => {

  //trazendo lista de todos os Fornecedores
  const [fornecedores, setFornecedores] = useState([])
  useEffect(() => {
    async function fetchFornecedores() {
      const dadosFornecedores = await buscarFornecedores()
      setFornecedores(dadosFornecedores)
    }
    fetchFornecedores()
  }, [])

  console.log("fornecedores: ", fornecedores)

  //trazendo lista de todos os Produtos
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function fetchProdutos() {
      const dadosProdutos = await buscarProduto()
      setProdutos(dadosProdutos)
    }
    fetchProdutos()
  }, [])

  console.log("produtos: ", produtos)


  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(false)
  }

  const handleRedirect = () => {
    navigate("/admin/pedidos")
  }

  // HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const dados = {
        id_produto,
        id_fornecedor,
        nome_motorista,
        placa_veiculo,
        documentos_anexos

      }

      const pedido = await criarPedido(dados)
      setErrorMessage(pedido.message)
      setOpenModalFornecedorCadastrado(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalFornecedorCadastrado(true)
      alert(errorMessage)
    }  
  }

  // NAVIGATE DO REACT ROUTER DOM
  const navigate = useNavigate();

  // STATES DO FORMULÁRIO
  const [CNPJ, setCNPJ] = useState("")
  const [IE, setIE] = useState("")
  const [razao_social, setRazaoSocial] = useState("")
  const [nome_fornecedor, setNomeFornecedor] = useState("")
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [nome_motorista, setNomeMotorista] = useState("")
  const [placa_veiculo, setPlacaVeiculo] = useState("")
  const [documentos_anexos, setDocumentosAnexos] = useState("")
  const [status_fornecedor, setStatusFornecedor] = useState("")

  // MENSAGEM DE ERRO
  const [errorMessage, setErrorMessage] = useState(null)

  const [openModalFornecedorCadastrado, setOpenModalFornecedorCadastrado] = useState(false)

  return (
    <div>
      <div className={styles.external}>
        <div>
          <h1 className={styles.title}>CADASTRO PEDIDOS</h1>
        </div>
        <form className={styles.formCadastroFornecedor} onSubmit={handleSubmit}>
          <div className={styles.leftSide}>
            <div className={styles.upperLeft}>
              <legend className={styles.subTitle}>Dados do Fornecedor</legend>
              <hr />
              {/*               <div>
                <label>
                  ID:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  Data:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div> */}
              <div>
                <label>
                  CNPJ:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={CNPJ}
                    onChange={(event) => setCNPJ(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {fornecedores.map((fornecedor) => (
                      <option key={fornecedor.id} value={fornecedor.CNPJ}>
                        ({fornecedor.CNPJ})
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  IE:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={IE}
                    onChange={(event) => setIE(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {fornecedores.map((fornecedor) => (
                      <option key={fornecedor.id} value={fornecedor.IE}>
                        ({fornecedor.IE})
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Razão Social:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={razao_social}
                    onChange={(event) => setRazaoSocial(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {fornecedores.map((fornecedor) => (
                      <option key={fornecedor.id} value={fornecedor.razao_social}>
                        ({fornecedor.razao_social})
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Nome Fantasia:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={nome_fornecedor}
                    onChange={(event) => setNomeFornecedor(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {fornecedores.map((fornecedor) => (
                      <option key={fornecedor.id} value={fornecedor.nome_fornecedor}>
                        ({fornecedor.nome_fornecedor})
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.upperRight}>
              <legend className={styles.subTitle}>Dados do Produto</legend>
              <hr />
              <div>
                <label>
                  Nome do Produto:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {produtos.map((produto) => (
                      <option key={produto.id} value={produto.nome_produto}>
                        ({produto.nome_produto})
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Tipo:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={estado}
                    onChange={(event) => setEstado(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {produtos.map((produto) => (
                      <option key={produto.id} value={produto.tipo}>
                        ({produto.tipo})
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Descrição:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={cidade}
                    onChange={(event) => setCidade(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {produtos.map((produto) => (
                      <option key={produto.id} value={produto.descricao}>
                        ({produto.descricao})
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <input
                  type="button"
                  className={styles.botaoConfirmarModal}
                  onClick={handleSubmit}
                  value="CADASTRAR"
                />
              </div>

              {errorMessage === "Fornecedor cadastrado com sucesso!" ? (
                /* MODAL CADASTRO COM SUCESSO */
                <Modal isOpen={openModalFornecedorCadastrado} onClick={handleRedirect}>
                  <div className={styles.conteudoModal}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                    <p>{errorMessage}</p>
                    <Link to="/admin/fornecedores">
                      <input className={styles.botaoConfirmarModal} type="button" value="OK" />
                    </Link>
                  </div>
                </Modal>
              ) : (
                /* MODAL CADASTRO COM INPUT FALTANDO */
                <Modal isOpen={openModalFornecedorCadastrado} onClick={handleCloseModalFornecedorCadastrado}>
                  <div className={styles.conteudoModal}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                    <p>{errorMessage}</p>
                    <input
                      className={styles.botaoConfirmarModal}
                      type="button"
                      value="OK"
                      onClick={handleCloseModalFornecedorCadastrado}
                    />
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
