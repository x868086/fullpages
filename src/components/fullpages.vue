<template>
    <div v-on:wheel="changeIndex($event)">
        <transition-group tag="div" v-bind:name="updown"
        v-on:enter="enter"
        v-on:leave="leave">
            <div class="items" 
            v-for="(list,index) in pages" 
            v-bind:key="bgcolor[index]['name']"
            v-bind:style="{'background-color':bgcolor[index]['bg']}"
            v-show="index===curIndex"
            v-on:transitionend="toTop"
            >{{bgcolor[index]['name']}}
              <slot 
              v-for="slotIndex in pages"
              v-bind:slotindex="slotIndex"
              v-bind:name="'slotContent'+slotIndex"
              v-bind:state="state"
              v-if="slotIndex==index"
              ></slot>
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
          name:'default Page1',
          bg:'#5c0'
      },
      {
          name:'default Page2',
          bg:'#50c'
      },
      {
          name:'default Page3',
          bg:'#05c'
      }
      ]
      }
    },
    pages:{
      type:Number,
      default:3
    }
  },  
    data:function(){
        return  {
            curIndex:0,
            updown:"",
            aniCount:0,
            canScroll:true,
            state:"",
            ccc:""
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
        if(this.curIndex >this.pages-1){/*索引号从0开始所以要减1*/
          this.curIndex=0;
          return
        }
      }

      if(e.deltaY<0){
        this.updown='down';
        this.curIndex --;
        if(this.curIndex<0){
          this.curIndex=this.pages-1;/*索引号从0开始所以要减1*/
          return
        }
      }
      

    },

    toTop:function(){
      this.aniCount ++;
      if(this.aniCount===2){
        this.canScroll=true;
        this.aniCount=0;
        this.state="transitionend"
      }
    },

    enter:function(){
      this.state="enter";
    },

    leave:function(){
      this.state="leave";
    }
  }
}
</script>

