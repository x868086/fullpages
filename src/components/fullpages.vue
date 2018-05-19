<template>
    <div>
        <transition-group tag="div" v-bind:name="updown">
            <div class="items" 
            v-for="(list,index) in pages" 
            v-bind:key="bgcolor[index]['name']"
            v-bind:style="{'background-color':bgcolor[index]['bg']}"
            v-show="index===curIndex"
            v-on:wheel="changeIndex($event)"
            v-on:transitionend="toTop">{{bgcolor[index]['name']}}
            </div>
        </transition-group> 
    </div>
</template>


<style>
      .items{
        width:100%;
        height:100%;
        position:absolute;
      }
    

      .up-enter-active{
        transition: all 1s ease;
        transform:translateY(0%);
      }

      .up-leave-active{
        transition: all 1s ease;
        transform:translateY(-100%);
      }

      .up-enter{
        transform:translateY(100%);
      }

      .up-leave{
        transform:translateY(0%);
      }


      .down-enter-active{
        transition: all 1s ease;
        transform:translateY(0%);
      }

      .down-leave-active{
        transition: all 1s ease;
        transform:translateY(100%);
      }

      .down-enter{
        transform:translateY(-100%);
      }

      .down-leave{
        transform:translateY(0%);
      }
</style>


<script>
export default {
  props:{
    bgcolor:{
      type:Array,
      default:function(){
        return [
      {
          name:'defaultPage1',
          bg:'#c09'
      },
      {
          name:'defaultPage2',
          bg:'#c90'
      },
      {
          name:'defaultPage3',
          bg:'#9c0'
      },
      {
          name:'defaultPage4',
          bg:'#90c'
      }
      ]
      }
    },
    pages:{
      type:Number,
      default:4
    }
  },  
    data:function(){
        return  {
            curIndex:0,
            updown:"",
            aniCount:0,
            canScroll:true
        }
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

        if(this.curIndex >this.pages-1){
          this.curIndex=0;
        }
      }

      if(e.deltaY<0){
        this.updown='down';
        this.curIndex --;

        if(this.curIndex<0){
          this.curIndex=this.pages-1;
        }
      }
      

    },

    toTop:function(){
      this.aniCount ++;
      if(this.aniCount===2){
        this.canScroll=true;
        this.aniCount=0;
      }
    }
  }
}
</script>

