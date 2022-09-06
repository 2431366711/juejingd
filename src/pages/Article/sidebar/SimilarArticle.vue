<template>
    <div class="similararticle">
     <div class="words">
        <p>相关文章</p>
     </div>
     <div class="articletitle">
        <div class="titlecon" v-for="item in articlein" :key="item">
            <p class="title">{{item.title}}</p>
            <p class="comment">
                <span>100点赞 </span>
                <span>·</span>
                <span>100评论 </span>
          
            </p>
        </div>
          
     </div>
    </div>
</template>

<script>
    export default {
        props:{
            articlein:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.similararticle{

    box-sizing:border-box;
}
 .words{
   
    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 50px;
    font-size: 16px;
    letter-spacing: 1px;
 }
 .articletitle{
    
 
    .titlecon{
        padding:10px 0;
   
        .title{
            color: #999;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .comment{
            color: #919192;
            font-size: 14px;
            span{
                margin-right: 10px;
                
            }     
        }
    }
 }
</style>