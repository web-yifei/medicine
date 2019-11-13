import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    my_title:{
      headPic:'',
      headName:'',
      Id:''
    },
    isTabbarShow:true
  },
  mutations: {
    getMyInfo(state,params){
      state.my_title.headPic = params.pic
      state.my_title.headName = params.username
      state.my_title.Id = params.id
    },
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    },
  },
  actions: {
    async getMyInfoAction(store){
      const userid =await Axios({url:'/api/token/validate', headers:{Authorization: localStorage.getItem('token')}})
      const { id } = userid.data
      const list=await Axios({url:'/api/users', method:'post', data:{ id }})
      store.commit('getMyInfo', list.data)
    }
  },
  modules: {
  }
})
