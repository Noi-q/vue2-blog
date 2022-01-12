// import {reqData} from '../../api/get/Home.js'
import Axios from 'axios'

const state = {
  content:[
    {
      id:'001',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'002',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'003',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'004',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'005',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'006',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'001',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    },
    {
      id:'007',
      title:'Hello Wrold!',
      introduce:'基于HTML5的在线文档',
      date:Date.now()
    }
  ]
}
const mutations = {}
const actions = {
  Data(){
    console.log(1)
    Axios.get('http://localhost:8080/api/person').then(
      res => {
        console.log(res.data)
      }
    )
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}