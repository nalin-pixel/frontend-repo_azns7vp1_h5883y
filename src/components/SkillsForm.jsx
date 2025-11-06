import { useState } from "react";

export default function SkillsForm({ onChange }) {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("Mid");

  function update(next) {
    onChange?.(next);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your profile</h3>
          <span className="text-sm text-gray-500">Improve matches</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <input
            value={skills}
            onChange={(e) => { setSkills(e.target.value); update({ skills: e.target.value, experience }); }}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Top skills (e.g., React, Node.js, SQL)"
          />
          <select
            value={experience}
            onChange={(e) => { setExperience(e.target.value); update({ skills, experience: e.target.value }); }}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Intern</option>
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Staff</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800">Update</button>
        </div>
      </div>
    </section>
  );
}
