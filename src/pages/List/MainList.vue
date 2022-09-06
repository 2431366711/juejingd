<template>
    <div class="mainlist">
        <div class="header-top">
            <header-main></header-main>
        </div>
        <div class="header-bottom">
            <header-list></header-list>
        </div>
        <div class="bottom">
        <div class="list">
            <list-main></list-main>
        </div>
        <div class="sidebar">
            <side-bar></side-bar>
        </div>
        </div>
       
    </div>
</template>

<script>
import ListMain from './ListMain'
import HeaderMain from './HeaderMain' 
import HeaderList from './HeaderList'
import SideBar from './sidebar/SideBar.vue'
    export default {
        components:{
            HeaderMain,
            HeaderList,
            ListMain,
            SideBar
        },
        setup(){
         
          
        }
    }
</script>

<style lang="less"  scoped>

.mainlist{
   height: 100%;
   background: #eeee;
   .header-top{
    background: white;
    height: 64px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eef1f0;
}
.header-bottom{
     background: white;
    box-shadow: 2px 2px 2px 0px #eeee;
    height: 50px;
    display: flex;

    justify-content: center; 
    margin-bottom: 20px; 
}
.bottom{
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 1000px;
    margin: 0 auto;
   
}
.list{
     background: white;
    width: 700px;
    height: 100%;
    
}
.sidebar{
    width: 250px;
    height: 100px;
    background: whitesmoke;
}
}

</style>