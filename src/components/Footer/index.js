import React from "react";
import { FooterBase } from "./footer.styles";

// import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <FooterBase>
      <a href="/">{/* <img src={logo} alt="Logo Rafaflix" /> */}</a>
      <p>
        Created by <a href="https://www.rafaelviana.io/">Rafael Viana</a>
      </p>
    </FooterBase>
  );
}
