import React, { useContext } from "react"
import { Link } from "react-router-dom"
import sidebarOctagro from "../../../assets/sidebarOctagro.png"
import MolduraOctagonal from "../../../assets/MolduraOctagonal.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket, faUserGroup, faBuildingWheat, faWheatAwn, faFilePen, faClipboardList } from "@fortawesome/free-solid-svg-icons"


import styles from "./SidebarAdmin.module.css"

// importando contexto
import { UserContext } from "../../../context/usuarioContext"

export const SidebarAdmin = () => {
  const { usuario } = useContext(UserContext)

  return (
    <nav className={styles.navbar}>
      <Link to="/admin/home">
        <div className={styles.topSidebar}>
          <img className={styles.logo} src={sidebarOctagro} alt="Logo da OctAgro" />
        </div>
      </Link>
      <ul className={styles.topItems}>
        <Link to="/admin/usuarios" >
          <li className={styles.actionItems}>

            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserGroup} />
            </div>

            <div className={styles.relatorio}>

              Usuários

            </div>

          </li>
        </Link>
        <Link to="/admin/fornecedores">
          <li className={styles.actionItems}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faBuildingWheat} />
            </div>

            <div className={styles.relatorio}>

              Fornecedores

            </div>
          </li>
        </Link>
        <Link to="/admin/produtos" >
          <li className={styles.actionItems}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faWheatAwn} />
            </div>
            <div className={styles.relatorio}>

              Produtos

            </div>
          </li>
        </Link>
        <Link to="/admin/relatorios" >
          <li className={styles.actionItems}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFilePen} />
            </div>
            <div className={styles.relatorio}>

              Relatórios
            </div>

          </li>
        </Link>
        <Link to="/admin/pedidos">
          <li className={styles.actionItems}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div className={styles.relatorio}>

              Pedidos

            </div>

          </li>
        </Link>
      </ul>
      <div className={styles.botItems}>
        <ul className={styles.usuario}>
          <div className={styles.molduraFoto}>
            <img className={styles.molduraOctagonal} src={MolduraOctagonal} alt="Moldura Octagonal" />
            <img
              className={styles.fotoUsuario}
              src={usuario ? import.meta.env.BASE_URL + `src/assets/${usuario.foto}` : "Carregando"}
            />
          </div>
          <div className={styles.infoUsuario}>
            <h3 className={styles.nomeUsuario}>{usuario ? usuario.nome : "Carregando..."}</h3>
            <h4 className={styles.funcaoUsuario}>{usuario ? usuario.funcao : "Carregando..."}</h4>
          </div>
        </ul>
        <ul className={styles.sair}>
          <Link to="/">
            <li>
              <FontAwesomeIcon icon={faRightToBracket} />
              <a className={styles.sairTexto}>Sair</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
