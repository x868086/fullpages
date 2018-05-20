<template>
    <div class="typefont">
        <span v-for="code in codes" v-html="code"></span>
        <span v-show="show">|</span>
    </div>
</template>

<script>
export default {
    // props=[],
    data:function(){
        return {
            msg:"new Vue({".split("").concat(["</br>","&nbsp&nbsp"],"el:'app'".split("").concat(["<br/>"],["})"])),
            codes:[],
            show:true,
            timerCode:null,
            timerCursor:null
        }
    },
    mounted:function(){
        this.pushMsg();
        this.cursor()
    },
    methods:{
            pushMsg:function(){
                this.timerCode=setInterval(()=>{
                    this.codes.push(this.msg[this.codes.length])//数组每次推送时index自动根据数组自身长度改变
                    console.log(this.codes)
                    if(this.codes.length===this.msg.length){
                        clearInterval(this.timerCode)
                    }
                },200)
            },
            cursor:function(){
                this.timerCursor=setInterval(()=>{
                    this.show=!this.show //定时执行，取反修改
                },500)
            }

    }
}
</script>

<style>
    .typefont{
        position:absolute;
        left:30px;
        bottom:30px;
        font-size:25px;
        font-weight:bold;
    }
</style>




