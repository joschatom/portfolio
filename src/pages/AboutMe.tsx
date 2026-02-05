import { useTranslation } from "react-i18next";
import "../styles/pages/aboutme.css";
import LanguageSelector from "../components/LanguageSelector";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import Navigation from "../components/Navigation";
import photo from "../assets/photo.jpg"

function AboutMePage() {
  const { t } = useTranslation("aboutme");
  useTranslatedTitle(t, { test: "ABC" });

  return (
    <>
      <h1>{t((k) => k.title)}</h1>
      <LanguageSelector />
      <Navigation next="/projects" prev="/" />
      <div className="viewport">
        <p>
          My name is Joscha Egloff and I'm currently 16 Years old and very
          passionate about programming. I've been programming for already 5
          years as a hobby. I'm intrested in all kinds of areas from osdev to
          webdev and am currently doing a practical year.
        </p>
        <img src={photo}/>
        <p>
          My name is Joscha Egloff and I'm currently 16 Years old and very
          passionate about programming. I've been programming for already 5
          years as a hobby. I'm intrested in all kinds of areas from osdev to
          webdev and am currently doing a practical year.
        </p>
        <p>
          My name is Joscha Egloff and I'm currently 16 Years old and very
          passionate about programming. I've been programming for already 5
          years as a hobby. I'm intrested in all kinds of areas from osdev to
          webdev and am currently doing a practical year.
        </p>
      </div>
    </>
  );
}

export default AboutMePage;
