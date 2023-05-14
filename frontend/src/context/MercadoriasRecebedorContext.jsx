// CONTEXT REFERENTE AO HEADER DO RECEBEDOR (RELATORIOS/PEDIDOS)

import { createContext, useState, useEffect } from "react"

import { buscarRelatoriosRecebedor } from "../hooks/buscarRelatorios"

export const MercadoriasRecebedorContext = createContext()

export const MercadoriasProvider = ({ children }) => {
  const [mercadoriasRecebedor, setMercadoriasRecebedor] = useState([[],0])

  useEffect(() => {
    async function fetchData() {
      try {
        const dados = await buscarRelatoriosRecebedor()
        const lista = dados.data
        const comprimento = dados.data.length
        console.log('Lista: ' , lista)
        console.log('Comprimento: ' , comprimento)
        setMercadoriasRecebedor([lista, comprimento])

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [setMercadoriasRecebedor])

  return <MercadoriasRecebedorContext.Provider value={mercadoriasRecebedor}>{children}</MercadoriasRecebedorContext.Provider>
}