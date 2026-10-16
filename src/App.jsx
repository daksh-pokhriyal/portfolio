
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PagePlaceholder from "./pages/PagePlaceholder";

import "./App.css";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
  path="/projects"
  element={<Projects />}
/>

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
    </BrowserRouter>
  );
}

export default App;
