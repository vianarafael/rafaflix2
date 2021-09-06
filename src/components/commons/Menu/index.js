import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLanguage } from "@fortawesome/free-solid-svg-icons";
import Flags from "country-flag-icons/react/3x2";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { Button } from "../Button/button.component";
import { MenuWrapper } from "./menu.styles.js";
import { SearchBox } from "../Searchbox/searchbox.styles";
import Text from "../../../foundation/Text";

import LanguageModal from "../Modal/LanguageModal";

import useTranslation from "../../../../intl/useTranslation";

export default function Menu() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <MenuWrapper className="Menu" variant="primary">
      <div className="logo-container">
        <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      </div>
      <div className="searchbox">
        <Button variant="primary">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
        <SearchBox placeholder={t("search")} variant="primary" />
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
                  <li style={{ listStyle: "none" }}>
                    <Link href="/" locale={locale}>
                      <Button
                        style={{
                          width: "80px",
                          margin: "0 auto",
                        }}
                        onClick={() => {
                          setShowModal(false);
                        }}
                      >
                        {locale === "en-US" ? (
                          <Flags.US title="English" />
                        ) : locale === "ja-JP" ? (
                          <Flags.JP title="日本語" />
                        ) : locale === "pt-BR" ? (
                          <Flags.BR title="Português" />
                        ) : (
                          ""
                        )}
                      </Button>
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
          <Text>{t("signin")}</Text>
        </Button>
      </div>
    </MenuWrapper>
  );
}
