import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const analyzeFile = async (/*file: File*/) => {
  const response = await api.post('/analyze'/*, file*/);
  return response.data;
}