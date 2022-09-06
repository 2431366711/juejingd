<template>
    <div>
      <div class="top">
         <div class="image">
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
      </div>
      <div class="words">
        <a href="javascript:;">下载稀土掘金App</a>
        <p>一个帮助开发者成长的社区</p>
      </div>
      </div>
      <div class="bottom">
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.top{
    height: 100px;
    width: 100%;
    background: white;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    .image{
            margin-right:20px;
           img{
            height: 60px;
            width: 60px;
           }
        }
        .words{
            display: flex;
            flex-direction: column;
            justify-content: center;
            a{
                display: block;
                text-decoration: none;
                font-weight: 500;
                color:black;
                color:14px;
                margin-bottom:10px;
            }
            p{
                color:#919192;
                font-size: 12px;
            }
        }
}
.bottom{
    height: 260px;
    width: 100%;
    background: white;
    img{
        height: 100%;
        width: 100%;
    }
}
   
</style>