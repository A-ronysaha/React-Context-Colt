import React, { useContext } from "react";

import { ThemeContext } from "../Context/Themecontext";
import { LanguageContext } from "../Context/Languagecontext";
const content = {
  english: {
    search: "Search",
  },
  french: {
    search: "Chercher",
  },
  spanish: {
    search: "Buscar",
  }
};

 function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext)
  const {search} = content[language]
   
  return (
    <div>
      <nav className="navbar" style={isDarkMode ? {backgroundColor:"white"} :{backgroundColor:"purple"}}>
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <span>{language}</span>
          <i className="fas fa-solid fa-toggle-on" onClick={toggleTheme} />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder={`${search}`}
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              {search}
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

// export default  withLanguageContext(Navbar)

export default Navbar
