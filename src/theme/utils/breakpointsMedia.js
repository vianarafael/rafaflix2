import { breakpoints } from "../../theme";

export function breakpointsMedia(cssByyBreakpoints) {
  const breakpointsNames = Object.keys(cssByyBreakpoints);
  return breakpointsNames
    .map((breakpointName) => {
      return `
          @media screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByyBreakpoints[breakpointName]}
      }
    `;
    })
    .join("");
}
