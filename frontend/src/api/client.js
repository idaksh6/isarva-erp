import axios from 'axios';

// In production on Vercel / demoweb.isarva.in/isarva-erp, uses /isarva-erp/api or local proxy
export const api = axios.create({
  baseURL: import.meta.env.DEV ? '/isarva-erp/api' : '/isarva-erp/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
