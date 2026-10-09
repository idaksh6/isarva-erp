import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  FileText,
  Users,
  Building2,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function Sidebar({ collapsed, setCollapsed }) {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Inventory & Stock', path: '/inventory', icon: Package },
    { name: 'Invoices & Billing', path: '/invoices', icon: FileText },
    { name: 'HR & Employees', path: '/employees', icon: Users },
    { name: 'CRM & Clients', path: '/customers', icon: Building2 },
    { name: 'System Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside
      style={{
        width: collapsed ? '80px' : '260px',
        minHeight: '100vh',
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          padding: '1.5rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-glow)',
              flexShrink: 0
            }}
          >
            <ShieldCheck size={24} color="#ffffff" />
          </div>
          {!collapsed && (
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                ISARVA<span style={{ color: 'var(--accent-primary)' }}>.ERP</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>
                ENTERPRISE v2.4
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={{ padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
        {!collapsed && (
          <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Main Navigation
          </div>
        )}

        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-gradient)' : 'transparent',
                boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                transition: 'all 0.2s ease',
                justifyContent: collapsed ? 'center' : 'flex-start'
              })}
              title={collapsed ? item.name : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Cloud Status / Bottom Banner */}
      {!collapsed && (
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>Live Cloud Sync</span>
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>demoweb.isarva.in</p>
        </div>
      )}

      {/* Collapse Toggle Button */}
      <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-secondary btn-sm"
          style={{ width: '100%', padding: '0.5rem' }}
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ChevronLeft size={18} /><span>Collapse</span></div>}
        </button>
      </div>
    </aside>
  );
}
