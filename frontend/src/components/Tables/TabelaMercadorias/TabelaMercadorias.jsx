import React from "react";
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import styles from "./TabelaMercadorias.module.css";

export const TabelaMercadorias = (props) => {
  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Mercadorias Recebidas</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Nº Pedido</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>{props.numeroPedido}</td>
            <td className={styles.tableData}>{props.descricao}</td>
            <td className={styles.tableData}>{props.data}</td>
            <td className={styles.tableData}>
              <button className={styles.button}>
                <Link to={`/analista/mercadoria/${props.numeroPedido}`}>
                  Analisar <FontAwesomeIcon icon={faClipboardList} />
                </Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
