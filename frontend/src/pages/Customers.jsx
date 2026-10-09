import React, { useState, useEffect } from 'react';
import { Building2, Plus, Mail, Phone, MapPin } from 'lucide-react';
import { api } from '../api/client';
import Modal from '../components/Modal';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contactPerson: '', email: '', phone: '', location: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await api.get('/customers');
      if (res.data?.success) setCustomers(res.data.data);
    } catch (err) {
      console.warn('API error, using fallback');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/customers', formData);
      if (res.data?.success) {
        setCustomers([res.data.data, ...customers]);
        setIsModalOpen(false);
        setFormData({ name: '', contactPerson: '', email: '', phone: '', location: '' });
      }
    } catch (err) {
      alert('Error adding client');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>CRM & Corporate Clients</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage customer accounts, purchase history, key contacts, and business contracts.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={18} />
          <span>Add New Client</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {customers.map(cust => (
          <div key={cust.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>{cust.name}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Contact: {cust.contactPerson}</div>
              </div>
              <span className={cust.status === 'Active' ? 'badge badge-success' : 'badge badge-info'}>{cust.status}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Orders</div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{cust.totalOrders}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Total Spent</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent-primary)' }}>${cust.totalSpent.toLocaleString()}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /><span>{cust.email}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /><span>{cust.phone}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /><span>{cust.location}</span></div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Enterprise Client">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label className="form-label">Company Name</label>
            <input required className="form-control" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Tata Digital Ltd" />
          </div>
          <div className="form-group">
            <label className="form-label">Primary Contact Person</label>
            <input className="form-control" value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} placeholder="e.g. Vikram Sethi" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" required className="form-control" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-control" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Location / City</label>
            <input className="form-control" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Hyderabad, India" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Client</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
