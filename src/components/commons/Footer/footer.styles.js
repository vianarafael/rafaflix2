import styled from "styled-components";
import get from "lodash/get";

export const FooterBase = styled.footer`
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  /* margin-top: 42px;
  border-top: 2px solid #2a7ae4; */

  ${({ variant, theme }) => {
    return `background-color: ${get(theme, `colors.${variant}.background`)};`;
  }}

  ${({ variant, theme }) => {
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}

  @media (max-width: 800px) {
    margin-bottom: 50px;
    margin-top: 0;
    border: none;
  }
`;
