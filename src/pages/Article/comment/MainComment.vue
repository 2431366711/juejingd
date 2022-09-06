<template>
    <div class="maincon"> 
      <div class="userinfo">
        <img :src="commentinfo.author.avatar_url" alt="">
        <div class="info">
            <p class="name">
              {{commentinfo.author.loginname}}
            </p>
             <div class="commentcontent" v-html="commentinfo.content">
             </div>
        <ul class="bottom">
        <li>
            <el-icon :size="16" > <Pointer color="#919192" /></el-icon>
            <a href="javascript:;">12</a>
        </li>
        <li>
            <el-icon :size="16"><ChatDotRound color="#919192"/> </el-icon>
            <a href="javascript:;">5</a>
        </li>
       </ul>
        </div>
      </div>
      <div class="createtime">
        <p>{{showtime}}</p>
      </div>
    </div>
</template>

<script>
import {ref,computed} from 'vue'
    export default {
        props:{
            commentinfo:{
                type:Array,
                default(){
                    return [] 
                }
            }
        },
        setup(props){
           let date = new Date(props.commentinfo.create_at)
           
           let oldtimer = ref(date.getTime())
           let nowtimer = ref(new Date().getTime())
           let newtimer = ref(nowtimer.value-oldtimer.value)
           
           const time = computed(
               ()=>{
                return newtimer.value /(1000*3600*24)
               }
           )
           let showtime = ref("")
           if(time.value<1){
             showtime = "今天"
           }
           else if(time.value<31){
              showtime = `${time.value.toFixed(0)}天前`
           }
           else if(time.value<365){
            showtime = `${(time.value/30).toFixed(0)}月前`
           }
           else if(time.value>365){
            showtime = `${(time.value/356).toFixed(0)}年前`
           }

          
           

           return{showtime}
        }
    }
</script>

<style lang="less">
.maincon{
  display: flex;
  justify-content: space-between;
  
}
 .userinfo{
    display:flex;
    img{
        height:30px;
        width: 30px;
        border-radius: 50%;
        border: 1px solid #eee;
        margin-right: 20px;
    }
    .info{
        
      .name{

        font-size: 16px;
        color:#000;
        margin-bottom:5px; 
      }
      .commentcontent{

        font-size:14px;
        color: #919192;
        margin-bottom: 5px;
        img{
            
            height: 100%;
            width: 100%;
            border-radius:0 ;
        }
      }
      ul{
        list-style: none;
        display: flex;
        align-items: center;
        li{
            display:flex;
            align-items: center;
           margin-right: 20px;
          
           a{
            margin-left: 3px;
            font-size:14px;
            text-decoration: none;
            color:#919192
           }
        }
      }
    }
 }
 .createtime{
  white-space: nowrap;
  font-size: 14px;
  color: #919192;
 }
</style>