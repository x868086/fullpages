// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fullpages from './components/fullpages.vue';
import page1 from './components/page1.vue';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bgcolor:[
      {
          name:'import Page1',
          bg:'#c09'
      },
      {
          name:'import Page2',
          bg:'#c90'
      },
      {
          name:'import Page3',
          bg:'#9c0'
      },
      {
          name:'import Page4',
          bg:'#90c'
      },
      ],
      pages:4
  },
  components:{
    fullpages:fullpages,
    page1:page1
  }
})
