import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom"

/* IMPORTANDO PÁGINAS DO APROVADOR */
import { HomeAprovador } from "./src/pages/aprovador/HomeAprovador/HomeAprovador"
import { RelatorioAprovador } from "./src/pages/aprovador/RelatorioAprovador/RelatorioAprovador"
import App from "./src/App"

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        {/* ROTAS DO APROVADOR */}
        <Route path="/" element={App} />
        <Route path="/aprovador/home" element={HomeAprovador} />
        <Route path="/aprovador/relatorio" element={RelatorioAprovador} />
{/*         <Route path="/aprovador/relatorio/:idMercadoria" exact component={RelatorioAprovadorDetails} /> */}
      </RoutesDom>
    </BrowserRouter>
  )
}
