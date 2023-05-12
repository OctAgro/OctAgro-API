import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import InputMask from "react-input-mask"

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
      console.log('Resposta do Fornecedor' , fornecedor)
      setErrorMessage(fornecedor.message)
      setOpenModalFornecedorCadastrado(true)
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalFornecedorCadastrado(true)
      alert(errorMessage)
    }
  }

  // NAVIGATE DO REACT ROUTER DOM
  const navigate = useNavigate()

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
  const [status_fornecedor, setStatusFornecedor] = useState(1)

  // MENSAGEM DE ERRO
  const [errorMessage, setErrorMessage] = useState(null)

  // STATE DO MODAL
  const [openModalFornecedorCadastrado, setOpenModalFornecedorCadastrado] = useState(false)

  const handleCepChange = (e) => {
    const enteredCep = e.target.value
    setCep(enteredCep)
    const cepFormatado = enteredCep.replace(/\D/g, "")
    console.log(cepFormatado)
    if (cepFormatado.length === 8) {
      searchCep(cepFormatado)
    }
  }

  const searchCep = async (cepFormatado) => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cepFormatado}`)
      console.log(response.data)
      setBairro(response.data.neighborhood)
      setEstado(response.data.state)
      setCidade(response.data.city)
      setEndereco(response.data.street)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id={styles["container"]}>
          <div id={styles["titulo"]}>CADASTRO FORNECEDOR</div>
          <div id={styles["ladoEsquerdo"]}>
            <div id={styles["subtitle"]}>
              Dados de Identificação
              <hr />
            </div>
            <div id={styles["cnpj"]}>CNPJ:</div>
            <div id={styles["inputId"]}>
              <InputMask
                type="text"
                value={CNPJ}
                onChange={(event) => setCNPJ(event.target.value)}
                mask="99.999.999/9999-99"
                maskChar=" "
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["ie"]}>IE:</div>
            <div id={styles["inputIe"]}>
              <InputMask
                type="text"
                value={IE}
                onChange={(event) => setIE(event.target.value)}
                mask="99.999.999-9"
                maskChar="_"
                className={styles.fullSizeInput}
              />
            </div>
            <div className={styles.dadosEmpresa}>Razão Social:</div>
            <div className={styles.dadosEmpresa}>
              <InputMask
                type="text"
                value={razao_social}
                onChange={(event) => setRazaoSocial(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div className={styles.dadosEmpresa}>Nome Fantasia:</div>
            <div className={styles.dadosEmpresa}>
              <InputMask
                type="text"
                value={nome_fornecedor}
                onChange={(event) => setNomeFornecedor(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div className={styles.dadosEmpresa}>Responsável:</div>
            <div className={styles.dadosEmpresa}>
              <InputMask
                type="text"
                value={responsavel}
                onChange={(event) => setResponsavel(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>

            <div id={styles["subtitle"]}>
              Dados de Contato
              <hr />
            </div>
            <div id={styles["tel"]}>Tel.:</div>
            <div>
              <InputMask
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                mask="(99) 9999-9999"
                maskChar="_"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["cel"]}>Cel.:</div>
            <div>
              <InputMask
                value={tel_celular}
                onChange={(event) => setTelCelular(event.target.value)}
                mask="(99) 99999-9999"
                maskChar="_"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div className={styles.email}>E-mail 1:</div>
            <div className={styles.inputEmail}>
              <InputMask
                type="email"
                value={e_mail1}
                onChange={(event) => setEmail1(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div>E-mail 2:</div>
            <div className={styles.inputEmail}>
              <InputMask
                type="email"
                value={e_mail2}
                onChange={(event) => setEmail2(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
          </div>

          <div id={styles["ladoDireito"]}>
            <div id={styles["subtitle"]}>
              Dados de Endereço
              <hr />
            </div>
            <div id={styles["cep"]}>CEP:</div>
            <div id={styles["inputCep"]}>
              <InputMask
                type="text"
                value={cep}
                onChange={handleCepChange}
                mask="99999-999"
                maskChar="_"
                className={styles.fullSizeInput}
              />
            </div>

            <div id={styles["estado"]}>Estado:</div>
            <div id={styles["inputEstado"]}>
              <InputMask
                type="text"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                maxLength="2"
                className={styles.fullSizeInput}
              />
            </div>
            <div>Cidade:</div>
            <div className={styles.inputEndereco}>
              <InputMask
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div>Bairro:</div>
            <div className={styles.inputEndereco}>
              <InputMask
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div>Endereço:</div>
            <div className={styles.inputEndereco}>
              <InputMask
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>

            <div id={styles["numero"]}>Núm.:</div>
            <div id={styles["inputNum"]}>
              <InputMask
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
                maxLength="255"
                type="text"
                className={styles.fullSizeInput}
              />
            </div>

            <div id={styles["complemento"]}>Comp.:</div>
            <div id={styles["inputComp"]}>
              <InputMask
                value={complemento}
                onChange={(event) => setComplemento(event.target.value)}
                type="text"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["subtitle"]}>
              Outros
              <hr />
            </div>
            <div className={styles.dadosEmpresa}>Observações:</div>
            <div className={styles.dadosEmpresa}>
              <textarea
                className={styles.fullSizeInput}
                type="text"
                value={comentario}
                onChange={(event) => setComentario(event.target.value)}
                maxLength="255"
                cols="50"
                rows="10"
              ></textarea>
            </div>

            <InputMask
              type="button"
              className={styles.botaoConfirmarModal}
              onClick={handleSubmit}
              value="CADASTRAR"
            />
          </div>
        </div>
      </form>

      {errorMessage === "Fornecedor cadastrado com sucesso!" ? (
        /* MODAL CADASTRO COM SUCESSO */
        <Modal isOpen={openModalFornecedorCadastrado} onClick={handleRedirect}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <Link to="/admin/fornecedores">
              <InputMask className={styles.botaoConfirmarModal} type="button" value="OK" />
            </Link>
          </div>
        </Modal>
      ) : (
        /* MODAL CADASTRO COM InputMask FALTANDO */
        <Modal isOpen={openModalFornecedorCadastrado} onClick={handleCloseModalFornecedorCadastrado}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <InputMask
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
