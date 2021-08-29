import { breakpointsMedia } from "./breakpointsMedia";

export function propToStyle(propName) {
  return function (props) {
    const propValue = props[propName];

    console.log(propValue);

    if (typeof propValue === "string") {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === "object") {
      console.log("it is an object");
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
