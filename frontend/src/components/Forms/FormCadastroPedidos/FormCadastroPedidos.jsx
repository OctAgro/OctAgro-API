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
      const data = {
        idProduto,
        idFornecedor,
        nome_motorista,
        placa_veiculo
      }

      const pedido = await criarPedido(data)
      setErrorMessage(pedido.mensagem)
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
  const [idFornecedor, setIdFornecedor] = useState("")
  const [CNPJ, setCNPJ] = useState("")
  const [IE, setIE] = useState("")
  const [razao_social, setRazaoSocial] = useState("")
  const [nome_fornecedor, setNomeFornecedor] = useState("")
  const [idProduto, setIdProduto] = useState("")
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
<<<<<<< HEAD
      <form onSubmit={handleSubmit}>
        <div id={styles["container"]}>
          <div id={styles["titulo"]}>CADASTRO PEDIDOS</div>          
            <div id={styles["ladoEsquerdo"]}>
              <div id={styles["subtitle"]}>
                Dados do Fornecedor
                <hr />
              </div>
              <div id={styles["cnpj"]}>CNPJ:</div>
              <div id={styles["inputId"]}>
                <select
                  className={styles.fullSizeInput}
                  value={CNPJ}
                  onChange={(event) => setCNPJ(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="cnpj1">CNPJ 1</option>
                </select>
              </div>
              <div id={styles["ie"]}>IE:</div>
              <div id={styles["inputIe"]}>
                <select
                  className={styles.fullSizeInput}
                  value={IE}
                  onChange={(event) => setIE(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="ie1">IE 1</option>
                </select>
              </div>
              <div className={styles.dadosEmpresa}>Razão Social:</div>
              <div className={styles.dadosEmpresa}>
                <select
                  className={styles.fullSizeInput}
                  value={razao_social}
                  onChange={(event) => setRazaoSocial(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="rs1">Razão Social 1</option>
                </select>
              </div>
              <div className={styles.dadosEmpresa}>Nome Fantasia:</div>
              <div className={styles.dadosEmpresa}>
                <select
                  className={styles.fullSizeInput}
                  value={nome_fornecedor}
                  onChange={(event) => setNomeFornecedor(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="nf1">Nome Fantasia 1</option>
                </select>
              </div>
            </div>
            <div id={styles["ladoDireito"]}>
              <div id={styles["subtitle"]}>
                Dados do Produto
                <hr />
              </div>
              <div id={styles["produto"]}>Produto:</div>
              <div id={styles["selectProduto"]}>
                <select
                  className={styles.fullSizeInput}
                  value={cep}
                  onChange={(event) => setCep(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="produto1">Produto 1</option>
                </select>
              </div>
              <div id={styles["tipo"]}>Tipo</div>
              <div id={styles["selectTipo"]}>
                <select
                  className={styles.fullSizeInput}
                  value={estado}
                  onChange={(event) => setEstado(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="tipo1">Tipo 1</option>
                </select>
=======
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
                  Id Fornecedor:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={idFornecedor}
                    onChange={(event) => setIdFornecedor(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {fornecedores.map((fornecedor) => (
                      <option key={fornecedor.id_fornecedor} value={fornecedor.id_fornecedor}>
                        ({fornecedor.id_fornecedor})
                      </option>
                    ))}
                  </select>
                </label>
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
                  Id Produto:
                  <select
                    className={styles.inputCadastroFornecedor}
                    value={idProduto}
                    onChange={(event) => setIdProduto(event.target.value)}
                  >
                    <option value="">Selecione</option>
                    {produtos.map((produto) => (
                      <option key={produto.id_produto} value={produto.id_produto}>
                        ({produto.id_produto})
                      </option>
                    ))}
                  </select>
                </label>
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
                <label>
                  <h3>Nome do Caminhoneiro:</h3>
                  <div>
                    <input
                      className={styles.customSelect}
                      type="text"
                      name="textoNomeEntregador"
                      value={nome_motorista}
                      onChange={(event) => setNomeMotorista(event.target.value)}
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
                    value={placa_veiculo}
                    onChange={(event) => setPlacaVeiculo(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <input
                  type="button"
                  className={styles.botaoConfirmarModal}
                  onClick={handleSubmit}
                  value="CADASTRAR"
                />
>>>>>>> b6586746740de061e2b81663aa697b8f8fdfbc93
              </div>
              <div className={styles.dadosEmpresa}>Descrição:</div>
              <div className={styles.dadosEmpresa}>
                <select
                  className={styles.fullSizeInput}
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="descricao1">Descrição 1</option>
                </select>
              </div>
            </div>
          

          <input
            type="button"
            className={styles.botaoConfirmarModal}
            onClick={handleSubmit}
            value="CADASTRAR"
          />

        </div>
      </form>
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
  )
}
