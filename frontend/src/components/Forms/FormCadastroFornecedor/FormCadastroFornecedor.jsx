import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// IMPORTANDO ESTILOS
import styles from "./FormCadastroFornecedor.module.css"

// IMPORTANDO HOOK
import { criarFornecedor } from "../../../hooks/criarFornecedor"

export const FormCadastroFornecedor = () => {
  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(false)
  }

  const handleRedirect = () => {
    navigate("/admin/fornecedores")
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
          <h1 className={styles.title}>CADASTRO FORNECEDOR</h1>
        </div>
        <form className={styles.formCadastroFornecedor} onSubmit={handleSubmit}>
          <div className={styles.leftSide}>
            <div className={styles.upperLeft}>
              <legend className={styles.subTitle}>Dados de identificação</legend>
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
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={CNPJ}
                    onChange={(event) => setCNPJ(event.target.value)}
                    maxLength="14"
                  />
                </label>
                <label>
                  IE:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={IE}
                    onChange={(event) => setIE(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Razão Social:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={razao_social}
                    onChange={(event) => setRazaoSocial(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  Nome Fantasia:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={nome_fornecedor}
                    onChange={(event) => setNomeFornecedor(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  Responsável:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={responsavel}
                    onChange={(event) => setResponsavel(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
            </div>
            <div className={styles.downLeft}>
              <legend className={styles.subTitle}>Dados de Contato</legend>
              <hr />
              <div>
                <label>
                  Tel.:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                    maxLength="9"
                  />
                </label>
                <label>
                  Cel.:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={tel_celular}
                    onChange={(event) => setTelCelular(event.target.value)}
                    maxLength="10"
                  />
                </label>
              </div>
              <div>
                <label>
                  E-mail 1:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="email"
                    value={e_mail1}
                    onChange={(event) => setEmail1(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  E-mail 2:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="email"
                    value={e_mail2}
                    onChange={(event) => setEmail2(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.upperRight}>
              <legend className={styles.subTitle}>Dados de Endereço</legend>
              <hr />
              <div>
                <label>
                  CEP:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    maxLength="9"
                  />
                </label>
                <label>
                  Estado:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={estado}
                    onChange={(event) => setEstado(event.target.value)}
                    maxLength="2"
                  />
                </label>
              </div>
              <div>
                <label>
                  Cidade:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={cidade}
                    onChange={(event) => setCidade(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  Bairro:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={bairro}
                    onChange={(event) => setBairro(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  Endereço:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={endereco}
                    onChange={(event) => setEndereco(event.target.value)}
                    maxLength="255"
                  />
                </label>
              </div>
              <div>
                <label>
                  Num.:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={numero}
                    onChange={(event) => setNumero(event.target.value)}
                    maxLength="255"
                  />
                </label>
                <label>
                  Comp.:
                  <input
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={complemento}
                    onChange={(event) => setComplemento(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className={styles.downRight}>
              <legend className={styles.subTitle}>Outros</legend>
              <hr />
              <div>
                <label>
                  Observações:
                  <textarea
                    className={styles.inputCadastroFornecedor}
                    type="text"
                    value={comentario}
                    onChange={(event) => setComentario(event.target.value)}
                    maxLength="255"
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
