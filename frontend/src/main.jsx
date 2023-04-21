import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Login } from "./pages/Login";
import { HomeAprovador } from "./pages/aprovador/HomeAprovador/HomeAprovador";
import { RelatorioAprovador } from "./pages/aprovador/RelatorioAprovador/RelatorioAprovador";
import { FormularioAprovador } from "./pages/aprovador/FormularioAprovador/FormularioAprovador";
import { DocumentacaoAprovador } from "./pages/aprovador/DocumentacaoAprovador/DocumentacaoAprovador";
import { HomeAnalista } from "./pages/analista/HomeAnalista/HomeAnalista"
import { MercadoriaAnalista } from "./pages/analista/MercadoriaAnalista/MercadoriaAnalista"
import { FormularioAnalista } from "./pages/analista/FormularioAnalista/FormularioAnalista"
import { CheckboxDupla } from "./components/Checkbox/CheckboxDupla/CheckboxDupla";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
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
    element: <DocumentacaoAprovador documentacao='True'/>,
  },
  {
    path: "/aprovador/relatorio/:id/infoRecebedor",
    element: <DocumentacaoAprovador recebedor='True' />,
  },
  {
    path: "/aprovador/relatorio/:id/infoAnalista",
    element: <DocumentacaoAprovador analista='True' />,
  },
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
    path: "/debug",
    element: <CheckboxDupla readOnly='True' regra='Sexo' nameAprovado='' nameRecusado='' link='/aprovador/home'/>,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
