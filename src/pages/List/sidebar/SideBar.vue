<template>
    <div class="sidebar">
       <div class="time">
        <div class="top">
            <span class="box">
            <span class="icon">
                <el-icon :size="22"><Clock/></el-icon>
            </span>
            <span class="words">{{time1}}</span>
            </span>
            
            <el-button class="qiandao-button">去签到</el-button>
        </div>
        <p>点亮你在社区的每一天</p>
       </div>
       <div class="ad" :class="{loaction : isShow}">
        <ad-component></ad-component>
       </div>
       <div class="authorranking">
        <article-ranking></article-ranking>
       </div>
       <div class="connectiontrack"></div>
    </div>
</template>

<script>
import ArticleRanking from './ArticleRanking'
import AdComponent from './AdComponent.vue'
import {ref} from 'vue'
import {useStore} from 'vuex'
    export default {
        components:{
            AdComponent,
            ArticleRanking
        },
        setup(){
            const store = useStore()

            //广告fixed实现
            let isShow = ref(false)             
            window.addEventListener('scroll',function(){
                store.commit("homesidebar/scrollPosition")
                isShow.value = store.state.homesidebar.isShow
            })

            //时间    
            store.commit('homesidebar/time')
            let time1 = store.state.homesidebar.data
            console.log(time1)

            return {
                isShow,time1
            }
            
        }
    }
</script>

<style lang="less" scoped>
  .sidebar{
    box-sizing: border-box;
     
    width: 100%;
  }
  .loaction{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }
  .time{
    background: white;
    padding: 20px;
    margin-bottom: 20px;
     p{
     color:#919192;
     margin-top: 10px;
     text-align: center;
     }
     .top{
     display: flex;
     align-items: center;
     justify-content: space-between;
     .box{
     display:flex;
     align-items: center;
     .icon{
        margin-right: 10px;
     }
     .words{
        font-weight: 700;
        font-size: 18px;
     }
  }
  .qiandao-button{
    border:1px solid #3491d2;
    color:#3491d2;
    height: 30px;
    border-radius: 16px;
  }
 
     }
  }

  
</style>