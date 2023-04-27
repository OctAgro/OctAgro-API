// CONTEXT REFERENTE AO HEADER DO ANALISTA (RELATORIOS/PEDIDOS)import { createContext, useState, useEffect } from "react"

import { createContext, useState, useEffect } from "react"

import { buscarRelatoriosAnalista } from "../hooks/buscarRelatorios"

export const PedidosAnalistaContext = createContext()

export const PedidosProvider = ({ children }) => {
  const [pedidosAnalista, setPedidosAnalista] = useState([[],0])

  useEffect(() => {
    async function fetchData() {
      try {
        const dados = await buscarRelatoriosAnalista()
        const lista = dados.data
        const comprimento = dados.data.length
        console.log('Lista: ' , lista)
        console.log('Comprimento: ' , comprimento)
        setPedidosAnalista([lista, comprimento])

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [setPedidosAnalista])

  return <PedidosAnalistaContext.Provider value={pedidosAnalista}>{children}</PedidosAnalistaContext.Provider>
}