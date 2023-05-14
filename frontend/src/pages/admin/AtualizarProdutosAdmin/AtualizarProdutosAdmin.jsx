import React from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormAtualizarProduto } from "../../../components/Forms/FormAtualizarProduto/FormAtualizarProduto"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./AtualizarProdutosAdmin.module.css"

export const AtualizarProdutosAdmin = () => {
  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}>
          <SidebarAdmin />
        </div>
        <div id={styles["header"]}>
          <HeaderProdutos />
        </div>

        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/produtos" linkCadastrar="/admin/produtos/cadastrar">
            <FontAwesomeIcon icon={faPlus} title="Cadastrar novo produto!" />
          </BarraAdmin>
          {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}
        </div>

        <div id={styles["body"]}>
          <FormAtualizarProduto />
        </div>
      </div>
    </PedidosProvider>
  )
}
