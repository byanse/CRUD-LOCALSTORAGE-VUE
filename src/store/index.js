import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: { id: '', nombre: '', categoria: [], estado: '', numero: 0}
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      console.log(payload)
      state.tareas.push(payload)
      localStorage.setItem('tareas1', JSON.stringify(state.tareas))
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas1', JSON.stringify(state.tareas))
    },
    tarea(state, payload) {
      if (!state.tareas.find(item => item.id === payload)){
        console.log('entro aquí')
        router.push('/')
        return 
      }
      state.tarea = state.tareas.find(item => item.id === payload)
      localStorage.setItem('tareas1', JSON.stringify(state.tareas))
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas1', JSON.stringify(state.tareas))
    }
  },
  actions: {
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('tareas1')) {
        console.log('existe')
        const tareas = JSON.parse(localStorage.getItem('tareas1'))
        commit('cargar', tareas)
      } else {
        localStorage.setItem('tareas1', JSON.stringify([]))
      }
    },
    setTareas({ commit }, tarea) {
      console.log(tarea)
      commit('set', tarea)
    },
    deleteTarea({commit}, id){
      commit('delete', id)
    },
    setTarea({commit}, id){
      commit ('tarea', id )
    },
    updateTarea({commit}, tarea){
      commit ('update', tarea)
    }

  },
  modules: {
  }
})

/* el state es nuestro array, el payload sera nuestra tarea*/
/* cuando llamemos a la accion setTareas, tenemos que empujar tarea a dentro del array por eso usamos el codigo escrito en esta linea 16 */
/* esta tarea va a venir de nuestro formulario */
/* las tareas se envian desde las vistas */