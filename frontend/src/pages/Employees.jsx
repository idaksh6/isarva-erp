import React, { useState, useEffect } from 'react';
import { Users, Plus, Mail, Phone, Briefcase } from 'lucide-react';
import { api } from '../api/client';
import Modal from '../components/Modal';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', department: 'Engineering', email: '', phone: '', salary: 90000 });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await api.get('/employees');
      if (res.data?.success) setEmployees(res.data.data);
    } catch (err) {
      console.warn('API error, using fallback');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/employees', formData);
      if (res.data?.success) {
        setEmployees([res.data.data, ...employees]);
        setIsModalOpen(false);
        setFormData({ name: '', role: '', department: 'Engineering', email: '', phone: '', salary: 90000 });
      }
    } catch (err) {
      alert('Error adding employee');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Human Resources & Workforce</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage team directory, compensation records, department roles, and staff status.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={18} />
          <span>Add Employee</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {employees.map(emp => (
          <div key={emp.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>
                {emp.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className={emp.status === 'Active' ? 'badge badge-success' : 'badge badge-warning'}>{emp.status}</span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{emp.name}</h3>
              <div style={{ fontSize: '0.825rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{emp.role}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{emp.department}</div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /><span>{emp.email}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /><span>{emp.phone}</span></div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register New Team Member">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input required className="form-control" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ramesh Chandra" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Job Title / Role</label>
              <input required className="form-control" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Senior Developer" />
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select className="form-control" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })}>
                <option value="Engineering">Engineering</option>
                <option value="Sales & Mktg">Sales & Marketing</option>
                <option value="Operations">Operations</option>
                <option value="HR">Human Resources</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" required className="form-control" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@isarva.in" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-control" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98000 00000" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Add Member</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
