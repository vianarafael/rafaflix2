import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";

import styled from "styled-components";
import get from "lodash/get";

const Main = styled.main`
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;

  ${({ variant, theme }) => {
    return `background-color: ${get(theme, `colors.${variant}.background`)};`;
  }}

  ${({ variant, theme }) => {
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}
`;

export default function PageDefault({ children, currentUser }) {
  return (
    <>
      <Menu />
      <Main variant="primary">{children}</Main>
      <Footer />
    </>
  );
}
