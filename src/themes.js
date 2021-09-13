import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  transition: "all 0.25s linear",
  body: "#fff",
  fontColor: "#000",
  // animationDuration: "1s",
  // transitionDuration: "1s",
  // transition: "1s",
};

export const darkTheme = {
  transition: "all 0.25s linear",
  body: "#000",
  fontColor: "#fff",
  // animationDuration: "1s",
  // transitionDuration: "1s",
  // transition: "1s",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
