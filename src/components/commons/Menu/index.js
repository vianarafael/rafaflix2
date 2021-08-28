import React, { useState } from "react";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button/button.component";
import { MenuWrapper } from "./menu.styles.js";
import { SearchBox } from "../Searchbox/searchbox.styles";
import Text from "../../../foundation/Text";

export default function Menu() {
  return (
    <MenuWrapper className="Menu" variant="primary">
      {/* <div> */}
      <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      {/* </div> */}
      <div className="searchbox">
        <Button variant="primary">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
        <SearchBox placeholder="Search..." variant="primary" />
      </div>
      <div className="log-dashboard">
        <Button variant="primary">
          <Text>SIGN IN</Text>
        </Button>
      </div>
    </MenuWrapper>
  );
}
