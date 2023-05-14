import React from "react"
import { useRoutes } from "react-router-dom"

//PÁGINAS RECEBEDOR
import { HomeRecebedor } from "../../pages/recebedor/HomeRecebedor/HomeRecebedor"
import { MercadoriaRecebedor } from "../../pages/recebedor/MercadoriaRecebedor/MercadoriaRecebedor"
import { RecebimentoRecebedor } from "../../pages/recebedor/RecebimentoRecebedor/RecebimentoRecebedor"
import { FormularioRecebedor } from "../../pages/recebedor/FormularioRecebedor/FormularioRecebedor"
import { FormularioRecebedorUpdate } from "../../pages/recebedor/FormularioRecebedorUpdate/FormularioRecebedorUpdate"

//PATHS RECEBEDOR

export default function PathRecebedor() {
    return useRoutes([
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
        }
    ]);
}