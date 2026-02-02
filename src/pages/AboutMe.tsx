import { useTranslation } from "react-i18next";
import "../styles/pages/home.css";
import LanguageSelector from "../components/LanguageSelector";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import Navigation from "../components/Navigation";

function AboutMePage() {
  const { t } = useTranslation("aboutme");
  useTranslatedTitle(t, { test: "ABC"});

  return (
    <>
      <h1>{t((k) => k.title)}</h1>
      <LanguageSelector />
      <Navigation next="/" prev="/"/>
    </>
  );
}

export default AboutMePage;
