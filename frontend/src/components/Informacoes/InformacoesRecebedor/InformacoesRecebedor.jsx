import React from "react";

import styles from "./InformacoesRecebedor.module.css";

export const InformacoesRecebedor = ({
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
        <h1>Informações do Recebedor</h1>
        <h2>{nomeAnalista}</h2>
      </div>

      <div>
        <h2>
          {numeroPedido} - {descricaoPedido}
        </h2>
      </div>

      <div>
        <h1>Regras de Aceitação</h1>
        <hr />
        
      </div>
    </div>
  );
};
