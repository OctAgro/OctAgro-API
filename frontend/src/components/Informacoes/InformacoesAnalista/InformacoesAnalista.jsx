import React from "react";

import styles from "./InformacoesAnalista.module.css";

export const InformacoesAnalista = ({
  nomeAnalista,
  numeroPedido,
  descricaoPedido,
  regrasAceitacao,
  regrasAceitacaoInput,
  mercadoria,
  mercadoriaInput,
  comentarios,
}) => {
  return (
    <div>
      <div>
        <h1>Informações do Analista</h1>
        <h2>{nomeAnalista}</h2>
      </div>

      <div>
        <div>
          <h2>
            {numeroPedido} - {descricaoPedido}
          </h2>
        </div>

        <div>
          <h1>Regras de Aceitação</h1>
          <hr />
        </div>

        <div>
          <h1>Mercadoria</h1>
          <hr />
        </div>
        
      </div>

      <div>
        <h1>Comentários:</h1>
      </div>
    </div>
  );
};
