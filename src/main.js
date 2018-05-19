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
          name:'Page1',
          bg:'#c09'
      },
      {
          name:'Page2',
          bg:'#c90'
      },
      {
          name:'Page3',
          bg:'#9c0'
      },
      {
          name:'Page4',
          bg:'#90c'
      },
      ]
  },
  components:{
    fullpages:fullpages
  }
})
