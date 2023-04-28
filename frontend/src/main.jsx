import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


import "./index.css"

import CheckboxBibioteca from "./components/CheckboxBiblioteca/CheckboxBiblioteca"

import { Login } from "./pages/Login"

import { UserProvider } from "./context/usuarioContext";

//ADMIN
import { HomeAdmin } from "./pages/admin/HomeAdmin/HomeAdmin"
import { UsuariosAdmin } from "./pages/admin/UsuariosAdmin/UsuariosAdmin"
import { FornecedoresAdmin } from "./pages/admin/FornecedoresAdmin/FornecedoresAdmin"
import { ProdutosAdmin } from "./pages/admin/ProdutosAdmin/ProdutosAdmin"
import { RelatoriosAdmin } from "./pages/admin/RelatoriosAdmin/RelatoriosAdmin"


// RECEBEDOR
/* import PathRecebedor from "./components/Paths/PathRecebedor"/* 
 */
import { HomeRecebedor } from "./pages/recebedor/HomeRecebedor/HomeRecebedor"
import { MercadoriaRecebedor } from "./pages/recebedor/MercadoriaRecebedor/MercadoriaRecebedor"
import { RecebimentoRecebedor } from "./pages/recebedor/RecebimentoRecebedor/RecebimentoRecebedor"
import { FormularioRecebedor } from "./pages/recebedor/FormularioRecebedor/FormularioRecebedor"
import { FormularioRecebedorUpdate } from "./pages/recebedor/FormularioRecebedorUpdate/FormularioRecebedorUpdate"

// ANALISTA
import { HomeAnalista } from "./pages/analista/HomeAnalista/HomeAnalista"
import { MercadoriaAnalista } from "./pages/analista/MercadoriaAnalista/MercadoriaAnalista"
import { FormularioAnalista } from "./pages/analista/FormularioAnalista/FormularioAnalista"
import { DocumentacaoAnalista } from "./pages/analista/DocumentacaoAnalista/DocumentacaoAnalista"
import { DocumentacaoAnalistaRecebedor } from "./pages/analista/DocumentacaoAnalistaRecebedor/DocumentacaoAnalistaRecebedor"

// APROVADOR
import { HomeAprovador } from "./pages/aprovador/HomeAprovador/HomeAprovador"
import { RelatorioAprovador } from "./pages/aprovador/RelatorioAprovador/RelatorioAprovador"
import { FormularioAprovador } from "./pages/aprovador/FormularioAprovador/FormularioAprovador"
import { DocumentacaoAprovador } from "./pages/aprovador/DocumentacaoAprovador/DocumentacaoAprovador"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },


  //ADMIN

  {
    path: "/admin/home",
    element: <HomeAdmin />,
  },
  {
    path: "/admin/usuarios",
    element: <UsuariosAdmin />,
  },
  {
    path: "/admin/fornecedores",
    element: <FornecedoresAdmin />,
  },
  {
    path: "/admin/produtos",
    element: <ProdutosAdmin />,
  },
  {
    path: "/admin/relatorios",
    element: <RelatoriosAdmin />,
  },

  //RECEBEDOR
 /*  < PathRecebedor />, */
   {
    path: "/recebedor/home",
    element: <HomeRecebedor />,
  },
  {
    path: "/recebedor/entradamercadoria",
    element: <RecebimentoRecebedor />,
  },
  {
    path: "/recebedor/entradamercadoria/:id",
    element: <FormularioRecebedor />,
  },
  {
    path: "/recebedor/mercadoriascadastradas",
    element: <MercadoriaRecebedor />,
  },
  {
    path: "/recebedor/mercadoriascadastradas/:id",
    element: <FormularioRecebedorUpdate />,
  },

  //ANALISTA
  {
    path: "/analista/home",
    element: <HomeAnalista />,
  },
  {
    path: "/analista/mercadoria",
    element: <MercadoriaAnalista />,
  },
  {
    path: "/analista/mercadoria/:id",
    element: <FormularioAnalista />,
  },
  {
    path: "/analista/documentacao/:id",
    element: <DocumentacaoAnalista recebedor="True" />,
  },
  {
    path: "/analista/documentacaoRecebedor/:id",
    element: <DocumentacaoAnalistaRecebedor recebedor="True" />,
  },
 

  //APROVADOR
  {    
    path: "/aprovador/home",
    element: <HomeAprovador />,
  },
  {
    path: "/aprovador/relatorio",
    element: <RelatorioAprovador />,
  },
  {
    path: "/aprovador/relatorio/:id",
    element: <FormularioAprovador />,
  },
  {
    path: "/aprovador/relatorio/:id/documentacao",
    element: <DocumentacaoAprovador documentacao="True" />,
  },
  {
    path: "/aprovador/relatorio/:id/infoRecebedor",
    element: <DocumentacaoAprovador recebedor="True" />,
  },
  {
    path: "/aprovador/relatorio/:id/infoAnalista",
    element: <DocumentacaoAprovador analista="True" />,
  },
  {
    path: "/debug",
    element: <CheckboxBibioteca />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)
