import React, { useState, useEffect } from 'react';
import { Package, Plus, Search, Filter, Trash2, AlertTriangle, CheckCircle } from 'lucide-react';
import { api } from '../api/client';
import Modal from '../components/Modal';

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: 'Hardware', sku: '', stock: 10, minStock: 5, price: 100 });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const res = await api.get('/inventory');
      if (res.data?.success) setItems(res.data.data);
    } catch (err) {
      console.warn('API error, using default inventory:', err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/inventory', formData);
      if (res.data?.success) {
        setItems([res.data.data, ...items]);
        setIsModalOpen(false);
        setFormData({ name: '', category: 'Hardware', sku: '', stock: 10, minStock: 5, price: 100 });
      }
    } catch (err) {
      alert('Error creating item');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to remove this SKU?')) return;
    try {
      await api.delete('/inventory/' + id);
      setItems(items.filter(i => i.id !== id));
    } catch (err) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const filtered = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.toLowerCase().includes(search.toLowerCase());
    const matchesCat = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  const categories = ['All', ...new Set(items.map(i => i.category))];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Inventory & Warehouse Management</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Track real-time stock levels, SKUs, asset pricing, and replenishment alerts.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={18} />
          <span>Add New SKU Item</span>
        </button>
      </div>

      <div className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search SKU or product title..."
            className="form-control"
            style={{ paddingLeft: '36px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="form-control"
          style={{ width: '180px' }}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem' }}>SKU Code</th>
              <th style={{ padding: '1rem' }}>Product Name</th>
              <th style={{ padding: '1rem' }}>Category</th>
              <th style={{ padding: '1rem' }}>Unit Price</th>
              <th style={{ padding: '1rem' }}>Stock In Hand</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '1rem', fontFamily: 'monospace', fontWeight: 600, color: 'var(--accent-primary)' }}>{item.sku}</td>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</td>
                <td style={{ padding: '1rem' }}><span className="badge badge-primary">{item.category}</span></td>
                <td style={{ padding: '1rem', fontWeight: 700 }}>${item.price.toLocaleString()}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700 }}>{item.stock}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>/ min {item.minStock}</span>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span className={item.status === 'In Stock' ? 'badge badge-success' : (item.status === 'Low Stock' ? 'badge badge-warning' : 'badge badge-danger')}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm" title="Delete SKU">
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register New Inventory SKU">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input required className="form-control" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Cisco Nexus Core Switch" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">SKU Identifier</label>
              <input required className="form-control" value={formData.sku} onChange={(e) => setFormData({ ...formData, sku: e.target.value })} placeholder="e.g. NET-NX-90" />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-control" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                <option value="Hardware">Hardware</option>
                <option value="Networking">Networking</option>
                <option value="Furniture">Furniture</option>
                <option value="Machinery">Machinery</option>
                <option value="Security">Security</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Initial Stock</label>
              <input type="number" required className="form-control" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Min Threshold</label>
              <input type="number" required className="form-control" value={formData.minStock} onChange={(e) => setFormData({ ...formData, minStock: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Price ($)</label>
              <input type="number" required className="form-control" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save SKU</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
