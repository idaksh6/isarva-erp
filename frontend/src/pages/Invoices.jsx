import React, { useState, useEffect } from 'react';
import { FileText, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { api } from '../api/client';
import Modal from '../components/Modal';

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [formData, setFormData] = useState({ client: '', amount: 5000, dueDate: '', items: 1 });

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const res = await api.get('/invoices');
      if (res.data?.success) setInvoices(res.data.data);
    } catch (err) {
      console.warn('API error, using fallback');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/invoices', formData);
      if (res.data?.success) {
        setInvoices([res.data.data, ...invoices]);
        setIsModalOpen(false);
        setFormData({ client: '', amount: 5000, dueDate: '', items: 1 });
      }
    } catch (err) {
      alert('Error creating invoice');
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'Paid' ? 'Pending' : 'Paid';
    try {
      await api.patch('/invoices/' + id + '/status', { status: nextStatus });
      setInvoices(invoices.map(inv => inv.id === id ? { ...inv, status: nextStatus } : inv));
    } catch (err) {
      setInvoices(invoices.map(inv => inv.id === id ? { ...inv, status: nextStatus } : inv));
    }
  };

  const filtered = invoices.filter(i => filterStatus === 'All' || i.status === filterStatus);
  const totalBilled = invoices.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Invoices & Revenue Billing</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Generate corporate customer invoices, track collections, and reconcile accounts.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={18} />
          <span>Create Invoice</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total Receivables</span>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>${totalBilled.toLocaleString()}</div>
        </div>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Invoices Paid</span>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--success)', marginTop: '0.25rem' }}>
            {invoices.filter(i => i.status === 'Paid').length}
          </div>
        </div>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Pending Payment</span>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--warning)', marginTop: '0.25rem' }}>
            {invoices.filter(i => i.status === 'Pending').length}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {['All', 'Paid', 'Pending', 'Overdue'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={filterStatus === status ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem' }}>Invoice ID</th>
              <th style={{ padding: '1rem' }}>Client / Company</th>
              <th style={{ padding: '1rem' }}>Amount (USD)</th>
              <th style={{ padding: '1rem' }}>Issue Date</th>
              <th style={{ padding: '1rem' }}>Due Date</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Toggle Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(inv => (
              <tr key={inv.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '1rem', fontWeight: 700, fontFamily: 'monospace', color: 'var(--accent-primary)' }}>{inv.id}</td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{inv.client}</td>
                <td style={{ padding: '1rem', fontWeight: 700 }}>${inv.amount.toLocaleString()}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{inv.date}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{inv.dueDate}</td>
                <td style={{ padding: '1rem' }}>
                  <span className={inv.status === 'Paid' ? 'badge badge-success' : (inv.status === 'Pending' ? 'badge badge-warning' : 'badge badge-danger')}>
                    {inv.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button onClick={() => toggleStatus(inv.id, inv.status)} className="btn btn-secondary btn-sm">
                    Mark as {inv.status === 'Paid' ? 'Pending' : 'Paid'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Generate New Invoice">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label className="form-label">Client Name</label>
            <input required className="form-control" value={formData.client} onChange={(e) => setFormData({ ...formData, client: e.target.value })} placeholder="e.g. Apex Global Logistics" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Amount ($ USD)</label>
              <input type="number" required className="form-control" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input type="date" className="form-control" value={formData.dueDate} onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Generate Invoice</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
