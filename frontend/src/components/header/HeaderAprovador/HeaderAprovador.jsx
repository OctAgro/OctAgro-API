import React from "react"
import './HeaderAprovador.css'

export const HeaderAprovador = () => {
  return (
    <main>
      <div className="inner">
        <div className="item">
          <p>Análise(s) pendente(s)</p>
        </div>
        <div className="item">
          <p>Total de Produtos</p>
        </div>
      </div>
      <div className="top-numbers">
        <div className="numbers">
          <p>0</p>
        </div>
        <div className="numbers">
          <p>0</p>
        </div>
      </div>
    </main>
  )
}
