import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XTEnnn3AWs71RXX0_1qfARHskr8NeetM_G5qpwZqGwM',
  },
})
