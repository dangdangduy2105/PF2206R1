import  * as types from "./mutation_types";

export default {
    changeTitle: ({ commit }, data) => {
        commit(CHANGE_TITLE, data)
    },
    start: ({commit}) =>{
        commit(types.START)
    },
    pause: ({commit}) =>{
        commit(types.PAUSE)
    },
    stop: ({commit}) =>{
        commit(types.STOP)
    },
}   