import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-rest-hacer-comun-production.up.railway.app/'
});

export default instance;
