import React, { useEffect, useState } from 'react';

interface DashboardData {
  stats: {
    users: number;
    revenue: number;
  };
  analytics: {
    formatted_data?: unknown[];
    summary: string;
  };
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch dashboard data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center mt-20">Loading DevDash...</div>;

  if (!data) return <div className="text-red-500 text-center mt-20">Error loading data.</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          DevDash
        </h1>
        <p className="text-slate-400 mt-2">Enterprise Analytics Overview</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition-colors">
          <h2 className="text-sm uppercase tracking-wide text-slate-500 mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-white">Users: {data.stats.users}</p>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-purple-500 transition-colors">
          <h2 className="text-sm uppercase tracking-wide text-slate-500 mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-green-400">Revenue: ${data.stats.revenue}</p>
        </div>

        {/* Analytics Card */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-pink-500 transition-colors md:col-span-2 lg:col-span-1">
          <h2 className="text-sm uppercase tracking-wide text-slate-500 mb-2">AI Insights</h2>
          <p className="text-lg italic text-pink-300">Trend: {data.analytics.summary}</p>
        </div>
      </div>
    </div>
  );
};
