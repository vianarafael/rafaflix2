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
    console.log(get(theme, `colors.${variant}.background`));
    return `background-color: ${get(theme, `colors.${variant}.background`)};`;
  }}

  ${({ variant, theme }) => {
    console.log(get(theme, `colors.${variant}.background`));
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
