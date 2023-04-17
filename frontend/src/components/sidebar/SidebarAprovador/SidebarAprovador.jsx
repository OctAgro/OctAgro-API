import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/Logo.png"
import MolduraOctagonal from "../../../assets/MolduraOctagonal.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReceipt, faRightToBracket } from "@fortawesome/free-solid-svg-icons"

import styles from "./SidebarAprovador.module.css"

export const SidebarAprovador = (props) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/aprovador/home">
        <div className={styles.topSidebar}>
          <img className={styles.logo} src={Logo} alt="Logo da OctAgro" />
          <h3 className={styles.textoLogo}>OCTAGRO</h3>
        </div>
      </Link>
      <ul className={styles.topItems}>
        <li className={styles.actionItems}>
          <FontAwesomeIcon className={styles.icon} icon={faReceipt} />

          <Link to="/aprovador/relatorio" className={styles.relatorio}>
            Relatórios <br /> pendentes
          </Link>
        </li>
      </ul>
      <div className={styles.botItems}>
        <ul className={styles.usuario}>
          <div className={styles.molduraFoto}>
            <img
              className={styles.molduraOctagonal}
              src={MolduraOctagonal}
              alt="Moldura Octagonal"
            />
            <img
              className={styles.fotoUsuario}
              src={props.imagem}
              alt="Foto de perfil do usuário"
            />
          </div>
          <div className={styles.infoUsuario}>
            <h3 className={styles.nomeUsuario}>{props.nome}</h3>
            <h4 className={styles.funcaoUsuario}>{props.funcao}</h4>
          </div>
        </ul>
        <ul className={styles.sair}>
          <li>
            <FontAwesomeIcon icon={faRightToBracket} />
            <a className={styles.sairTexto} href="/">
              Sair
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
