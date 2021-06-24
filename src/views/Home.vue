<template>

<h1 class="my-5">Formularios con Vue</h1>

  <form @submit.prevent="procesarFormulario">
    
<Input :tarea="tarea"/>

  </form>
  <hr />

<ListaTareas />
 
</template>

<script>
// @ is an alias to /src

import Input from '../components/Input.vue'
import {mapActions} from 'vuex'
import ListaTareas from '../components/ListaTareas.vue';
const shortid = require('shortid');


export default {
  name: 'Home',
  components: {Input, ListaTareas},
  data() {
    return {
      tarea: {
        nombre: '',
        id:'',
        categoria: [],
        estado: '',
        numero: 0
      }
    }
  },
    methods:{
      ...mapActions(['setTareas']),
      procesarFormulario(){
        console.log(this.tarea)
        if(this.tarea.nombre.trim() === ''){
          console.log('campo Vacío')
          return
        }
        console.log('no esta vacio')


        // generar id 

        this.tarea.id = shortid.generate()
        console.log(this.tarea.id )

        //envian los datos 
        this.setTareas(this.tarea)

        //Limpiar datos
        this.tarea ={
          id:'',
          nombre: '',
        categoria: [],
        estado: '',
        numero: 0

        }
    }
},

}

</script>