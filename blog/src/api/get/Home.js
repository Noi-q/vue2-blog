import Axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const Data = Axios.create({
  baseURL:'/api',
  timeout:5000
})

Data.interceptors.request.use((config)=>{
  nprogress.start()
  return config
})

Data.interceptors.request.use((res)=>{
  nprogress.done()
  return res.data
},(error)=>{
  return Promise.reject(new Error('faile'))
})

export default Data