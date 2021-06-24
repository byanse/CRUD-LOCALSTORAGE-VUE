<template>
  <input
      type="text"
      class="form-control my-2"
      placeholder="Ingresa Nombre"
      v-model.trim="tarea.nombre"
    />

    <div class="my-2">
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="check-1"
          v-model="tarea.categoria"
          value="Javascript"
        />
        <label
          for="check-1"
          class="form-check-label"
        >Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="check-2"
          v-model="tarea.categoria"
          value="Desarrollo"
        />
        <label
          for="check-2"
          class="form-check-label"
        >Desarrollo web</label>
      </div>
    </div>

    <div class="my-2">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="inlineRadio1"
          value="urgente"
          v-model="tarea.estado"
        />
        <label
          class="form-check-label"
          for="inlineRadio1"
        >
          Urgente
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="inlineRadio2"
          value="relax"
          v-model="tarea.estado"
        />
        <label
          class="form-check-label"
          for="inlineRadio2"
        >
          Relax
        </label>
      </div>
    </div>

    <div class="my-2">
      <input
        type="number"
        class="form-control"
        placeholder="numero"
        v-model.number="tarea.numero"
      >
    </div>

    <button
      class="btn btn-block mt-2 btn-dark"
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>
</template>

<script>


export default {
    props:{
        tarea: Object
    },
    computed: {
  bloquear(){
    return this.tarea.nombre.trim() === '' ? true : false
  }
}

}
</script>

<style>

</style>