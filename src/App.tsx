import { Route, Routes } from "react-router";
import HomePage from "./pages/Home.tsx";
import AboutMePage from "./pages/AboutMe.tsx";
function App() {

  return <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about-me" element={<AboutMePage/>}/>
      <Route path="/*" element={<>Not Found</>}/>
    </Routes>
  </>;
}

export default App;
