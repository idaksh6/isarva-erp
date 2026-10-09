import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Boxes,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  PlusCircle,
  Sparkles,
  Layers,
  AlertCircle
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { api } from '../api/client';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/dashboard/stats');
      if (res.data?.success) {
        setStats(res.data.data);
        setActivities(res.data.activities || []);
      }
    } catch (err) {
      setStats({
        totalRevenue: 248500,
        revenueGrowth: 18.4,
        activeOrders: 142,
        ordersGrowth: 7.2,
        inventoryCount: 1240,
        lowStockAlerts: 6,
        totalEmployees: 48,
        employeeGrowth: 4.5,
        monthlyRevenueChart: [
          { month: 'Jan', revenue: 18500, expenses: 12000, profit: 6500 },
          { month: 'Feb', revenue: 22000, expenses: 13500, profit: 8500 },
          { month: 'Mar', revenue: 27000, expenses: 15000, profit: 12000 },
          { month: 'Apr', revenue: 24000, expenses: 14200, profit: 9800 },
          { month: 'May', revenue: 31000, expenses: 17000, profit: 14000 },
          { month: 'Jun', revenue: 38000, expenses: 19500, profit: 18500 },
          { month: 'Jul', revenue: 42000, expenses: 21000, profit: 21000 },
          { month: 'Aug', revenue: 46500, expenses: 22800, profit: 23700 }
        ],
        departmentDistribution: [
          { name: 'Engineering', count: 18, color: '#3b82f6' },
          { name: 'Sales & Mktg', count: 12, color: '#10b981' },
          { name: 'Operations', count: 10, color: '#f59e0b' },
          { name: 'HR', count: 4, color: '#8b5cf6' },
          { name: 'Finance', count: 4, color: '#ec4899' }
        ]
      });
      setActivities([
        { id: 'ACT-1', timestamp: '10 mins ago', user: 'Aarav Sharma', action: 'Created Invoice INV-2026-085 ($11,200)', type: 'invoice' },
        { id: 'ACT-2', timestamp: '45 mins ago', user: 'Priya Iyer', action: 'Updated stock count for Gigabit Switch (4 units left)', type: 'inventory' },
        { id: 'ACT-3', timestamp: '2 hours ago', user: 'Sneha Patel', action: 'Approved annual leave for Employee EMP-104', type: 'hr' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const kpis = [
    { title: 'Total Revenue', value: '$' + (stats?.totalRevenue || 0).toLocaleString(), change: '+' + (stats?.revenueGrowth || 0) + '%', isPositive: true, icon: DollarSign, color: '#3b82f6', sub: 'vs last month' },
    { title: 'Active Orders', value: (stats?.activeOrders || 0).toString(), change: '+' + (stats?.ordersGrowth || 0) + '%', isPositive: true, icon: ShoppingCart, color: '#10b981', sub: 'in pipeline' },
    { title: 'Inventory Stock', value: (stats?.inventoryCount || 0).toLocaleString(), change: (stats?.lowStockAlerts || 0) + ' low stock', isPositive: false, icon: Boxes, color: '#f59e0b', sub: 'SKUs registered' },
    { title: 'Total Employees', value: (stats?.totalEmployees || 0).toString(), change: '+' + (stats?.employeeGrowth || 0) + '%', isPositive: true, icon: Users, color: '#8b5cf6', sub: 'across 5 units' }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>Enterprise Executive Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Real-time business performance analytics, financial metrics, and resource allocations.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={fetchDashboardData} className="btn btn-secondary btn-sm">Refresh Data</button>
          <a href="/isarva-erp/invoices" className="btn btn-primary btn-sm"><PlusCircle size={16} /><span>New Invoice</span></a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{kpi.title}</span>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: kpi.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: kpi.color }}><Icon size={20} /></div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{kpi.value}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.35rem', fontSize: '0.78rem' }}>
                  <span className={kpi.isPositive ? 'badge badge-success' : 'badge badge-warning'}>{kpi.isPositive ? <ArrowUpRight size={14} /> : <AlertCircle size={14} />}{kpi.change}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{kpi.sub}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Financial Growth Trends</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Monthly Revenue vs Operating Expenses (USD)</p>
            </div>
            <span className="badge badge-primary">YTD 2026</span>
          </div>
          <div style={{ height: '280px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats?.monthlyRevenueChart || []}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} /><stop offset="95%" stopColor="#3b82f6" stopOpacity={0} /></linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} /><stop offset="95%" stopColor="#ec4899" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-strong)', borderRadius: '8px', color: 'var(--text-primary)' }} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#ec4899" strokeWidth={2} fillOpacity={1} fill="url(#colorExp)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Workforce by Department</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Staff distribution across business units</p>
            </div>
            <span className="badge badge-info">{stats?.totalEmployees || 48} Staff</span>
          </div>
          <div style={{ height: '280px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={stats?.departmentDistribution || []} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={5} dataKey="count">
                  {(stats?.departmentDistribution || []).map((entry, index) => (<Cell key={'cell-' + index} fill={entry.color} />))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-strong)', borderRadius: '8px', color: 'var(--text-primary)' }} />
                <Legend formatter={(value) => <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{value}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>System Audit & Activity Stream</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {activities.map((act) => (
            <div key={act.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><Clock size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{act.action}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Triggered by <span style={{ color: 'var(--accent-primary)' }}>{act.user}</span></div>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{act.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
