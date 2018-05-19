// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fullpages from './components/fullpages.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bgcolor:[
      {
          name:'import Page1',
          bg:'#d05'
      },
      {
          name:'import Page2',
          bg:'#d50'
      },
      {
          name:'import Page3',
          bg:'#50d'
      },
      {
          name:'import Page4',
          bg:'#5d0'
      },
      {
          name:'import Page5',
          bg:'#05d'
      }
      ],
      pages:5
  },
  components:{
    fullpages:fullpages
  }
})
