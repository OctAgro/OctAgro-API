import React, { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGroup, faWheatAwn } from "@fortawesome/free-solid-svg-icons"
import { faBuildingWheat, faTruck, faThumbsUp, faMicroscope, faHand } from "@fortawesome/free-solid-svg-icons"
import { faJarWheat } from "@fortawesome/free-solid-svg-icons"
import styles from "./BodyAdm.module.css"
import graficoCapacidade from "../../../assets/graficoCapacidade.png"
import graficoEstocagem from "../../../assets/graficoEstocagem.png"
import graficoProduto from "../../../assets/graficoProduto.png"

import { buscarContadores } from "../../../hooks/buscarContadoresSistema"

export const BodyAdm = () => {
  const [imageUrl, setImageUrl] = useState("")

  //Pegando dados dos contadores
  const [contadores, setContadores] = useState([])

  useEffect(() => {
    async function fetchContadores() {
      const dadosContadores = await buscarContadores()
      setContadores(dadosContadores)
    }
    fetchContadores()
  }, [])

  console.log("usuarios: ", contadores)


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("http://localhost:3000/administrador/grafico/produto", {
          responseType: "blob",
        })
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64Image = reader.result
          setImageUrl(base64Image)
        }
        reader.readAsDataURL(response.data)
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error)
      }
    }

    fetchImage()
  }, [])

  return (
    <div>
      <div id={styles["container"]}>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.totalUsuarios}</h1>
              <h3 className={styles.subtitle}>Usuários</h3>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faBuildingWheat} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.totalFornecedores}</h1>
              <h3 className={styles.subtitle}>Fornecedores</h3>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faWheatAwn} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.totalProdutos}</h1>
              <h3 className={styles.subtitle}>Produtos</h3>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faTruck} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.totalRelatoriosRecebedor}</h1>
              <h3 className={styles.subtitle}>Recebidos</h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.clipboard}>
              <div className={styles.leftSide}>
                <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
              </div>
              <div className={styles.rightSide}>
                {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
                <h1 className={styles.title}>{contadores.countRelatoriosAprovados}</h1>
                <h3 className={styles.subtitle}>Aprovados</h3>
              </div>
            </div>
          </div>
        </div>
        <div id={styles["graficoCapacidade"]}>
          <img
            className={styles.imgGrafico}
            src={graficoCapacidade}
            alt="Grafico Capacidade Não Implementado"
          />
        </div>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faMicroscope} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.totalRelatoriosAnalista}</h1>
              <h3 className={styles.subtitle}>Análise</h3>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.clipboard}>
            <div className={styles.leftSide}>
              <FontAwesomeIcon className={styles.icon} icon={faHand} />
            </div>
            <div className={styles.rightSide}>
              {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
              <h1 className={styles.title}>{contadores.countRelatoriosRecusados}</h1>
              <h3 className={styles.subtitle}>Reprovados</h3>
            </div>
          </div>
        </div>

        <div id={styles["graficoEstocagem"]}>
          <img
            className={styles.imgGrafEstocagem}
            src={graficoEstocagem}
            alt="Grafico Estocagem Não Implementado"
          />
        </div>

        <div id={styles["graficoProduto"]}>
          {imageUrl ? (
            <img src={imageUrl} alt="Gráfico de produto" className={styles.imgGrafProduto} />
          ) : (
            <img
              className={styles.imgGrafProduto}
              src={graficoProduto}
              alt="Grafico de produto não implementado"
            />
          )}
        </div>
      </div>
    </div>
  )
}
