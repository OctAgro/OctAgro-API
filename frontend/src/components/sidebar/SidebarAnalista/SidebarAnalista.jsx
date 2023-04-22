import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/Logo.png"
import MolduraOctagonal from "../../../assets/MolduraOctagonal.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket, faListCheck } from "@fortawesome/free-solid-svg-icons"

import styles from "./SidebarAnalista.module.css"

// importando contexto
import { UserContext } from "../../../context/usuarioContext"

export const SidebarAnalista = () => {

    const { usuario } = useContext(UserContext)

    return (
        <nav className={styles.navbar}>
            <Link to="/analista/home">
                <div className={styles.topSidebar}>
                    <img className={styles.logo} src={Logo} alt="Logo da OctAgro" />
                    <h3 className={styles.textoLogo}>OCTAGRO</h3>
                </div>
            </Link>
            <ul className={styles.topItems}>
                <li className={styles.actionItems}>
                    <FontAwesomeIcon className={styles.icon} icon={faListCheck} />
                   
                    <Link to="/analista/mercadoria" className={styles.relatorio}>
                        Mercadorias <br /> Cadastradas
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
/*                             src={usuario.imagem} */
                            alt="Foto de perfil do usuário"
                        />
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
