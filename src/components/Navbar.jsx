import { Briefcase, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center text-white">
            <Briefcase size={20} />
          </div>
          <span className="font-semibold text-gray-900 text-lg">TalentScout</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Jobs</a>
          <a href="#" className="hover:text-gray-900">Companies</a>
          <a href="#" className="hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Post a job</button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">
            <User size={16} /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
