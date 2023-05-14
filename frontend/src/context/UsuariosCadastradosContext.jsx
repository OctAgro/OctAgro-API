// CONTEXT REFERENTE AO HEADER DO RECEBEDOR (RELATORIOS/PEDIDOS)

import { createContext, useState, useEffect } from "react"

import { buscarTodosUsuarios } from "../hooks/buscarUsuarioPorEmail"

export const UsuariosCadastradosContext = createContext()

export const UsuariosCadastradosProvider = ({ children }) => {
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([])
  const [usuariosComprimento, setUsuariosComprimento] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const dados = await buscarTodosUsuarios()
        setUsuariosCadastrados(dados)
        setUsuariosComprimento(dados.lenght)

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return <UsuariosCadastradosContext.Provider value={[usuariosCadastrados, usuariosComprimento]}>{children}</UsuariosCadastradosContext.Provider>
}

/*  */