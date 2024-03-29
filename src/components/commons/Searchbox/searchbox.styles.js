import styled from "styled-components";
import get from "lodash/get";

export const SearchBox = styled.input`
  height: 3rem;
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

  ${({ variant, theme }) => {
    return `color: ${get(theme, `colors.${variant}.contrastText`)};`;
  }}

  ${({ variant, theme }) => {
    return `border: 1px solid ${get(theme, `colors.${variant}.border`)};`;
  }}
`;
