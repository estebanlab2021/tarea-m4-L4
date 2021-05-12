import { createStore } from 'vuex'

export default createStore({
    state: {
        textosAlex: [],
        textosJuan: [],
        total: []
    },
    mutations: {
        actualizar: state => state.total = state.total.concat(state.textosAlex, state.textosJuan),
        resetear: state => { state.total = [], state.textosAlex = [], state.textosJuan = [] }
    },
    actions: {},
    modules: {}
})