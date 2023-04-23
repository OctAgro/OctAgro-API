import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import styles from "./TabelaMercadorias.module.css";

import { buscarRelatoriosAnalista } from '../../../hooks/buscarRelatorios'

export const TabelaMercadorias = () => {

  const [relatoriosAnalista, setRelatoriosAnalista] = useState([])
  useEffect(() => {
    async function fetchRelatoriosAnalista() {
      const dadosPedidos = await buscarRelatoriosAnalista()
      setRelatoriosAnalista(dadosPedidos)
    }
    fetchRelatoriosAnalista()
  }, [])

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
          {relatoriosAnalista.map((relatorio) => (
            <tr key={relatorio.id_relatorio_analista}>
              <td className={styles.tableData}>{relatorio.pedido.id_pedido}</td>
              <td className={styles.tableData}>{relatorio.pedido.produto}</td>
              <td className={styles.tableData}>{relatorio.pedido.unidade_medida}</td>
              <td className={styles.tableData}>
              <button className={styles.button}>
                <Link to={`/analista/mercadoria/${relatorio.numeroPedido}`}>
                  Analisar <FontAwesomeIcon icon={faClipboardList} />
                </Link>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
