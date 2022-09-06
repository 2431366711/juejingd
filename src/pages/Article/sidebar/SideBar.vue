<template>
    <div>
      <div class="authorinfo">
        <author-information :authorin ="array"></author-information>
      </div>
      <div class="ad">
        <ad-component></ad-component>
      </div>
      <div class="similararticle">
       <similar-article :articlein ="array.recent_topics"></similar-article>
     
        
      </div>
      <div class="category">
        
        <article-catalogue></article-catalogue>
      </div>
    </div>

</template>

<script>
import AuthorInformation from './AuthorInformation.vue'
import AdComponent from './AdComponent'  
import SimilarArticle from './SimilarArticle'
import ArticleCatalogue from './ArticleCatalogue'
import axios from 'axios'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
export default {
       
        components:{
            AuthorInformation,
            AdComponent,
            SimilarArticle,
            ArticleCatalogue
        },
        setup(){
          const route = useRoute()
          let array = ref([])
          axios.get(`https://cnodejs.org/api/v1/user/${route.params.author}`).then(res=>{
            console.log(res)
            array.value = res.data.data
          })
          return {array}
        }
    }
</script>

<style lang="less" scoped>
.authorinfo{
    box-sizing: border-box;
    
    width: 100%;
    background: white;
    margin-bottom: 20px;
    padding: 10px 15px;
}
.ad{
    height: 380px;
    width: 100%;

    margin-bottom: 20px;
}
.similararticle{
    box-sizing:border-box;
    padding: 0 10px;
    width: 100%;
    background: white; 
    margin-bottom: 20px;
}
.category{
    height: 300px;
    width: 100%;
    background: white;
}
</style>