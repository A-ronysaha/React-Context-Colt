import React, { useContext } from "react";
import { LanguageContext } from "../Context/Languagecontext";
const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me",
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi",
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
  },
};

export default function Form() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { email, signIn, password, remember } = words[language];
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center mt-1">
        <div className="row">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center nb-3">{signIn}</h2>
              <select className="form-select" value={language} onChange={changeLanguage}>
                <option value="">Change Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>

              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    {email} ::
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    {password} ::
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        {remember}{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success">{signIn}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
