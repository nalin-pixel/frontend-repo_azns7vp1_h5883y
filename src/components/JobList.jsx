import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function JobList({ filters }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchJobs() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (filters?.q) params.set("q", filters.q);
        if (filters?.location) params.set("location", filters.location);
        const res = await fetch(`${API_BASE}/api/jobs?${params.toString()}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
    return () => controller.abort();
  }, [filters]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Recommended roles</h2>
          <p className="text-sm text-gray-600">Personalized suggestions based on your search</p>
        </div>
        <span className="text-sm text-gray-500">{loading ? "Loading..." : `${jobs.length} results`}</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <article key={job.id} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">{job.type}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">{job.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-900 font-semibold">{job.salary ? `$${job.salary}/yr` : "Competitive"}</span>
              <a href={job.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:text-blue-700">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
