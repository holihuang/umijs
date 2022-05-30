import axios from 'axios';

let instance = axios.create({
  // baseURL: '/a'
});

// 请求拦截
instance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
