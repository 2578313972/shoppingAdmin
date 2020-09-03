import axios from 'axios'
let server = axios
// .create({
//   baseURL: 'http://admin.sixblog.com'
// })
server.interceptors.request.use(
  config => {
    console.log('config:', config);
    return config
  },
  error => Promise.reject(error)
)
server.interceptors.response.use(
  response => {
    console.log('response:', response);
    return response
  },
  error => Promise.reject(error)
)

export default server
