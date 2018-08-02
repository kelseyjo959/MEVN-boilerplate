// imports axios to be used by router/index.js 
// this base setup is used in services/PostsService.js
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
