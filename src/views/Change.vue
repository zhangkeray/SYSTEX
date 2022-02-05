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
      jpy: 0,
      lists: ['gg', 'ee', 'rr'],
        }
      }, 
      
      computed:{
        test(){
          return 123456
        },

        twd:{
          get(){
            return this.jpy * 0.25;
          },
          set(value){
            return (this.jpy = value / 0.25);
          },
        },
      },
}

</script>