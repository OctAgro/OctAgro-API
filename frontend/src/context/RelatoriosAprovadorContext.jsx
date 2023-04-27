// CONTEXT REFERENTE AO HEADER DO APROVADOR (RELATORIOS/PEDIDOS)

import { createContext, useState, useEffect } from "react"

import { buscarRelatorios } from "../hooks/buscarRelatorios"

export const RelatoriosAprovadorContext = createContext()

export const RelatoriosProvider = ({ children }) => {
  const [relatoriosAprovador, setRelatoriosAprovador] = useState([[],0])

  useEffect(() => {
    async function fetchData() {
      try {
        const dados = await buscarRelatorios()
        const lista = dados.data
        const comprimento = dados.data.length
        setRelatoriosAprovador([lista, comprimento])

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [setRelatoriosAprovador])

  return <RelatoriosAprovadorContext.Provider value={relatoriosAprovador}>{children}</RelatoriosAprovadorContext.Provider>
}
