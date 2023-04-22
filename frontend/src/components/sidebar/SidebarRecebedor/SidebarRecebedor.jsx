import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/Logo.png"
import MolduraOctagonal from "../../../assets/MolduraOctagonal.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBox, faListCheck, faRightToBracket } from "@fortawesome/free-solid-svg-icons"

import styles from "./SidebarRecebedor.module.css"

// importando contexto
import { UserContext } from "../../../context/usuarioContext"

export const SidebarRecebedor = () => {
  const { usuario } = useContext(UserContext)

  return (
    <nav className={styles.navbar}>
      <Link to="/recebedor/home">
        <div className={styles.topSidebar}>
          <img className={styles.logo} src={Logo} alt="Logo da OctAgro" />
          <h3 className={styles.textoLogo}>OCTAGRO</h3>
        </div>
      </Link>
      <ul className={styles.topItems}>
        <li className={styles.actionItems}>
          <FontAwesomeIcon icon={faBox} className={styles.icon} />
          <Link to="/recebedor/entradamercadoria" className={styles.relatorio}>
            Recebimento de <br /> Mercadoria
          </Link>
        </li>
        <li className={styles.actionItems}>
          <FontAwesomeIcon icon={faListCheck} className={styles.icon} />
          <Link to="/recebedor/mercadoriascadastradas" className={styles.relatorio}>
            Mercadorias <br /> Cadastradas
          </Link>
        </li>
      </ul>
      <div className={styles.botItems}>
        <ul className={styles.usuario}>
          <div className={styles.molduraFoto}>
            <img className={styles.molduraOctagonal} src={MolduraOctagonal} alt="Moldura Octagonal" />
            <img className={styles.fotoUsuario} /* src={usuario.imagem} */ alt="Foto de perfil do usuário" />
          </div>
          <div className={styles.infoUsuario}>
            <h3 className={styles.nomeUsuario}>{usuario.nome}</h3>
            <h4 className={styles.funcaoUsuario}>{usuario.funcao}</h4>
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
