import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JourneyPage from "./pages/JourneyPage";


export default function App() {
return (
<AppLayout>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/journeypage" element={<JourneyPage />} />
  </Routes>
</AppLayout>
);
}