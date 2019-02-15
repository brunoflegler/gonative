import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.106:3001',
  baseURL: 'http://192.168.56.1:3001',
});

export default api;
