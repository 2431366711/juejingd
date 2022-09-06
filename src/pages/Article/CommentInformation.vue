<template>
    <div class="comment">
       <div class="commenttop">
        <h4>评论</h4>
        <div class="box">
            <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image" alt="">
            <textarea placeholder="输入评论(Enter换行，Ctrl+Enter发送)" ></textarea>
        </div>
       </div>
       <div class="commenthot"></div>
       <div class="commentall">
        <h4>全部评论  ({{articleinfo.replies.length}})</h4>
        <div class="commentalllisst" v-for="item in newarray" :key="item">
          
            <main-component :commentinfo="item"></main-component>
        </div>
       </div>
    
     <div class="buttonall" v-show="isShow === true">
        <el-button type="primary"  @click="btnClick"  plain>查看全部{{articleinfo.replies.length}}条信息</el-button>
    </div>
    </div>
    
</template>

<script>
import {ref} from 'vue'
import MainComponent from './comment/MainComment.vue'
    export default {
        props:{
         articleinfo:{
            type:Array,
            default(){
                return []
            }
          }
        },
        components:{
            MainComponent
        },
       
        setup(props){
           let counter = ref(30)
           let newarray = ref([])
          
           let isShow = ref(false)
           if(props.articleinfo.replies.length>30){
            
              for(let i=0;i<30;i++){
             newarray.value.push(props.articleinfo.replies[i])
             
             }
             isShow.value = true
             
           }
           else{
            for(let i=0;i<props.articleinfo.replies.length;i++){
             newarray.value.push(props.articleinfo.replies[i])
           }
           }
           const btnClick = ()=>{
              for(let i=counter.value;i<props.articleinfo.replies.length;i++){
                newarray.value.push(props.articleinfo.replies[i])   
              }

              isShow.value=false
              
           }
           
           return{newarray,btnClick,isShow,counter}
           
    }
 }
</script>

<style lang="less" scoped>
.comment{
   
    padding: 20px;
    background: white;
    width:100%;
    box-sizing: border-box;
}
.commenttop{
   margin-bottom: 20px;
  h4{
    margin-bottom: 15px;
  }  
 .box{
 display: flex;
 
 img{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        border: 1px solid #eee;
        margin-right: 20px ;
    }
    textarea{
        
        background: #eee;
        border:1px solid #eee;
        border-radius: 3px;
        resize: none;
        height: 60px;
        width: 100%;
    }
    textarea::placeholder{
        padding: 3px;
        color: #919192;
        font-size: 14px;
         
    }
    }
   
}
.commentall{
    h4{
        margin-bottom: 15px;
    }
    .commentalllisst{
        width: 100%;
        padding: 12px 0;
  

    }
}
.buttonall{
    box-sizing: border-box;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 40px;
    .el-button{
       width: 100%;
       height: 40px;
    }
}
</style>