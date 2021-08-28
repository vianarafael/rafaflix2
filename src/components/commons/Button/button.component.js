import styled, { css } from "styled-components";
import get from "lodash/get";

export const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  ${({ variant, theme }) => {
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}

  ${({ variant, theme }) => {
    return `border: 1px solid ${get(theme, `colors.${variant}.border`)};`;
  }}
    ${({ variant, theme }) => {
    return `background-color:  ${get(theme, `colors.${variant}.background`)};`;
  }}

 ${({ theme }) => {
    return css`
      @media screen and (min-width: ${theme.breakpoints.xs}px) {
        background: red !important;
      }

      @media screen and (min-width: ${theme.breakpoints.sm}px) {
        background: blue !important;
      }
    `;
  }} 

  &:hover {
    opacity: 0.5;
  }
`;
