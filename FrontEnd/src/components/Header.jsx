import React, { useContext, useEffect } from "react";
import Login from "./Login";
import { GeneralContext } from "../context/GeneralContext";

export default function Header() {
  const { dbUrl } = useContext(GeneralContext);
  useEffect(() => {
    console.log(dbUrl);
  }, []);
  return (
    <header className="header-bg">
      <div className="header-container app-container">
        <div className="header-info">
          <h1 className="header-title">BARBERIA</h1>
          <i>La experiencia es inigualable...</i>
          <button id="header-button" className="button button-blue">AGENDA CITA</button>
        </div>
      </div>
    </header>
  );
}
