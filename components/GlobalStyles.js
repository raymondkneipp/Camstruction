import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`

  ::selection {
    background: ${theme`colors.red.700`};
    color: white;
  }
  ::-moz-selection {
    background: ${theme`colors.red.700`};
    color: white;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    ${tw`antialiased`}
  }

  @keyframes wiggle {
    0% {
      transform: rotate(-6deg);
    }
    5% {
      transform: rotate(6deg);
    }
    10% {
      transform: rotate(-6deg);
    }
    15% {
      transform: rotate(0);
    }
  }

  input[type="text"] {
    width: 100%;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
