const homesidebar ={
    namespaced: true,
    state:{
        data:'',
        isShow:false
    },
    getters:{},
    mutations:{
        time(state){
            const date = new Date().getHours()
            if(date<6){
                state.data="晚上好!"
            } 
            else if(date<11){
              state.data = "早上好！"
            }
            else if(date<13){
              state.data = "中午好!"
            }
            else if (date<20){
              state.data = "下午好!"
              
            }
            else{
              state.data="晚上好!"
            }             
        },
        scrollPosition(state){
           
                if(scrollY > 1000){
                   state.isShow = true
                }
                if(scrollY<=1000){
                    state.isShow=false
                }
   
        }
    },
    actions:{},
    modules:{}
}

export default homesidebar