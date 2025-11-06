import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsForm from "./components/SkillsForm";
import JobList from "./components/JobList";

function App() {
  const [search, setSearch] = useState({ q: "", location: "" });
  const [profile, setProfile] = useState({ skills: "", experience: "Mid" });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero onSearch={setSearch} />
      <SkillsForm onChange={setProfile} />
      <JobList filters={{ ...search, ...profile }} />
      <footer className="mt-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TalentScout — Smarter job recommendations</p>
          <a className="text-blue-600 hover:text-blue-700" href="https://vitejs.dev" target="_blank" rel="noreferrer">Built with Vite + React</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
