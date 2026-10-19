
import {useState} from "react";
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PagePlaceholder from "./pages/PagePlaceholder";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function AppLayout() {
  const {pathname} = useLocation();
  const isHome = pathname === "/";

  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={`app-shell ${darkMode ? "dark-theme" : ""}`}>
      <div
        className={`site-background ${
          isHome ? "" : "site-background--blurred"
        }`}
        aria-hidden="true"
      />

      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => {
          setDarkMode((current) => !current);
        }}
      />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/skills" element={<Experience />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/education"
            element={<PagePlaceholder title="Education" />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={<PagePlaceholder title="Page Not Found" />}
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
