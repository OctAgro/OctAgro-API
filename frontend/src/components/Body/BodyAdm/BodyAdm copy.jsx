import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faBuildingWheat } from "@fortawesome/free-solid-svg-icons"
import { faJarWheat } from "@fortawesome/free-solid-svg-icons"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faMicroscope } from "@fortawesome/free-solid-svg-icons"
import { faHand} from "@fortawesome/free-solid-svg-icons"
import styles from "./BodyAdm.module.css"

export const BodyAdm = () => {
    
    return (
      <div className={styles.external}>        
  
        <div className={styles.grid}>
            <div className={styles.grid1}>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                    <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
                    </div>
                    <div className={styles.rightSideB}>
                    <h2>0</h2>
                    <h3>
                        Usuários
                    </h3>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                        <FontAwesomeIcon className={styles.icon} icon={faBuildingWheat} />
                    </div>
                    <div className={styles.rightSideB}>
                        <h2>0</h2>
                        <h3>
                            Fornecedores
                        </h3>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                        <FontAwesomeIcon className={styles.icon} icon={faJarWheat} />
                    </div>
                    <div className={styles.rightSideB}>
                        <div className={styles.arrumar}>
                        <h2>0</h2>
                        <h3>
                            Produtos
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.grid2}>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                    <FontAwesomeIcon className={styles.icon} icon={faTruck} />
                    </div>
                    <div className={styles.rightSideB}>
                    <h2>0</h2>
                    <h3>
                        Recebidos
                    </h3>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                    <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
                    </div>
                    <div className={styles.rightSideB}>
                    <h2>0</h2>
                    <h3>
                        Aprovados
                    </h3>
                    </div>
                 </div>
            </div>
            <div className={styles.grid2}>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                    <FontAwesomeIcon className={styles.icon} icon={faMicroscope} />
                    </div>
                    <div className={styles.arrumar}>
                        <div className={styles.rightSideB}>
                        <h2>0</h2>
                        <h3>
                            Análise
                        </h3>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.leftSideB}>
                    <FontAwesomeIcon className={styles.icon} icon={faHand} />
                    </div>
                    <div className={styles.rightSideB}>
                    <h2>0</h2>
                    <h3>
                        Reprovados
                    </h3>
                    </div>
            </div>
          </div>
        </div>
      </div>
    )
  }