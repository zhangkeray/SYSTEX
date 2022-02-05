<template>

  <div>
    <p>1 日元 0.25 台幣</p>
    <div>日元 <input type="text" v-model="jpy"></div>
    <div>新台幣 <input type="text" v-model="twd"></div>

  </div>
</template>
<script>
export default {
      data(){
        return {
          jpy: "",
          twd:"",
          
        }
      }, 
      
      watch:{
        jpy(val){
            this.twd = val * 0.25;
          },
        
        twd(val){
            this.jpy = val / 0.25;
          }
        }
      
}

</script>