<template>
  <h1>Lista de Tareas</h1>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categorías</th>
            <th scope="col">Estado</th>
            <th scope="col">Número</th>
            <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tarea, index) in tareas" :key="index">
                <th scope="row">{{index}}</th>
                <td>{{tarea.nombre}}</td>
                <td>
                    <span v-for="(item, i) in tarea.categoria" :key="i">
                        {{
                            tarea.categoria.length  === (index + 1) ? item : item + ', ' 
                        }}
                    </span>
                </td>
                <td>{{tarea.estado}}</td>
                <td>{{tarea.numero}}</td>
                <td>
    <button
        class="btn btn-danger btn-sm"
        @click="deleteTarea(tarea.id)"
    >
        Eliminar
    </button>
    
    <router-link
    class="btn btn-warning btn-sm"
    :to="{
        name: 'Editar',
        params: {
            id: tarea.id
        }
    }"
>
    Editar
</router-link>

</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['tareas'])

    },
    methods: {
         ...mapActions(['deleteTarea'])
    }
};
</script>

<style></style>
