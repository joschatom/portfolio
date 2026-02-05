import { useTranslation } from "react-i18next";
import useTranslatedTitle from "../helpers/useTranslatedTitle";
import Navigation from "../components/Navigation";

import "../styles/pages/projects.css"

function ProjectEntry({ name, desc, links }: { name: string, desc: string, links: Record<string, string> }) {
 
  return (
    <>
      <h2>
        {name}
      </h2>
      <h4>{desc}</h4>
      <div className="links">
        {Object.entries(links).map(([name, url]) => <a href={url}>{name}</a>)}
      </div>
    </>
  );
}

function ProjectPage() {
  const { t } = useTranslation("projects");
  useTranslatedTitle(t, {});

  return (
    <>
      <h1>Projects</h1>

      <div className="project-container">
        <ProjectEntry  name="AntOS Project" desc="Simple operating system" links={{
            "Github": "github.com",
            "Abc": "abc.invalid",
        }}/>
        <ProjectEntry name="Flake Lang" desc="Flake Programming Language" links={{
            Github: "github.com"
        }}/>
      </div>

      <Navigation prev="/about-me" next="/" />
    </>
  );
}

export default ProjectPage;
