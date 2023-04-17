import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import styles from "./LinhaPedido.module.css"

export const LinhaPedido = (props) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableData}>{props.numeroPedido}</td>
      <td className={styles.tableData}>{props.descricao}</td>
      <td className={styles.tableData}>{props.situacao}</td>
      <td className={styles.tableData}>{props.funcionario}</td>
      <td className={styles.tableData}>
        <button>
          Analisar <FontAwesomeIcon icon={faClipboardList} />
        </button>
      </td>
    </tr>
  );
};
