import Data from './get/Home.js'

export const reqData = ()=>{
  return Data({
    url:'/person',
    method: 'get'
  })
}