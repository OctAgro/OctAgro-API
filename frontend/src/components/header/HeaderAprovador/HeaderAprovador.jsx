import React from "react";
import "./HeaderAprovador.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

export const HeaderAprovador = () => {
  return (
    <div className="external">

      <div className="clipboard-a">
        <div className="left-side-a">
          <FontAwesomeIcon className="icon" icon={faClipboard} />
        </div>
        <div className="right-side-a">
          <h2>0</h2>
          <h3>Relatório(s) <br/> pendentes</h3>
        </div>
      </div>

      <div className="clipboard-b">
        <div className="left-side-b">
          <FontAwesomeIcon className="icon" icon={faClipboard} />
        </div>
        <div className="right-side-b">
          <h2>0</h2>
          <h3>Total <br/> de relatórios</h3>
        </div>
      </div>

    </div>
  );
};
