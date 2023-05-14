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
