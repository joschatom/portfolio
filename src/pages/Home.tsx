import { useTranslation } from "react-i18next";
import "../styles/pages/home.css";
import LanguageSelector from "../components/LanguageSelector";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";
import { getFixedT } from "i18next";

function HomePage() {
  const { t} = useTranslation("home");

  const navigate = useNavigate();
  useTranslatedTitle(t);

  return (
    <>
      <LanguageSelector />

      <a id="src-link" href="http://example.com">
        {t((k) => k["src-link"])}
      </a>

      <div className="bg"></div>
      <div className="box">
        <h1>{t((k) => k.heading)}</h1>
        <h2>A software developer  from Switzerland</h2>
        <div className="quicklinks">
          <button onClick={() => navigate("/about-me")}>{getFixedT(null, "aboutme")(k => k.title)}</button>
          <button onClick={() => navigate("/projects")}>{getFixedT(null, "projects")(k => k.title)}</button>
        </div>
      </div>

      <Navigation next="/about-me" prev="/" />
    </>
  );
}

export default HomePage;
