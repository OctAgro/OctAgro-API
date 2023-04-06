import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import { HomeAprovador } from "./pages/aprovador/HomeAprovador/HomeAprovador"
import { RelatorioAprovador } from "./pages/aprovador/RelatorioAprovador/RelatorioAprovador"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aprovador/home",
    element: <HomeAprovador />,
  },
  {
    path: "/aprovador/relatorio",
    element: <RelatorioAprovador />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
