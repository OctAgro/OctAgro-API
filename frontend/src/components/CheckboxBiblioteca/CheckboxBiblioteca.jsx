import React from "react"
import { useForm } from "react-hook-form"

import styles from "../CheckboxBiblioteca/CheckboxBiblioteca.module.css"

export default function CheckboxForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Documentação do produto:</label>
        <div>
          <input
            className={styles.aprovar}
            type="checkbox"
            id="checkboxDocumentacaoProdutoAprovado"
            {...register("checkboxDocumentacaoProdutoAprovado")}
          />
          <label htmlFor="checkboxDocumentacaoProdutoAprovado">Aprovado</label>
        </div>
        <div>
          <input
            className={styles.recusar}
            type="checkbox"
            id="checkboxDocumentacaoProdutoRecusado"
            {...register("checkboxDocumentacaoProdutoRecusado")}
          />
          <label htmlFor="checkboxDocumentacaoProdutoRecusado">Recusado</label>
        </div>
      </div>
      <div>
        <label>Informações do analista:</label>
        <div>
          <input
            className={styles.aprovar}
            type="checkbox"
            id="checkboxInfoAnalistaAprovado"
            {...register("checkboxInfoAnalistaAprovado")}
          />
          <label htmlFor="checkboxInfoAnalistaAprovado">Aprovado</label>
        </div>
        <div>
          <input
            className={styles.recusar}
            type="checkbox"
            id="checkboxInfoAnalistaRecusado"
            {...register("checkboxInfoAnalistaRecusado")}
          />
          <label htmlFor="checkboxInfoAnalistaRecusado">Recusado</label>
        </div>
      </div>
      <div>
        <label>Informações do recebedor:</label>
        <div>
          <input
            className={styles.aprovar}
            type="checkbox"
            id="checkboxInfoRecebedorAprovado"
            {...register("checkboxInfoRecebedorAprovado")}
          />
          <label htmlFor="checkboxInfoRecebedorAprovado">Aprovado</label>
        </div>
        <div>
          <input
            className={styles.recusar}
            type="checkbox"
            id="checkboxInfoRecebedorRecusado"
            {...register("checkboxInfoRecebedorRecusado")}
          />
          <label htmlFor="checkboxInfoRecebedorRecusado">Recusado</label>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}
