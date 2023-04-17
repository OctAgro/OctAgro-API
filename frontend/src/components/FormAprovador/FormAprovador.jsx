import React from "react"

import styles from "./FormAprovador.module.css"

export const FormAprovador = () => {
  return (
    <div>
      <label htmlFor="formAprovador">
        Relatório do Pedido
        <form className={styles.teste} name="formAprovador">
          <fieldset>
          <legend>
            Documentação
          </legend>
          <label> Documentos (RC/NF):
          <button>
            Visualizar
          </button>
          </label>

          </fieldset>

          <label htmlFor="infRecebedor">Inf. do Recebedor</label>
          <label htmlFor="infAnalista">Inf. do Analista</label>
        </form>
      </label>
    </div>
  )
}
