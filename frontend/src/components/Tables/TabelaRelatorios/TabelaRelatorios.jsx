import React from "react";
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import styles from "./TabelaRelatorios.module.css";

export const TabelaRelatorios = (props) => {
  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Relatórios Pendentes</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Nº Pedido</th>
            <th>Descrição</th>
            <th>Situação</th>
            <th>Funcionário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>{props.numeroPedido}</td>
            <td className={styles.tableData}>{props.descricao}</td>
            <td className={styles.tableData}>{props.situacao}</td>
            <td className={styles.tableData}>{props.funcionario}</td>
            <td className={styles.tableData}>
              <button className={styles.button}>
                <Link to={`/aprovador/relatorio/${props.numeroPedido}`}>
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
