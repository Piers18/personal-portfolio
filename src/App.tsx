import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HelloPage from "./pages/HelloPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HelloPage />} />
        <Route path="about-me" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact-me" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
