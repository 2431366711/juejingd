<template>

    <div id="article">
       <div class="header">
         <header-main></header-main>
        </div>  
        <div class="bottom">
            <div class="list">
                <div class="info">
                    <article-info :articleinfo="array"></article-info>
                </div>
                <div class="commentinfo">
                   <comment-information :articleinfo="array"></comment-information>
                </div>
                <div class="similarreco">
                    <similar-recommendation :userarray="userarray" ></similar-recommendation>
                </div>
                
            </div>
           
            <div class="sidebar">
                
                <side-bar :articleinfo="array"></side-bar>
            </div>

        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import { ref} from 'vue'
import {useRoute} from 'vue-router'
import ArticleInfo from './ArticleInfo.vue'
import HeaderMain from '../List/HeaderMain.vue'
import CommentInformation from './CommentInformation'
import SimilarRecommendation from './SimilarRecommendation'
import SideBar from '../Article/sidebar/SideBar.vue'
    export default {
        components:{
            HeaderMain,
            ArticleInfo,
            CommentInformation,
            SimilarRecommendation,
            SideBar
        },
        setup(){
            const route = useRoute()
            let array = ref([])
            let userarray = ref([])
            axios.get(`https://cnodejs.org/api/v1/topic/${route.params.id}`).then(res=>{ 
                array.value=res.data.data
            })
            axios.get(`https://cnodejs.org/api/v1/user/${route.params.author}`).then(res=>{ 
                userarray.value =res.data.data.recent_topics
            })
           
              
            return {
                array,userarray
            }
            
        }
    }
</script>

<style lang="less" scoped>

#article{
   height: 100%;
   background: #eeee;
}
.header{
    background: white;
    height: 64px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eef1f0;
    margin-bottom: 20px;
}

.bottom{
    display: flex;
    justify-content: space-between;
   
    width: 1200px;
    margin: 0 auto;
   
}
.list{
    box-sizing: border-box;
    
    
    width: 800px;
    .commentinfo{
        margin-bottom: 20px;
    }
    .info{
        margin-bottom: 20px;
    }
    .similarreco{
        padding: 10px;
        background: white;
    }
    
}
.sidebar{
    width: 300px;
    height: 300px;

}
</style>