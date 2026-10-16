
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PagePlaceholder from "./pages/PagePlaceholder";

import "./App.css";

function AppLayout() {
  const {pathname} = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`site-background ${
          isHome ? "" : "site-background--blurred"
        }`}
        aria-hidden="true"
      />

      <Navbar />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route
            path="/experience"
            element={<PagePlaceholder title="Experience" />}
          />
          <Route
            path="/about"
            element={<PagePlaceholder title="About Me" />}
          />
          <Route
            path="/skills"
            element={<PagePlaceholder title="Skills" />}
          />
          <Route
            path="/education"
            element={<PagePlaceholder title="Education" />}
          />
          <Route
            path="/contact"
            element={<PagePlaceholder title="Contact" />}
          />
          <Route
            path="*"
            element={<PagePlaceholder title="Page Not Found" />}
          />
        </Routes>
      </div>
    </>
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
