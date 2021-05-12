<template>
  <div class="container py-3 fondo">
    <div class="row justify-content-center">
        <div class="col">
            <h3 class="fw-bold">Historias de Alex</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <form v-on:submit.prevent>
                <div class="mb-3">
                    <input v-model="texto1" type="text" class="form-control" placeholder="Ingrese su comentario">
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
            texto1:'',
            texto:[] 
        }
    },
    computed:{
        ...mapState(['textosAlex'])
    },
    methods:{
        ...mapMutations(['actualizar']),
        agregar(){
            this.texto.push('Alex dice: '+this.texto1);
            this.textosAlex.push('Alex dice: '+this.texto1);
            this.texto1='';
            this.textosAlex.forEach(element => {
                console.log(element)
            });
            this.actualizar();
            this.textosAlex.shift();
        }
    }
}
</script>

<style>
.fondo{
    background-color: rgb(208, 208, 221);
}

</style>