import React from "react";
import { FooterBase } from "./footer.styles";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Text from "../../../foundation/Text";

export default function Footer() {
  return (
    <FooterBase variant="primary">
      <a href="/">
        <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      </a>
      <Text tag="p" variant="smallestException">
        Created by <a href="https://www.rafaelviana.io/">Rafael Viana</a>
      </Text>
    </FooterBase>
  );
}
