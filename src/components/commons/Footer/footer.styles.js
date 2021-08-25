import styled from "styled-components";
import get from "lodash/get";

export const FooterBase = styled.footer`
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  ${({ variant, theme }) => {
    return `background-color: ${get(theme, `colors.${variant}.background`)};`;
  }}

  ${({ variant, theme }) => {
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
