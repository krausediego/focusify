import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.2:3000/api',
  headers: {
    Authorization:
      'basic eyJhbGciOiJIUzI1NiIsImtpZCI6Ik41SXhuaUw3b2NJVXpPZFYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Nvb3Jlc25lcW54cmN6dXBqZWJlLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIyZDdlNzM4Mi05MmQxLTQ2YmQtYjZlZi1jZGNlMGM1ZjRjNDUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI2NDI2OTQ4LCJpYXQiOjE3MjYzNDA1NDgsImVtYWlsIjoiZGllZ29lbWFudWVsa0BnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGllZ29lbWFudWVsa0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMmQ3ZTczODItOTJkMS00NmJkLWI2ZWYtY2RjZTBjNWY0YzQ1In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MjYzNDA1NDh9XSwic2Vzc2lvbl9pZCI6Ijc2NzY2NzFlLTIxNzYtNGNiNS1hYzI1LTExY2Q1ZGYxNmYzYSIsImlzX2Fub255bW91cyI6ZmFsc2V9.EbmdHGw1tRXZOeywaBvzzjKpL2KCdF5UK8UzRDVLWWY',
  },
});

api.interceptors.response.use(
  async response => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return response;
  },
  error => {
    console.log('ERROR NO INTERCEPTOR', error.response);

    return Promise.reject(error);
  },
);
