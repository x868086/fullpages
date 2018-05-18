// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bgColor:[
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
    ],
    curIndex:0,
    updown:"",
    canScroll:true
  },
  methods:{
    changeIndex:function(e){
      if(!this.canScroll){
        return
      }

      this.canScroll=false;

      if(e.deltaY>0){
        this.updown='up';
        this.curIndex ++;
        if(this.curIndex >3){
          this.curIndex=0;
        }
      }

      if(e.deltaY<0){
        this.updown='down';
        this.curIndex --;
        if(this.curIndex<0){
          this.curIndex=3;
        }
      }
      
        //  this.canScroll=true;

    },

    toTop:function(){
      this.canScroll=true;
    }
  }
})
