import { css } from "styled-components";
import theme from "../../theme";

const { breakpoints } = theme;

export function breakpointsMedia(cssByyBreakpoints) {
  const breakpointsNames = Object.keys(cssByyBreakpoints);
  return breakpointsNames.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByyBreakpoints[breakpointName]}
      }
    `;
  });
}
