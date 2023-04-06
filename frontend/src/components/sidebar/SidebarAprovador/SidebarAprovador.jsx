import React from "react"

import Logo from "../../../assets/Logo.png"
import UserImg from "../../../assets/placeholder-img-teste.png"
import MolduraOctagonal from "../../../assets/MolduraOctagonal.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReceipt, faRightToBracket } from "@fortawesome/free-solid-svg-icons"

import "./SidebarAprovador.css"

export const SidebarAprovador = () => {
  return (
    <nav>
      <a href="/aprovador/home">
        <div className="topSidebar">
            <img className="logo" src={Logo} alt="Logo da Octoplus" />
            <h3 className="textoLogo">OCTAGRO</h3>
        </div>
      </a>
      <ul className="top-items">
        <li>
          <FontAwesomeIcon className="icon" icon={faReceipt} />
          <a className="relatorio">
            Relatórios <br /> pendentes
          </a>
        </li>
      </ul>
      <div className="bot-items">
        <ul className="usuario">
          <div className="molduraFoto">
            <img
              className="molduraOctagonal"
              src={MolduraOctagonal}
              alt="Moldura Octagonal"
            />
            <img
              className="fotoUsuario"
              src={UserImg}
              alt="Foto de perfil do usuário"
            />
          </div>
          <div className="infoUsuario">
            <h3 className="nomeUsuario">Thiago Zani</h3>
            <h4 className="funcaoUsuario">Aprovador</h4>
          </div>
        </ul>
        <ul className="sair">
          <li>
            <FontAwesomeIcon icon={faRightToBracket} />
            <a href="/">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
