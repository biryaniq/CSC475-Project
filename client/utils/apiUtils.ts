import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const analyzeFile = async (file: File | null) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post('/analyze', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}