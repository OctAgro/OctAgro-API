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
      <form onSubmit={handleSubmit}>
        <div id={styles["container"]}>
          <div id={styles["titulo"]}>CADASTRO PEDIDOS</div>          
            <div id={styles["ladoEsquerdo"]}>
              <div id={styles["subtitle"]}>
                Dados do Fornecedor
                <hr />
              </div>
              <div id={styles["idForrnecedor"]}>Id Fornecedor:</div>
              <div id={styles["selectIdFornecedor"]}>
              <select
                    className={styles.fullSizeInput}
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
                
              </div>
              <div id={styles["cnpj"]}>CNPJ:</div>
              <div id={styles["inputId"]}>
              <select
                    className={styles.fullSizeInput}
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
                
              </div>
              <div id={styles["ie"]}>IE:</div>
              <div id={styles["inputIe"]}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              <div className={styles.dadosEmpresa}>Razão Social:</div>
              <div className={styles.dadosEmpresa}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              <div className={styles.dadosEmpresa}>Nome Fantasia:</div>
              <div className={styles.dadosEmpresa}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
            </div>
            <div id={styles["ladoDireito"]}>
              <div id={styles["subtitle"]}>
                Dados do Produto
                <hr />
              </div>
              <div id={styles["idProd"]}>Id Produto:</div>
              <div id={styles["selectidProd"]}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              <div id={styles["produto"]}>Produto:</div>
              <div id={styles["selectProduto"]}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              
              <div id={styles["tipo"]}>Tipo</div>
              <div id={styles["selectTipo"]}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              <div className={styles.dadosEmpresa}>Descrição:</div>
              <div className={styles.dadosEmpresa}>
              <select
                    className={styles.fullSizeInput}
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
              </div>
              <div className={styles.dadosEmpresa}>Nome do Caminhoneiro:</div>
              <div className={styles.dadosEmpresa}>
              <input
                      className={styles.fullSizeInput}
                      type="text"
                      name="textoNomeEntregador"
                      value={nome_motorista}
                      onChange={(event) => setNomeMotorista(event.target.value)}
                    />
              </div>
              <div id={styles["caminhao"]}>Placa do Caminhão:</div>
              <div id={styles["inputCaminhao"]}>
              <input
                    className={styles.fullSizeInput}
                    type="text"
                    name="textoPlacaVeiculo"
                    value={placa_veiculo}
                    onChange={(event) => setPlacaVeiculo(event.target.value)}
                  />
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
