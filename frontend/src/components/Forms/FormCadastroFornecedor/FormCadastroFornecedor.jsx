import React, { useState } from "react"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

import styles from "./FormCadastroFornecedor.module.css"

export const FormCadastroFornecedor = () => {
  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(false)
  }

  const handleOpenModalFornecedorCadastrado = () => {
    setOpenModalFornecedorCadastrado(true)
  }

  const [openModalFornecedorCadastrado, setOpenModalFornecedorCadastrado] = useState(false)

  return (
    <div>
      <div className={styles.external}>
        <div>
          <h1 className={styles.title}>CADASTRO FORNECEDOR</h1>
        </div>
        <form className={styles.formCadastroFornecedor}>
          <div className={styles.leftSide}>
            <div className={styles.upperLeft}>
              <legend className={styles.subTitle}>Dados de identificação</legend>
              <hr />
              <div>
                <label>
                  ID:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  Data:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  CNPJ:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  IE:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Razão Social:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Nome Fantasia:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Responsável:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
            </div>
            <div className={styles.downLeft}>
              <legend className={styles.subTitle}>Dados de Contato</legend>
              <hr />
              <div>
                <label>
                  Tel.:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  Cel.:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  E-mail 1:
                  <input type="email" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  E-mail 2:
                  <input type="email" className={styles.inputCadastroFornecedor} />
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
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  Estado:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Cidade:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Bairro:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Endereço:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <label>
                  Num.:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
                <label>
                  Comp.:
                  <input type="text" className={styles.inputCadastroFornecedor} />
                </label>
              </div>
            </div>
            <div className={styles.downRight}>
              <legend className={styles.subTitle}>Outros</legend>
              <hr />
              <div>
                <label>
                  Observações:
                  <textarea className={styles.inputCadastroFornecedor} />
                </label>
              </div>
              <div>
                <input
                  type="button"
                  className={styles.botaoConfirmarModal}
                  onClick={handleOpenModalFornecedorCadastrado}
                  value="CADASTRAR"
                />
              </div>

              {/* MODAL CADASTRAR */}
              <Modal isOpen={openModalFornecedorCadastrado} onClick={handleCloseModalFornecedorCadastrado}>
                <div className={styles.conteudoModal}>
                  <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
                  <p>Fornecedor cadastrado com sucesso!</p>
                  <input
                    className={styles.botaoConfirmarModal}
                    type="button"
                    value="OK"
                    onClick={handleCloseModalFornecedorCadastrado}
                  />
                </div>
              </Modal>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
