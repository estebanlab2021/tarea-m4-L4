<template>
  <div class="container bg-light">
    <div class="row justify-content-center">
        <div class="col-5 text-center">
            <h1 class="display-6 fw-bold">HISTORIAS</h1>
        </div>
    </div>
  </div>
  <Historia1 />
  <Historia2 />

  <div class="container">
  
    <div class="row py-3">
        <h4 class="display-6 fw-bold">BUSCADOR</h4>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h5>¿Qué estas buscando?</h5>
                <form class="d-flex" v-on:submit.prevent>
                    <input class="form-control me-2" v-model="query" list="datalistOptions" type="text" placeholder="Search">
                        <datalist id="datalistOptions">
                            <option v-for="item of total" :key="item">{{item}}</option>
                        </datalist>
                    <button class="btn btn-outline-primary" @click="accion">Search</button>
                </form>
            </div>
        </nav>
        <div class="col-8 bg-light">
            <ul class="list-group">
                <li class="list-group-item" v-show="mostrar"  v-for="item of filtrados" :key="item">{{item}}</li>
            </ul>
        </div>
        <div class="col-4 text-center">
            <button class="btn btn-outline-danger" @click="borrar">Borrar</button>
        </div>

    </div>
  </div>
  
</template>

<script>
import Historia1 from '@/components/Historia1.vue'
import Historia2 from '@/components/Historia2.vue'
import {mapState} from 'vuex'

export default {
    components: {
    Historia1,
    Historia2
  },
  data(){
        return{
            historias: [],
            query: '',
            mostrar:false,
            filtrados: []
        }
    },
    computed:{
        ...mapState(['total']), 
    },
  methods:{
        //...mapMutations(['resetear']),
        busqueda (){
            this.historias = this.historias.concat(this.total);
            console.log(this.query);
            //this.filtrados = this.filtrados.concat(this.historias.filter(el => el === this.query));
            console.log(this.historias.filter(el => el.toLowerCase().indexOf(this.query.toLowerCase()) > -1));
            this.filtrados = this.filtrados.concat(this.historias.filter(el => el.toLowerCase().indexOf(this.query.toLowerCase()) > -1));
        },
        accion(){
            this.mostrar=true;
            this.busqueda();
        },
        borrar(){
            this.filtrados = [];
            this.historias = [];
            this.query = '';
            this.mostrar=false;
            //this.resetear();
            location.reload();


        }
    },
}
</script>

<style>
hr{
border: 5px solid black;
}

</style>