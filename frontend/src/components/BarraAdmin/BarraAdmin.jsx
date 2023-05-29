import React, { useState } from "react"

import { Link } from "react-router-dom"

// importando icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import styles from "./BarraAdmin.module.css"

export const BarraAdmin = ({ linkVoltar, linkCadastrar, children, handleSearch, setSearchTerm }) => {

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.external}>
      <div className={styles.leftSide}>
        <div>
          <Link to={linkVoltar}>
            <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Link to={linkCadastrar}>
          <div className={styles.childrenButton}>{children}<h3 className={styles.cadastrar}>Cadastrar</h3></div>
        </Link>
        <div className={styles.searchBar}>
          <label>
            <form onSubmit={handleSearch}>
              <input type="search" placeholder="Pesquisar" maxLength="18" onChange={handleInputChange}></input>
              <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </label>
        </div>
      </div>
    </div>
  )
}
