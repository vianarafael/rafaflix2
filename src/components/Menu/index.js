import React, { useState } from "react";
import Logo from "../../../public/images/logo.png";
import { MenuBase } from "./menu.styles.js";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Button from "../Button/button.component";

import styled from "styled-components";
import Button from "../Button/button.component";

const Search = styled.input`
  color: var(--white);
  height: 3rem;
  border: 1px solid var(--white);
  box-sizing: border-box;
  margin-left: 4px;
  background: black;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
`;

export default function Menu() {
  return (
    <MenuBase className="Menu">
      {/* <div> */}
      <Image className="Logo" src={Logo} alt="Rafaflix logo" />
      {/* </div> */}
      <div className="searchbox">
        <Button>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
        <Search placeholder="Search..." />
      </div>
      <div class="log-dashboard">
        <Button value="signin">SIGN IN</Button>
      </div>
    </MenuBase>
  );
}
