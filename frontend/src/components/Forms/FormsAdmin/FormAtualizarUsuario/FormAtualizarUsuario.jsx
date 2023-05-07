import React from "react"
import { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"

//IMPORTANDO COMPONENTES
import { Modal } from "../../../Modal/Modal"
import { Button } from "../../../Button/Button"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImagePortrait } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormAtualizarUsuario.module.css"

export const FormAtualizarUsuario = () => {

  return (
    <div>
      <form action="" method="post">

        <div id={styles["container"]}>
          <div id={styles["header"]}>
            <div id={styles["imgUser"]}>
              <FontAwesomeIcon icon={faImagePortrait} />
            </div>
            <div id={styles["cadUser"]}>
              CADASTRO USUÁRIO
            </div>
            <div id={styles["admisao"]}>
              DATA DE ADMISSÃO:</div>
            <div id={styles["item-4"]}>
              <input className={styles.fullSizeInput} type="date" />
            </div>
            <div id={styles["item-5"]}>MATRÍCULA:</div>
            <div id={styles["item-6"]}>
              <input className={styles.fullSizeInput} type="text" />
            </div>
            <div id={styles["item-7"]}>FUNÇÃO:</div>
            <div id={styles["item-8"]}>
              <select className={styles.fullSizeInput}
                name="funcaoUsuario"
                id="funcaoUsuario">
                <option value="" disabled selected>Selecione</option>
                <option value="Administrador" disabled selected>Administrador</option>
                <option value="Analista" disabled selected>Analista</option>
                <option value="Aprovador" disabled selected>Aprovador</option>
                <option value="Recebedor" disabled selected>Recebedor</option>
              </select>
            </div>
          </div >
          <div id={styles["body"]}>
            <div id={styles["nome"]}>NOME:</div>
            <div id={styles["input-nome"]}>
              <input className={styles.fullSizeInput} type="text" />
            </div>
            <div id={styles["cpf"]}>CPF</div>
            <div id={styles["input-cpf"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["rg"]}>RG:</div>
            <div id={styles["input-rg"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["dnasc"]}>D. Nasc.:</div>
            <div id={styles["input-dnasc"]}>
              <input className={styles.fullSizeInput} type="date" /></div>
            <div id={styles["genero"]}>GÊNERO:</div>
            <div id={styles["input-genero"]}>
              <select className={styles.fullSizeInput}
                name="generoUsuario"
                id="generoUsuario">
                <option value="Selecione" disabled selected>Selecione</option>
                <option value="Feminino" disabled selected>Feminino</option>
                <option value="Masculino" disabled selected>Masculino</option>
                <option value="Outro" disabled selected>Outro</option>

              </select>
            </div>
            <div id={styles["tel"]}>TEL.:</div>
            <div id={styles["input-tel"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["cel"]}>CEL.:</div>
            <div id={styles["input-cel"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["email"]}>E-mail:</div>
            <div id={styles["input-email"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["cep"]}>CEP:</div>
            <div id={styles["input-cep"]}><input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["endereco"]}>ENDEREÇO:</div>
            <div id={styles["input-endereco"]}>
              <input className={styles.fullSizeInput} type="email" />
            </div>
            <div id={styles["num"]}>NUM.:</div>
            <div id={styles["input-num"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["comp"]}>COMP.:</div>
            <div id={styles["input-comp"]}>
              <input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["bairro"]}>BAIRRO.:</div>
            <div id={styles["input-bairro"]}><input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["cidade"]}>CIDADE:</div>
            <div id={styles["input-cidade"]}><input className={styles.fullSizeInput} type="text" /></div>
            <div id={styles["estado"]}>ESTADO:</div>
            <div id={styles["input-estado"]}><input className={styles.fullSizeInput} type="text" /></div>

            <div id={styles["botaoCadastrar"]}>
              <input
                type="button"
                className={styles.botaoConfirmarModal}
                /* onClick={handleOpenModalFornecedorCadastrado} */
                value="ATUALIZAR"
              />
            </div>
          </div >
        </div>


      </form >

    </div >
  )
}
