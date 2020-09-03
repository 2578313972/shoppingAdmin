import axios from '../utils/axios'
const login = {
  login: data => axios.post('/api/login',
    data
  )
}
export {
  login
}
