import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Hello user!',
    counter: 0,
    colorCode: 'blue'
  },
  getters: { //getters => return val of state in components by mapGetters.
    getMessage(state){
      return state.message
    },
    getCounter(state){
      return state.counter
    },
    counterSquared(state){
      return state.counter * state.counter
    },
    getColorCode(state){
      return state.colorCode
    }
  },
  mutations: { //function change value of state 
    setMessage (state, msg){
      state.message = msg
    }, 
    setIncrementCounter(state){
      state.counter++
    },
    setDecrementCounter(state){
      state.counter--
    },
    setColorCode (state, code){
      state.colorCode = code
    }
  },
  actions: { //
    // changeMessage({commit}, msg){
    //   commit('setMessage', msg)
    // },
    incrementCounter({commit}){
      commit('setIncrementCounter')
    },
    decrementCounter({commit}){
      commit('setDecrementCounter')
    },
    changeColor({commit}, event){
      commit('setColorCode', event.target.value)
    },
    handleMessageInputChanges({commit}, event){
      commit('setMessage', event.target.value)
      if(event.keyCode === 13){
        commit('setIncrementCounter')
      }
    }
  },
  modules: {
  }
})