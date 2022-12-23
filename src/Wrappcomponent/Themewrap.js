import React, { useContext } from "react";
import { ThemeContext } from "../Context/Themecontext";

export default function Themewrap(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{props.children}</div>;
}