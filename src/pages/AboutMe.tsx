import { useTranslation } from "react-i18next";
import "../styles/pages/aboutme.css";
import LanguageSelector from "../components/LanguageSelector";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import Navigation from "../components/Navigation";
import photo from "../assets/photo.jpg";

function AboutMePage() {
  const { t } = useTranslation("aboutme");
  useTranslatedTitle(t, { test: "ABC" });

  return (
    <>
      <LanguageSelector />
      <Navigation next="/projects" prev="/" />
      <div className="viewport">
        <div>
          <h1 className="general">{t(k => k.title)}</h1>

          <p>{t(k => k.summary)}</p>
          <p>{t(k => k.interest)}</p>

          <h2 className="today">{t(k => k.heading)}</h2>

          <p>
            {t(k => k.today)}
          </p>
        </div>
        <div>
          <div>
            <img src={photo} />
            <ul>
              <li>
                <a href="http://github.com">E-Mail</a>
              </li>
              <li>
                <a href="http://github.com">Github</a>
              </li>{" "}
            
              <li>
                <a href="http://github.com">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMePage;
