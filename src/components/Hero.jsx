import { Sparkles } from "lucide-react";

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-rose-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-14">
        <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white shadow-sm text-sm text-gray-700 mb-6">
          <Sparkles size={16} className="text-yellow-500" />
          Smart job matches powered by AI
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Find your next role with better matches
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Tell us what you want. We’ll surface roles that actually fit your skills and interests.
        </p>

        <div className="mt-8 bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <input
              type="text"
              placeholder="Role, skill, or company"
              className="col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch?.((p) => ({ ...p, q: e.target.value }))}
            />
            <input
              type="text"
              placeholder="Location"
              className="col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch?.((p) => ({ ...p, location: e.target.value }))}
            />
            <button
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
