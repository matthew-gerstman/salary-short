// example theme.js
import theme from "mdx-deck/themes";
import Provider from "./provider";

export default {
  // extends the default theme
  ...theme,
  Provider,
  // add a custom font
  font: "OpenSans, sans-serif",
  fontSizes: ["0.4em", "0.5em", "0.75em", "1em", "1.5em", "2em", "3em"],
  colors: {
    text: "white",
    background: "#343633",
    link: "white"
  },
  a: { color: "white", textDecoration: "none" },
  h1: {
    textTransform: "uppercase"
  },
  h2: {},
  p: {},
  weights: 400,
  img: {
    maxHeight: "80vh",
    maxWidth: "100%"
  }
};
