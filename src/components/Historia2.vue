<template>
  <div class="container py-3 fondo2">
    <div class="row justify-content-center">
        <div class="col">
            <h3 class="fw-bold">Historias de Juan</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <form v-on:submit.prevent>
                <div class="mb-3">
                    <input v-model="texto2" type="text" class="form-control" placeholder="Ingrese su comentario">
                </div>
                <button class="btn btn-primary" @click="agregar">Submit</button>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <ul class="list-group">
                <li class="list-group-item" v-for="item of texto" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data(){
        return{
            texto2:'',
            texto:[] 
        }
    },
    computed:{
        ...mapState(['textosJuan'])
    },
    methods:{
        ...mapMutations(['actualizar']),
        agregar(){
            this.texto.push('Juan dice: '+this.texto2);
            this.textosJuan.push('Juan dice: '+this.texto2);
            this.texto2='';
            this.textosJuan.forEach(element => {
                console.log(element)
            });
            this.actualizar();
            this.textosJuan.shift();
        }
    }
}
</script>

<style>
.fondo2{
    background-color: rgb(159, 159, 216);
}

</style>