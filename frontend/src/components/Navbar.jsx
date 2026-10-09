import React, { useState } from 'react';
import { Search, Bell, Sun, Moon, Sparkles, CheckCircle2, User } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header
      style={{
        height: '70px',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 30
      }}
    >
      {/* Search Bar */}
      <div style={{ position: 'relative', width: '340px' }}>
        <Search
          size={18}
          color="var(--text-muted)"
          style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Search ERP modules, invoices, SKU..."
          className="form-control"
          style={{ paddingLeft: '38px', borderRadius: '9999px', height: '38px' }}
        />
      </div>

      {/* Action Icons & Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-secondary btn-sm"
          style={{ borderRadius: '50%', width: '38px', height: '38px', padding: 0 }}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#3b82f6" />}
        </button>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: '50%', width: '38px', height: '38px', padding: 0, position: 'relative' }}
          >
            <Bell size={18} />
            <span
              style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 8px var(--accent-primary)'
              }}
            />
          </button>

          {showNotifications && (
            <div
              className="glass-card animate-fade-in"
              style={{
                position: 'absolute',
                right: 0,
                top: '48px',
                width: '320px',
                padding: '1rem',
                zIndex: 50,
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>Notifications</span>
                <span className="badge badge-primary">3 New</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>New Invoice INV-2026-085</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>$11,200 pending approval</div>
                </div>
                <div style={{ padding: '0.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--warning)' }}>Low Stock Warning</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>Biometric Terminal: 2 remaining</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.35rem 0.75rem 0.35rem 0.35rem',
            background: 'var(--bg-surface-elevated)',
            borderRadius: '9999px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: '0.85rem'
            }}
          >
            IS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)' }}>Isarva Admin</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
