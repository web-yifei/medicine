import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    isTabbarShow:true,
=======
>>>>>>> 1aa31052cb6c7d9b74305dcfe8afed6b0fefb38c
    my_title:{
      headPic:'',
      headName:'',
      Id:'',
    },
    isTabbarShow:true
  },
  mutations: {
    getMyInfo(state,params){
      state.my_title.headPic = params.pic
      state.my_title.headName = params.username
      state.my_title.Id = params.id
    },
<<<<<<< HEAD
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    },
=======
>>>>>>> 1aa31052cb6c7d9b74305dcfe8afed6b0fefb38c
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    },
<<<<<<< HEAD

   
=======
>>>>>>> 1aa31052cb6c7d9b74305dcfe8afed6b0fefb38c
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
