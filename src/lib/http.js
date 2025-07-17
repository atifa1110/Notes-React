import Axios from 'axios';
import { config } from '@/lib/config';
import { TokenManager } from './token-manajer';

const http = Axios.create({
  baseURL: config.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const accessToken = TokenManager.getAccessToken();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { http };