import styled, { css } from "styled-components";
import get from "lodash/get";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

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
    return css`
      background-color: ${get(theme, `colors.${variant}.background`)};
      border: 1px solid ${get(theme, `colors.${variant}.border`)};
      color: ${get(theme, `colors.${variant}.contrastText`)};
    `;
  }}

  &:hover {
    opacity: 0.5;
  }
`;
