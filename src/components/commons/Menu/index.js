import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLanguage,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";
import Flags from "country-flag-icons/react/3x2";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { Button } from "../Button/button.component";
import { MenuWrapper } from "./menu.styles.js";
import { SearchBox } from "../Searchbox/searchbox.styles";
import Text from "../../../foundation/Text";

import LanguageModal from "../Modal/LanguageModal";

export default function Menu() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

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
      <div className="lang">
        <Button onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
        </Button>
        <LanguageModal onClose={() => setShowModal(false)} show={showModal}>
          <div>
            <ul>
              {router.locales.map((locale) => {
                return (
                  <li style={{ margin: "8px" }}>
                    <Link href="/" locale={locale}>
                      <div style={{ height: "50px", width: "80px" }}>
                        {locale === "en-US" ? (
                          <Flags.US title="English" />
                        ) : locale === "ja" ? (
                          <Flags.JP title="日本語" />
                        ) : locale === "pt-BR" ? (
                          <Flags.BR title="Português" />
                        ) : (
                          ""
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </LanguageModal>
      </div>
      <div className="log-dashboard">
        <Button variant="primary">
          <Text>SIGN IN</Text>
        </Button>
      </div>
    </MenuWrapper>
  );
}
