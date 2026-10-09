import React, { useState } from 'react';
import { Settings as SettingsIcon, Globe, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { api } from '../api/client';

export default function Settings() {
  const [apiStatus, setApiStatus] = useState('Not checked');

  const testHealth = async () => {
    try {
      setApiStatus('Checking...');
      const res = await api.get('/health');
      setApiStatus('Active (' + res.data.platform + ')');
    } catch (err) {
      setApiStatus('Offline / Standalone preview mode');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>System Configuration & Deployment</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Domain settings, Vercel cloud environment, and backend connectivity.</p>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={18} color="var(--accent-primary)" />
          <span>Domain & Subpath Routing</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Production URL</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>https://demoweb.isarva.in/isarva-erp/</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Vite Base Path</span>
            <span style={{ fontWeight: 600 }}>/isarva-erp/</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Hosting Target</span>
            <span style={{ fontWeight: 600 }}>Vercel Monorepo Serverless</span>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Server size={18} color="var(--accent-primary)" />
          <span>Node.js Backend Health</span>
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Test the REST API endpoints and backend server state.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={testHealth} className="btn btn-primary btn-sm">Ping Backend API</button>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: apiStatus.includes('Active') ? 'var(--success)' : 'var(--text-muted)' }}>
            {apiStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
