import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  animationDuration: "1s",
  transitionDuration: "1s",
  // transition: "1s",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  animationDuration: "1s",
  transitionDuration: "1s",
  // transition: "1s",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
