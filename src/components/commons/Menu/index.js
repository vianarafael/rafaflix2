import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLanguage } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { Button } from "../Button/button.component";
import { MenuWrapper } from "./menu.styles.js";
import { SearchBox } from "../Searchbox/searchbox.styles";
import Text from "../../../foundation/Text";

export default function Menu() {
  const router = useRouter();

  return (
    <MenuWrapper className="Menu" variant="primary">
      <div className="logo-container">
        <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      </div>
      <div className="searchbox">
        <Button variant="primary">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
        <SearchBox placeholder="Search..." variant="primary" />
      </div>
      <div
        className="lang"
        style={{ color: "white", fontSize: "36px" }}
        size="6x"
      >
        <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
        {/* <ul>
          {router.locales.map((locale) => {
            return (
              <li style={{ color: "white" }}>
                <Link href="/" locale={locale}>
                  {locale}
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="log-dashboard">
        <Button variant="primary">
          <Text>SIGN IN</Text>
        </Button>
      </div>
    </MenuWrapper>
  );
}
