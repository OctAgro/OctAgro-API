import React from "react";
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador";
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador";
import "./HomeAprovador.css";

export const HomeAprovador = () => {
  return (
    <div className="home">
      <SidebarAprovador />
      
      <div className="container-header">
        <HeaderAprovador />
      </div>
    </div>
  );
};
