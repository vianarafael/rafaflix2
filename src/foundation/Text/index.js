import React from "react";
import styled, { css } from "styled-components";
import { propToStyle } from "../../theme/utils/propToStyle";

const TextBase = styled.span`
  ${propToStyle("textAlign")}

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
