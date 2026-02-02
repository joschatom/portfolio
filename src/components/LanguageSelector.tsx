import { useTranslation } from "react-i18next";
import "../styles/lang-selector.css"

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  return (
    <select
      id="lang-select"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">{t((k) => k.langs.en)}</option>
      <option value="de">{t((k) => k.langs.de)}</option>
    </select>
  );
}
 
export default LanguageSelector;