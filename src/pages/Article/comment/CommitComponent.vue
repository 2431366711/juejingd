<template>
    <div>
      <div class="userinfo">
        <img :src="commentinfo.author.avatar_url" alt="">
        <div class="info">
            <p class="name">
              {{commentinfo.author.loginname}}
            </p>
             <p class="comment"></p>
             <p class="dianzhan"></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
            commentinfo:{
                type:Array,
                default(){
                    return [] 
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>