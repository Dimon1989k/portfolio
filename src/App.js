import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/index";
import About from "./containers/about/index";
import Portfolio from "./containers/portfolio/index";
import Resume from "./containers/resume/index";

import NavBar from "./component/navBar";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particles from "./utils/particles";

function App() {
  const location = useLocation();
  const [renderParticleHome, setRenderParticleHome] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
       setRenderParticleHome(location.pathname === "/portfolio");
  }, [location.pathname]);

  return (
    <div className="App">
      {renderParticleHome && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particles}
        />
      )}

      <NavBar />

      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myportfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
