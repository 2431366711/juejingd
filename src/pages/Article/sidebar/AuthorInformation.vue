<template>
    <div class="authortop">
       <div class="authorinfo">
         <img :src="authorin.avatar_url" alt="">
         <div class="words">
            <p class="name">{{authorin.loginname}}</p>
            <p class="title">@gongzhonghaobaomi</p>
         </div>
       </div>
       <div class="counter">
        <p>获得点赞数  {{authorin.score}}</p>
        <p>获得阅读量   {{authorin.score}}</p>
       </div>
    </div>
</template>

<script>
    export default {
       props:{
        authorin:{
            type:Array,
            default(){
                return []
            }
        }
        
       },
       setup(){
     
       } 
    }
</script>

<style lang="less" scoped>
.authortop{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
}
.authorinfo{
    box-sizing: border-box;

    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 10px 20px 0;
    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 1px solid #eee;
        margin-right:20px ;
    }
    .words{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:first-child{
           font-size: 16px;
           color: black;
           
        }
        p:nth-child(2){
            margin: 0;
            font-size: 14px;
            color: #919192;
        }
        
    }
}
.counter{
    box-sizing: border-box;
   
   
    width: 100%;
    padding: 15px 0 0 0;
    p{
        font-size: 14px;
        color: #919192;
        margin-bottom: 10px;
    }
}
</style>