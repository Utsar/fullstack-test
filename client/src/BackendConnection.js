import axios from 'axios';

const backEnd = process.env.BACKEND_URL;
// const server = process.env.SERVER;

export const backend = axios.create({
  baseURL: backEnd,
  headers: {
    accepts: 'application/json',
  },
});
