import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO ESTILOS
import styles from "./FormCadastroPedidos.module.css"

// IMPORTANDO HOOK
import { criarFornecedor } from "../../../hooks/criarFornecedor"

export const FormCadastroPedidos = () => {
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
        CNPJ,
        IE,
        razao_social,
        responsavel,
        telefone,
        tel_celular,
        e_mail1,
        e_mail2,
        cep,
        estado,
        cidade,
        bairro,
        endereco,
        numero,
        complemento,
        comentario,
        nome_fornecedor,
        nome_motorista,
        placa_veiculo,
        documentos_anexos,
        status_fornecedor,
      }

      const fornecedor = await criarFornecedor(dados)
      setErrorMessage(fornecedor.message)
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
  const [responsavel, setResponsavel] = useState("")
  const [telefone, setTelefone] = useState("")
  const [tel_celular, setTelCelular] = useState("")
  const [e_mail1, setEmail1] = useState("")
  const [e_mail2, setEmail2] = useState("")
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [comentario, setComentario] = useState("")
  const [nome_fornecedor, setNomeFornecedor] = useState("")
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
                    <option value="cnpj1">CNPJ 1</option>
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
                    <option value="ie1">IE 1</option>
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
                    <option value="rs1">Razão Social 1</option>
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
                    <option value="nf1">Nome Fantasia 1</option>
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
                    <option value="produto1">Produto 1</option>
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
                    <option value="tipo1">Tipo 1</option>
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
                    <option value="descricao1">Descrição 1</option>
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
