import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//IMPORTANDO COMPONENTES
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFaceSmileBeam,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FormAprovador.module.css";

export const FormAprovador = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [isAprovado, setIsAprovado] = useState(false);

  const handleAceitar = (e) => {
    e.preventDefault();
    setIsAprovado(true);
    setOpenModal(true);
  };

  const handleRecusar = (e) => {
    e.preventDefault();
    setIsAprovado(false);
    setOpenModal(true);
  };
/* className={styles.modalOverlay} */
  return (
    <div className={styles.formAprovador} >
      <div className={styles.formTop}>
        <label htmlFor="formAprovador">
          Relatório do Pedido {props.numeroPedido} - {props.nomeAnalista}
        </label>
      </div>

      <form className={styles.teste} name="formAprovador">
        <fieldset>
          <div>
            <legend>Documentação</legend>
            <hr />
          </div>
          <div>
            <label htmlFor="checkboxDocumentos" />
            Documentos (RC/NF):
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faEye} />
              Visualizar
            </button>
            <input
              type="checkbox"
              name="checkboxDocumentacaoProdutoAprovado"
              id="checkboxDocumentacaoProdutoAprovado"
            />
            <input
              type="checkbox"
              name="checkboxDocumentacaoProdutoReprovado"
              id="checkboxDocumentacaoProdutoReprovado"
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <legend>Sua revisão</legend>
            <hr />
          </div>
          <div>
            <input
              type="text"
              name="textoRevisaoFinalAprovador"
              id="textoRevisaoFinalAprovador"
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <legend>Análises e Inspeções</legend>
            <hr />
          </div>
          <div>
            <div>
              <label htmlFor="infRecebedor">Inf. do Recebedor</label>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faEye} />
                Visualizar
              </button>

              <input
                type="checkbox"
                name="checkboxInfoRecebedorAprovado"
                id="checkboxInfoRecebedorAprovado"
              />
              <input
                type="checkbox"
                name="checkboxInfoRecebedorReprovado"
                id="checkboxInfoRecebedorReprovado"
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="infAnalista">Inf. do Analista</label>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faEye} />
                Visualizar
              </button>
              <input
                type="checkbox"
                name="checkboxInfoRecebedorAprovado"
                id="checkboxInfoRecebedorAprovado"
              />
              <input
                type="checkbox"
                name="checkboxInfoRecebedorReprovado"
                id="checkboxInfoRecebedorReprovado"
              />
            </div>
          </div>
        </fieldset>

        <div>
          <Button
            value1="RECUSAR"
            value2="MERCADORIA"
            onClick={handleRecusar}
          />
          <Button
            value1="ACEITAR"
            value2="MERCADORIA"
            onClick={handleAceitar}
          />
        </div>
      </form>
      <div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div>
            {isAprovado ? (
              <>
                <FontAwesomeIcon icon={faFaceSmileBeam} />
                <p>O Pedido {props.numeroPedido} foi aprovado!</p>
                <Link to="/aprovador/relatorio">
                  <Button value1="CONFIRMAR" />
                </Link>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faFaceFrown} />
                <p>O Pedido {props.numeroPedido} foi recusado!</p>
                <Link to="/aprovador/relatorio">
                  <Button value1="CONFIRMAR" />
                </Link>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};
