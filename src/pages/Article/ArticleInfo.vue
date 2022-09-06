<template>
    <div style="background:white ;padding:20px">
       <div class="title"><h2>{{articleinfo.title}}</h2></div>
       <div class="author">
        <div class="authorinfo">
            <img :src="articleinfo.author.avatar_url" alt="">
            <div class="box">
                <p class="authorname">{{articleinfo.author.loginname}}</p>
                <p class="articleinfo">
                    <span>{{time}}</span>
                    <span>阅读 {{articleinfo.visit_count}}</span>
                </p>
            </div>
        </div>
        <div class="authorbutton">
            <el-button type="primary" plain>+关注</el-button>
        </div>
       </div>
       <p class="content" v-html="articleinfo.content"></p>
    </div>
</template>

<script>
    export default {
        props:{
          articleinfo:{
            type:Array,
            default(){
                return []
            }
          }
        },
        setup(props){
            const date = new Date(props.articleinfo.create_at)
            let month = date.getMonth()+1
            month = month<10 ? '0'+month : month
            let day = date.getDate()
            day = day<10 ? '0'+day : day
            let year = date.getFullYear()
            year = year<10 ? '0'+year : year
            let hours = date.getHours()
            hours = hours<10 ? '0'+hours : hours
            let minutes  = date.getMinutes()
            minutes = minutes<10 ? '0'+minutes : minutes
            let time = `${year}年${month}月${day}日  ${hours}:${minutes}`
            return {
                time
            }
        }
        
    }
</script>

<style lang="less">

.title{
   margin-bottom:20px
}
.author{
    margin-bottom:30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .authorinfo{
        display: flex;
        img{
            border:1px solid #eee ;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .box{
            letter-spacing:1px;
            
            .authorname{
                font-size: 16px;
                font-weight: 400;
                margin-bottom:3px;
            }
            .articleinfo{
                font-size: 14px;
                color: #919192;
                span{
                    margin-right: 5px;
                }
            }
        }
    }
    .authorbutton{}
}
.content{
   
    line-height: 30px;
    h2{
        padding:5px 0 ;
    }
   pre, ul{
        margin-left: 55px;
    }
    p{
       text-indent: 2em; 
    }
    img{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding-right: 2em;
    }
   }

   

</style>