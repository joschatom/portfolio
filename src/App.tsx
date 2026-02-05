import { Route, Routes } from "react-router";
import HomePage from "./pages/Home.tsx";
import AboutMePage from "./pages/AboutMe.tsx";
import ProjectPage from "./pages/Projects.tsx";
function App() {


  return <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about-me" element={<AboutMePage/>}/>
      <Route path="/projects" element={<ProjectPage/>}/>
      <Route path="/*" element={<><h1>Not Found</h1></>}/>
    </Routes>
  </>;
}

export default App;
