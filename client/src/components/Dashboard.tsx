import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { AnimatedCard } from './ui/AnimatedCard';
import { LiveChart } from './ui/LiveChart';
import { Activity, Users, DollarSign, Zap } from 'lucide-react';

interface DashboardData {
  users: number;
  revenue: number;
  traffic: number;
  timestamp: string;
}

// Initialize socket outside component to prevent multiple connections
const socket = io('http://localhost:3000');

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData>({
    users: 0,
    revenue: 0,
    traffic: 0,
    timestamp: new Date().toISOString()
  });
  
  const [chartData, setChartData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to real-time server');
    });

    socket.on('dashboard:update', (newData: DashboardData) => {
      setData(newData);
      
      setChartData(prev => {
        const newChartData = [...prev, { time: newData.timestamp, value: newData.revenue }];
        if (newChartData.length > 20) newChartData.shift(); // Keep last 20 points
        return newChartData;
      });
    });

    return () => {
      socket.off('connect');
      socket.off('dashboard:update');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans overflow-hidden relative">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent tracking-tight">
            DevDash <span className="text-white/20 font-light">PRO</span>
          </h1>
          <p className="text-slate-400 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Live System Telemetry
          </p>
        </div>
        <div className="flex gap-4">
           {/* Placeholder for toolbar */}
        </div>
      </header>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Metric 1: Users */}
        <AnimatedCard delay={0.1}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-wider">Active Users</h3>
            <Users className="text-neon-blue w-5 h-5" />
          </div>
          <p className="text-4xl font-bold text-white tabular-nums">{data.users.toLocaleString()}</p>
          <div className="mt-2 text-xs text-neon-blue flex items-center gap-1">
            <Activity className="w-3 h-3" /> +12% from last hour
          </div>
        </AnimatedCard>

        {/* Metric 2: Revenue */}
        <AnimatedCard delay={0.2}>
           <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-wider">Revenue (Live)</h3>
            <DollarSign className="text-neon-purple w-5 h-5" />
          </div>
          <p className="text-4xl font-bold text-white tabular-nums">${data.revenue.toLocaleString()}</p>
          <div className="mt-2 text-xs text-neon-purple">
            Simulated HFT Stream
          </div>
        </AnimatedCard>

        {/* Metric 3: System Load */}
        <AnimatedCard delay={0.3}>
           <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-wider">System Load</h3>
            <Zap className="text-neon-green w-5 h-5" />
          </div>
          <div className="flex items-end gap-2">
             <p className="text-4xl font-bold text-white tabular-nums">{data.traffic}%</p>
             <span className="mb-2 text-slate-500 text-sm">capacity</span>
          </div>
          
          <div className="mt-4 w-full bg-slate-700 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-neon-green transition-all duration-300 ease-out"
              style={{ width: `${data.traffic}%` }}
            />
          </div>
        </AnimatedCard>

         {/* Metric 4: AI Status */}
         <AnimatedCard delay={0.4}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-wider">AI Inference</h3>
            <div className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
          </div>
          <p className="text-lg text-white/90">
             Optimizing routes...
          </p>
          <p className="text-xs text-slate-500 mt-2 font-mono">
             model_v4_quantized.onnx
          </p>
        </AnimatedCard>
      </div>

       {/* Charts Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
        <AnimatedCard delay={0.5} className="lg:col-span-2 flex flex-col">
            <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-6">Revenue Trend (Real-time)</h3>
            <div className="flex-1 min-h-0">
               <LiveChart data={chartData} color="#bc13fe" />
            </div>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
           <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-6">System Health</h3>
           <div className="flex flex-col gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                   <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-neon-green' : 'bg-neon-blue'}`} />
                   <div className="flex-1">
                      <div className="h-2 w-24 bg-slate-700 rounded mb-1" />
                      <div className="h-2 w-16 bg-slate-700/50 rounded" />
                   </div>
                </div>
              ))}
           </div>
        </AnimatedCard>
      </div>
    </div>
  );
};
