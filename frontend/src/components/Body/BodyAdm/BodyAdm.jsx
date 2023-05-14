import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGroup, faWheatAwn } from "@fortawesome/free-solid-svg-icons"
import { faBuildingWheat, faTruck, faThumbsUp, faMicroscope, faHand } from "@fortawesome/free-solid-svg-icons"
import { faJarWheat } from "@fortawesome/free-solid-svg-icons"
import styles from "./BodyAdm.module.css"
import graficoCapacidade from "../../../assets/graficoCapacidade.png"
import graficoEstocagem from "../../../assets/graficoEstocagem.png"
import graficoProduto from "../../../assets/graficoProduto.png"

export const BodyAdm = () => {

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
                            <h1>0</h1>
                            <h3>
                                Usuários
                            </h3>
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
                            <h1>0</h1>
                            <h3>
                                Fornecedores
                            </h3>
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
                            <h1>0</h1>
                            <h3>
                                Produtos
                            </h3>
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
                            <h1>0</h1>
                            <h3>
                                Recebidos
                            </h3>
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
                                <h1>0</h1>
                                <h3>
                                    Aprovados
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={styles["graficoCapacidade"]}>
                    <img className={styles.imgGrafico} src={graficoCapacidade} alt="Grafico Capacidade Não Implementado" />

                </div>
                <div>
                    <div className={styles.clipboard}>
                        <div className={styles.leftSide}>
                            <FontAwesomeIcon className={styles.icon} icon={faMicroscope} />
                        </div>
                        <div className={styles.rightSide}>
                            {/*<h2>{numeroRelatorios ? numeroRelatorios : 0}</h2>*/}
                            <h1>0</h1>
                            <h3>
                                Análise
                            </h3>
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
                            <h1>0</h1>
                            <h3>
                                Reprovados
                            </h3>
                        </div>
                    </div>
                </div>

                <div id={styles["graficoEstocagem"]}>
                    <img className={styles.imgGrafEstocagem} src={graficoEstocagem} alt="Grafico Estocagem Não Implementado" />
                </div>


                <div id={styles["graficoProduto"]}>
                <img className={styles.imgGrafProduto} src={graficoProduto} alt="Grafico Produto Não Implementado" />
                </div>

            </div >
        </div >
    )
}