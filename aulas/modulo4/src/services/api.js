import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.11.212.37:4851',
  // baseURL: 'http://spotify.myhobbies.com.br',
});

export default api;
