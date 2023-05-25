import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"

// Importando o Provider
import { UsuariosCadastradosProvider } from "../../../context/UsuariosCadastradosContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { Modal } from "../../../components/Modal/Modal"
import { HeaderUsuarios } from "../../../components/header/HeaderAdmin/HeaderUsuarios/HeaderUsuarios"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faMagnifyingGlass, faTrash, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./UsuariosAdmin.module.css"

//Importando Hooks
import { buscarUsuarios } from "../../../hooks/procurarUsuarios"
import { excluirUsuario } from "../../../hooks/excluirUsuario"

export const UsuariosAdmin = () => {
  //importando todos os Usuarios
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    async function fetchUsuarios() {
      const dadosUsuarios = await buscarUsuarios()
      setUsuarios(dadosUsuarios)
    }
    fetchUsuarios()
  }, [])

  console.log("usuarios: ", usuarios)

  const [usuarioExcluir, setUsuarioExcluir] = useState(null)

  const handleExclusao = async () => {
    try {
      const exclusao = await excluirUsuario(usuarioExcluir)
      setErrorMessage(exclusao.data.message)
      setOpenModalProdutoExcluir(true)
      window.location.reload()
    } catch (erro) {
      setErrorMessage(erro.response.data.message)
      setOpenModalProdutoExcluir(true)
      alert(erro.response.data.message)
    }
  }

  // HANDLES DO MODAL DE EXCLUIR WARNING
  const handleCloseModalFornecedorExcluirWarning = () => {
    setOpenModalFornecedorExcluirWarning(false)
  }

  const handleOpenModalFornecedorExcluirWarning = () => {
    setOpenModalFornecedorExcluirWarning(true)
  }

  function handleCloseAndOpenModals() {
    handleCloseModalFornecedorExcluirWarning(false)
    handleOpenModalFornecedorExcluir(false)
    handleExclusao()
  }

  // HANDLES DO MODAL DE EXCLUIR
  const handleCloseModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(false)
    window.location.reload()
  }

  const handleOpenModalFornecedorExcluir = () => {
    setOpenModalFornecedorExcluir(true)
  }

  const [errorMessage, setErrorMessage] = useState("")

  const [fornecedorExcluir, setFornecedorExcluir] = useState(null)

  /* const [openModalFornecedorAtualizado, setOpenModalFornecedorAtualizado] = useState(false) */
  const [openModalFornecedorExcluirWarning, setOpenModalFornecedorExcluirWarning] = useState(false)
  const [openModalFornecedorExcluir, setOpenModalFornecedorExcluir] = useState(false)

  return (
    <UsuariosCadastradosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAdmin />
        </div>
        <div id={styles["header"]}>
          <HeaderUsuarios />
        </div>
        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/home" linkCadastrar="/admin/usuarios/cadastrousuarios">
            <FontAwesomeIcon icon={faUserPlus} title="Cadastrar novo usuário!" />
          </BarraAdmin>
        </div>

        <div>
          {/* MODAL EXCLUIR_WARNING */}
          <Modal
            isOpen={openModalFornecedorExcluirWarning}
            onClick={handleCloseModalFornecedorExcluirWarning}
          >
            <div className={styles.conteudoModal}>
              <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeModal} />
              <p> Tem certeza que deseja excluir o usuário?</p>
              <input
                className={styles.botaoRecusarModal}
                type="button"
                value="NÃO"
                onClick={handleCloseModalFornecedorExcluirWarning}
              />
              <input
                className={styles.botaoConfirmarModal}
                type="button"
                value="SIM"
                onClick={handleCloseAndOpenModals}
              />
            </div>
          </Modal>

          {/* MODAL EXCLUIR */}
          <Modal
            isOpen={openModalFornecedorExcluir}
            onClick={handleCloseModalFornecedorExcluir}
          >
            <div className={styles.conteudoModal}>
              <FontAwesomeIcon icon={faTrash} className={styles.iconeModal} />
              <p>{errorMessage}</p>
              <input
                className={styles.botaoConfirmarModal}
                type="button"
                value="OK"
                onClick={handleCloseModalFornecedorExcluir}
              />
            </div>
          </Modal>
        </div>

        <div id={styles["body"]}>
          <div className={styles.divBody}>
            <table className={styles.tableBackground}>
              <thead>
                <tr>
                  <th>Nº Matrícula</th>
                  <th>Nome</th>
                  <th>Função</th>
                  <th>Ações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios?.map((usuario) => (
                  <tr key={usuario.id_usuario}>
                    <td className={styles.tableData}>{usuario.id_usuario}</td>
                    <td className={styles.tableData}>{usuario.nome}</td>
                    <td className={styles.tableData}>{usuario.funcao}</td>
                    <td className={styles.tableData}>
                      {/* verificando com é o estado da aprovação para mostrar ação */}
                      <button className={styles.button}>
                        <Link to={`/admin/usuarios/atualizarusuarios/${usuario.id_usuario}`}>
                          Editar <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                      </button>
                    </td>
                    <td className={styles.tableData}>
                      <button
                        className={styles.button}
                        onClick={() => {
                          setUsuarioExcluir(usuario.id_usuario)
                          setOpenModalFornecedorExcluirWarning(true)
                        }}
                      >
                        Excluir <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </UsuariosCadastradosProvider>
  )
}
