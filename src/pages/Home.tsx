import { useTranslation } from "react-i18next";
import "../styles/pages/home.css";
import LanguageSelector from "../components/LanguageSelector";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";

function HomePage() {
  const { t } = useTranslation("home");
  const navigate = useNavigate();
  useTranslatedTitle(t);

  return (
    <>
      <LanguageSelector />

      <a id="src-link" href="http://example.com">
        {t((k) => k["src-link"])}
      </a>

      <div className="bg">
      </div>
        <div className="box">
          <h1>{t((k) => k.heading)}</h1>
          <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
          <div className="quicklinks">
            <button>About Me</button>
            <button>Projects</button>
            <button>Socials</button>
          </div>
        </div>
      <div className="nav">
        <svg viewBox="0 0 24 24" onClick={() => navigate(-1)}>
          <path d="M5 12H19M19 12L13 6M19 12L13 18" />
        </svg>

        <svg viewBox="0 0 24 24" onClick={() => navigate("/about-me")}>
          <path d="M5 12H19M19 12L13 6M19 12L13 18" />
        </svg>
      </div>

      <Navigation next="/about-me" prev="/" />
    </>
  );
}

export default HomePage;
