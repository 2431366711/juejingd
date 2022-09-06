<template>
    <div class="recommendation" :style="{height:420+480*heightrow+otherheight*120+'px'}">
     <div class="titleone">
        <h3>相关推荐</h3>
     </div>
     
    
     <div class="list" v-for="item in userarray"  :key="item" >
         
        <div class="top">
            <ul>
                <li>{{item.author.loginname}}</li>
                <li>|</li>
                <li>5个月前</li>
                <li>|</li>
                <li>javascript</li>
            </ul>
        </div>
        <div class="center" @click="btnClick(item)">
            <h4>{{item.title}}</h4>
        </div>
        <div class="bottom">
        <ul>
        <li>
            <el-icon :size="16" > <View color="#919192"></View> </el-icon>
            <a href="javascript:;">2065</a>
        </li>
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

    </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
    export default {
        props:{
          userarray :{
            type:Array,
            default(){
                return []
            }
          }
        },
        setup(props){
           const router = useRouter()
           const btnClick = (item)=>{
              router.push('/article/author/'+item.author.loginname+'/id/'+item.id)
            setTimeout(function(){
                location.reload()   
            },100) 
            //router.push('/home')
           }

           //自动下拉
           let newarray = ref([])
        //    let counter = ref(4)
           let otherheight = ref(0)
           let heightrow = ref(0)
           
             window.addEventListener("scroll",function(){

                let scorllheight = document.documentElement.scrollHeight
                let clientheight = document.documentElement.clientHeight
                let scrolltop = document.documentElement.scrollTop.toFixed(0)
               
                if(scorllheight - clientheight == scrolltop){
                    console.log("legnth",props.userarray.length)
                    console.log("数字",(props.userarray.length+1)%4)
                    if((props.userarray.length+1)%4===0&&props.userarray.length>4){
                        let counter = (props.userarray.length+1)/4
                         console.log(counter)
                         if(heightrow.value<counter-1){
                          setTimeout(function(){
                            heightrow.value++
                           },1000)
                         }
                    }
                    else if(props.userarray.length==1||props.userarray.length==2||props.userarray.length==3){
                        otherheight.value =0
                        heightrow.value = 0
                        
                    }
                    else{
                        let counter = ((props.userarray.length+1)/4)
                        console.log(counter)
                         if(heightrow.value<counter-2){
                          setTimeout(function(){
                            heightrow.value++
                           },1000)
                         }
                         else{
                            setTimeout(function(){
                            otherheight.value = (props.userarray.length+1)%4
                           },1000)
                         }
                    }
                    
                   
                   
                 
                    
                }
            })
           

           return {

            btnClick,newarray,heightrow,otherheight
           }
        }
    }
</script>

<style lang="less" scoped>
a{
    text-decoration: none;
    h4{
        color: black;
    }
}
 .recommendation{
    overflow: hidden;
    width: 100%;
 }
 .titleone{
    height: 50px;
  
    border-bottom: 1px solid #eee;
    line-height: 50px;
 }
 .list{
    cursor: pointer;
     border-bottom: 1px solid #eee;
     padding: 20px 0;
    .top{
        margin-bottom: 10px;
        ul{

            list-style: none;
            display: flex;
            
            li{
             margin-right: 16px;
             color: #919192;
             font-size: 14px;
            }
        }
    }
    .center{
        margin-bottom: 10px;
    }
    .bottom{
       ul{
        list-style: none;
        display: flex;

        li{
            display: flex;
            align-items: center;
           margin-right: 15px;
           a{
            color: #919192;
            margin-left: 5px;
            font-size: 14px;
            text-decoration: none;
           }
        }
       }
         
    }
 }
</style>