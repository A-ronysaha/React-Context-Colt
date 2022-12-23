import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";
import { ThemeProvider } from "./Context/Themecontext";
import { LanguageProvider } from "./Context/Languagecontext";
import Themewrap from "./Wrappcomponent/Themewrap";

function App() {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          <Themewrap>
            <Navbar />
            <Form />
          </Themewrap>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
