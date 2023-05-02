import React from "react";

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { BodyAdm } from "../../../components/Body/BodyAdm/BodyAdm"

// Importando CSS
import styles from "./HomeAdmin.module.css"

export const HomeAdmin = () => {
  return (
    
      <div className={styles.main}>
        <SidebarAdmin />   
        <div className={styles.container}>
          <BodyAdm />
        </div>
      </div>
    
  )
}
