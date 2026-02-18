import { useTranslation } from "react-i18next";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import Navigation from "../components/Navigation";
import en from "../i18n/en";

import "../styles/pages/projects.css";
import LanguageSelector from "../components/LanguageSelector";

function ProjectEntry({
  name,
  desc,
  links,
}: {
  name: string;
  desc: string;
  links: Record<string, string>;
}) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className="links">
        {Object.entries(links).map(([name, url]) => (
          <a href={url}>{name}</a>
        ))}
      </div>
    </div>
  );
}

function ProjectPage() {
  const { t } = useTranslation("projects");
  useTranslatedTitle(t, {});

  return (
    <div className="projects">
      <h1>{t(k => k.title)}</h1>

      <div className="project-container">
        {en.projects.projects.map((e, i) => {
          return (
            <ProjectEntry
              name={t((k) => k.projects[i].name)}
              desc={t(k => k.projects[i].desc)}
              links={e.links}
              key={i}
            />
            
          );
        })}
      </div>

      <Navigation prev="/about-me" next="/" />
      <LanguageSelector/>
    </div>
  );
}

export default ProjectPage;
