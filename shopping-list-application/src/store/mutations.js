import * as types from './mutation_types'
import _ from 'underscore'
import {WORKING_TIME, RESTING_TIME} from './config'

function findById (state, id) {
    return _.findWhere(state.shoppinglists, { id: id })
}

function togglePomodoro (state, toggle) {
    if (_.isBoolean(toggle) === false) {
        toggle = !state.isWorking
    }
    state.isWorking = toggle
    state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME
}

function tick (state) {
    if (state.counter === 0) {
        togglePomodoro(state)
    }
    state.counter--
}

export default {
    [types.CHANGE_TITLE](state, data){
        findById(state, state.id).title = data.title
    },

    [types.START](state){
        state.started = true,
        state.paused = false,
        state.stopped = false,
        state.interval = setInterval(() => tick(state), 1000)
    },

    [types.PAUSE](state){
        state.started = false,
        state.paused = true,
        state.stopped = false,
        clearInterval(state.interval)
    },

    [types.STOP](state){
        state.started = false,
        state.paused = false,
        state.stopped = true,
        togglePomodoro(state, true)
    },

    
}