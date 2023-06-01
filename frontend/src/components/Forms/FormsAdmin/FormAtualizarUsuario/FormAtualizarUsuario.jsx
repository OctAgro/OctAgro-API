import React from "react"
import { useState, useEffect, useContext } from "react"
import InputMask from "react-input-mask"
import { Link, useParams, useNavigate } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Modal } from "../../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImagePortrait, faCircleCheck } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAtualizarUsuario.module.css"

//IMPORTANDO HOOKS
import { procurarUsuarioPorId } from "../../../../hooks/procurarUsuarios"
import { atualizarUsuario } from "../../../../hooks/atualizarUsuario"

export const FormAtualizarUsuario = () => {
  //procurando o Usuario pelo Id
  const { id } = useParams()
  const usuarioId = parseInt(id)

  const [usuarios, setUsuarios] = useState([])

  //buscando fornecedores por id
  useEffect(() => {
    async function fetchUsuarios() {
      const dadosUsuarios = await procurarUsuarioPorId(usuarioId)
      setUsuarios(dadosUsuarios)

      setMatricula(dadosUsuarios.id_usuario)
      setDataAdmissao(dadosUsuarios.data_admissao)
      /* setSenha(dadosUsuarios.IE) ACHO QUE SENHA NÃO FAZ SENTIDO */
      setFuncao(dadosUsuarios.funcao)
      setNome(dadosUsuarios.nome)
      setFoto(dadosUsuarios.foto)
      setCpf(dadosUsuarios.CPF)
      setRg(dadosUsuarios.RG)
      setDataNascimento(dadosUsuarios.dataNascimento)
      setGenero(dadosUsuarios.genero)
      setTelefone(dadosUsuarios.telefone)
      setCelular(dadosUsuarios.celular)
      setEmail(dadosUsuarios.email)
      setCep(dadosUsuarios.cep)
      setEndereco(dadosUsuarios.endereco)
      setNumero(dadosUsuarios.numero)
      setComplemento(dadosUsuarios.complemento)
      setBairro(dadosUsuarios.bairro)
      setCidade(dadosUsuarios.cidade)
      setEstado(dadosUsuarios.estado)
    }
    fetchUsuarios()
  }, [])

  console.log("usuarios aqui: ", usuarios)

  const [matricula, setMatricula] = useState("")
  const [data_admissao, setDataAdmissao] = useState("")
  const [senha, setSenha] = useState("")
  const [funcao, setFuncao] = useState("")
  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")
  const [CPF, setCpf] = useState("")
  const [RG, setRg] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [genero, setGenero] = useState("")
  const [telefone, setTelefone] = useState("")
  const [celular, setCelular] = useState("")
  const [email, setEmail] = useState("")
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")

  const [errorMessage, setErrorMessage] = useState("")
  const [openModalUsuarioAtualizado, setOpenModalUsuarioAtualizado] = useState(false)

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

  // HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = {
        data_admissao,
        senha,
        funcao,
        nome,
        foto,
        CPF,
        RG,
        dataNascimento,
        genero,
        telefone,
        celular,
        email,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
      }
      const usuario = await atualizarUsuario(usuarioId, data)
      console.log("Resposta do Usuario", usuario)
      setErrorMessage(usuario.data.message)
      setOpenModalUsuarioAtualizado(true)
    } catch (erro) {
      setErrorMessage(erro)
      setOpenModalUsuarioAtualizado(true)
    }
  }

  const handleIconClick = () => {
    const fileInput = document.getElementById("fileInput")
    fileInput.click()
  }

  const handleCloseModalUsuarioAtualizado = () => {
    setOpenModalUsuarioAtualizado(false)
  }

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/admin/usuarios")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id={styles["container"]}>
          <div id={styles["header"]}>
            <div id={styles["imgUser"]}>
              <FontAwesomeIcon icon={faImagePortrait} />
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => setFoto(event.target.value)}
              />
            </div>
            <div id={styles["cadUser"]}>ATUALIZAR USUÁRIO</div>
            <div id={styles["admisao"]}>DATA DE ADMISSÃO:</div>
            <div id={styles["item-4"]}>
              <InputMask
                type="date"
                value={data_admissao}
                onChange={(event) => setDataAdmissao(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>

            <div id={styles["item-5"]}>MATRÍCULA:</div>
            <div id={styles["item-6"]}>
              <InputMask
                type="text"
                value={matricula}
                onChange={(event) => setNome(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["item-7"]}>FUNÇÃO:</div>
            <div id={styles["item-8"]}>
              <select
                className={styles.fullSizeInput}
                name="funcaoUsuario"
                id="funcaoUsuario"
                value={funcao}
                onChange={(event) => setFuncao(event.target.value)}
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Administrador">Administrador</option>
                <option value="Analista">Analista</option>
                <option value="Aprovador">Aprovador</option>
                <option value="Recebedor">Recebedor</option>
              </select>
            </div>
            {/* campo senha ficou deslocado, teria que trocar todos os numeros abaixo dele, entao coloquei 100 */}
            <div id={styles["item-9"]}>SENHA:</div>
            <div id={styles["item-10"]}>
              <InputMask
                type="text"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                maxLength="64"
                className={styles.fullSizeInput}
              />
            </div>
          </div>
          <div id={styles["body"]}>
            <div id={styles["nome"]}>NOME:</div>
            <div id={styles["input-nome"]}>
              <InputMask
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["cpf"]}>CPF</div>
            <div id={styles["input-cpf"]}>
              <InputMask
                type="text"
                value={CPF}
                mask="999.999.999-99"
                maskChar="_"
                onChange={(event) => setCpf(event.target.value)}
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["rg"]}>RG:</div>
            <div id={styles["input-rg"]}>
              <InputMask
                type="text"
                value={RG}
                mask="99.999.999-9"
                maskChar="_"
                onChange={(event) => setRg(event.target.value)}
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["dnasc"]}>D. Nasc.:</div>
            <div id={styles["input-dnasc"]}>
              <InputMask
                type="date"
                value={dataNascimento}
                onChange={(event) => setDataNascimento(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["genero"]}>GÊNERO:</div>
            <div id={styles["input-genero"]}>
              <select
                className={styles.fullSizeInput}
                name="generoUsuario"
                id="generoUsuario"
                value={genero}
                onChange={(event) => setGenero(event.target.value)}
              >
                <option value="Selecione" disabled selected>
                  Selecione
                </option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div id={styles["tel"]}>TEL.:</div>
            <div id={styles["input-tel"]}>
              <InputMask
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                mask="(99) 9999-9999"
                maskChar="_"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["cel"]}>CEL.:</div>
            <div id={styles["input-cel"]}>
              <InputMask
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
                mask="(99) 99999-9999"
                maskChar="_"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["email"]}>E-mail:</div>
            <div id={styles["input-email"]}>
              <InputMask
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.fullSizeInput}
                maxLength="255"
                type="email"
              />
            </div>
            <div id={styles["cep"]}>CEP:</div>
            <div id={styles["input-cep"]}>
              <InputMask
                type="text"
                value={cep}
                onChange={handleCepChange}
                mask="99999-999"
                maskChar="_"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["endereco"]}>ENDEREÇO:</div>
            <div id={styles["input-endereco"]}>
              <InputMask
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["num"]}>NUM.:</div>
            <div id={styles["input-num"]}>
              <InputMask
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
                maxLength="255"
                type="text"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["comp"]}>COMP.:</div>
            <div id={styles["input-comp"]}>
              <InputMask
                value={complemento}
                onChange={(event) => setComplemento(event.target.value)}
                type="text"
                className={styles.fullSizeInput}
              />
            </div>
            <div id={styles["bairro"]}>BAIRRO.:</div>
            <div id={styles["input-bairro"]}>
              <InputMask
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["cidade"]}>CIDADE:</div>
            <div id={styles["input-cidade"]}>
              <InputMask
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
                maxLength="255"
                className={styles.fullSizeInput}
                type="text"
              />
            </div>
            <div id={styles["estado"]}>ESTADO:</div>
            <div id={styles["input-estado"]}>
              <InputMask
                type="text"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                maxLength="2"
                className={styles.fullSizeInput}
              />
            </div>

            <div id={styles["botaoCadastrar"]}>
              <input
                type="button"
                className={styles.botaoConfirmarModal}
                onClick={handleSubmit}
                value="ATUALIZAR"
              />
            </div>
          </div>
        </div>
      </form>
      {errorMessage === "Usuário atualizado com sucesso!" ? (
        /* MODAL CADASTRO COM SUCESSO */
        <Modal isOpen={openModalUsuarioAtualizado} onClick={handleRedirect}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <Link to="/admin/usuarios">
              <input className={styles.botaoConfirmarModal} type="button" value="OK" />
            </Link>
          </div>
        </Modal>
      ) : (
        /* MODAL CADASTRO COM INPUT FALTANDO */
        <Modal isOpen={openModalUsuarioAtualizado} onClick={handleCloseModalUsuarioAtualizado}>
          <div className={styles.conteudoModal}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
            <p>{errorMessage}</p>
            <input
              className={styles.botaoConfirmarModal}
              type="button"
              value="OK"
              onClick={handleCloseModalUsuarioAtualizado}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
