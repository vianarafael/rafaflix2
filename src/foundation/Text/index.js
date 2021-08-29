import React from "react";
import styled, { css } from "styled-components";
import { propToStyle } from "../../theme/utils/propToStyle";

const TextBase = styled.span`
  margin: 0;
  ${propToStyle("textAlign")}
  /* This is just a test */
  ${propToStyle("color")}

  ${(props) => {
    if (props.variant === "smallestException") {
      return css`
        font-size: ${({ theme }) =>
          theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) =>
          theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) =>
          theme.typographyVariants.smallestException.lineHeight};
      `;
    }
  }}
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
