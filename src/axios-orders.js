import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://e-papi-api.herokuapp.com/',
});

// const instance = axios.create({
//   //mistake
//   baseURL: 'http://localhost:4000/',
// });

export default instance;
