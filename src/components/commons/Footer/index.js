import React from "react";
import { FooterBase } from "./footer.styles";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Text from "../../../foundation/Text";

import useTranslation from "../../../../intl/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterBase variant="primary">
      <a href="/">
        <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      </a>
      <Text tag="p" variant="smallestException">
        {t("footer")} <a href="https://www.rafaelviana.io/">{t("author")}</a>
      </Text>
    </FooterBase>
  );
}
