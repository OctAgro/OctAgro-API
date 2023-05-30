import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

// Importando bibliotecas para lidar com Data e PDF
import { format } from "date-fns";

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencil, faCheckDouble, faPersonCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderRelatorios } from "../../../components/header/HeaderAdmin/HeaderRelatorios/HeaderRelatorios"

import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"

// Importando CSS
import styles from "./RelatoriosAdmin.module.css"

import { buscarRelatoriosAprovador } from "../../../hooks/buscarRelatorios"
import { criarRelatorioFinal } from "../../../hooks/criarRelatorioFinal";

export const RelatoriosAdmin = () => {

  const [relatoriosAprovador, setRelatoriosAprovador] = useState([])

  useEffect(() => {
    async function fetchRelatoriosAprovador() {
      const todosRelatoriosAprovador = await buscarRelatoriosAprovador()
      setRelatoriosAprovador(todosRelatoriosAprovador)
    }
    fetchRelatoriosAprovador()
  }, [])

  console.log('Relatorios: ', relatoriosAprovador)

  //barra de pesquisar
  const [relatoriosFiltrados, setRelatoriosFiltrados] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTermLower = searchTerm.toLowerCase();
    const filtro = relatoriosAprovador.filter((relatorio) => {
      const idPesquisa = relatoriosAprovador.pedido.id_pedido.toString().toLowerCase();
      const cnpjPesquisa = relatoriosAprovador.pedido.fornecedor.CNPJ.toString().toLowerCase();
      const razaoPesquisa = relatoriosAprovador.pedido.fornecedor.razao_social.toLowerCase();
      const produtosPesquisa = relatoriosAprovador.pedido.produto.nome_produto.toLowerCase();
      return (
        idPesquisa.includes(searchTermLower) ||
        cnpjPesquisa.includes(searchTermLower) ||
        razaoPesquisa.includes(searchTermLower) ||
        produtosPesquisa.includes(searchTermLower)
      );
    });
    console.log("dado filtrado: ", filtro)
    setRelatoriosFiltrados(filtro);
  };

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin /></div>
        <div id={styles["header"]}><HeaderRelatorios /></div>
        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/home" handleSearch={handleSearch} setSearchTerm={setSearchTerm}>
            <FontAwesomeIcon icon={faPersonCirclePlus} title="Cadastrar novo Pedido!" />
          </BarraAdmin>
        </div>

        {/* ---- BODY ---- */}
        <div id={styles["body"]}>
          <div className={styles.divBody}>
            <table className={styles.tableBackground}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Produto</th>
                  <th>Tipo</th>
                  <th>Fornecedor</th>
                  <th>Descrição</th>
                  <th>Aprovador</th>
                  <th>Ações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {relatoriosFiltrados.length > 0 ? (
                  relatoriosFiltrados.map((relatorio) => (
                    <tr key={pedido.id_pedido}>
                      <td className={styles.tableData}>{relatorio.pedido.id_pedido}</td>
                      <td className={styles.tableData}>{format(new Date(relatorio.createdAt), "dd/MM/yyyy")}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.nome_produto}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.tipo}</td>
                      <td className={styles.tableData}>{relatorio.pedido.fornecedor.razao_social}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.descricao}</td>
                      <td className={styles.tableData}>{relatorio.usuario.nome}</td>
                      <td className={styles.tableData}>

                        {/* verificando com é o estado da aprovação para mostrar ação */}
                        <button
                          className={styles.button}
                          onClick={async () => {
                            const pdfData = await criarRelatorioFinal(relatorio.pedido.id_pedido);
                            const pdfUrl = URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' }));
                            window.open(pdfUrl, '_blank');
                          }}
                        >
                          Visualizar <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </td>
                      <td className={styles.tableData}>
                        <button
                          className={styles.button}
                          onClick={() => {
                            setPedidoExcluir(relatorio.pedido.id_pedido)
                            setOpenModalPedidoExcluirWarning(true)
                          }}
                        >
                          NF <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  relatoriosAprovador.data?.map((relatorio) => (
                    <tr key={relatorio.pedido.id_pedido}>
                      <td className={styles.tableData}>{relatorio.pedido.id_pedido}</td>
                      <td className={styles.tableData}>{format(new Date(relatorio.createdAt), "dd/MM/yyyy")}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.nome_produto}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.tipo}</td>
                      <td className={styles.tableData}>{relatorio.pedido.fornecedor.razao_social}</td>
                      <td className={styles.tableData}>{relatorio.pedido.produto.descricao}</td>
                      <td className={styles.tableData}>{relatorio.usuario.nome}</td>
                      <td className={styles.tableData}>

                        {/* verificando com é o estado da aprovação para mostrar ação */}
                        <button
                          className={styles.button}
                          onClick={async () => {
                            const pdfData = await criarRelatorioFinal(relatorio.pedido.id_pedido);
                            const blob = new Blob([pdfData], { type: 'application/pdf' });
                            const pdfUrl = URL.createObjectURL(blob);
                            window.open(pdfUrl, '_blank');
                          }}
                        >
                          Visualizar <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </td>
                      <td className={styles.tableData}>
                        <button
                          className={styles.button}
                          onClick={() => {
                            setPedidoExcluir(relatorio.pedido.id_pedido)
                            setOpenModalPedidoExcluirWarning(true)
                          }}
                        >
                          NF <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PedidosProvider>
  )
}
