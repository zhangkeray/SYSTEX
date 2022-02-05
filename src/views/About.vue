<template>
  <div class="container mx-auto" style="width: 30rem;">
    <Kid v-on:test="click" :child1="childmsg1" :child2="childmsg2"></Kid>
  </div>  
</template>

<script>
import Kid from '../components/Kid.vue'
export default {
  components:{Kid},
  
  setup(){
  },
  data(){
    return {
      childmsg1: "請輸入帳號",
      childmsg2: "請輸入密碼"
    }
  },
  methods:{
    click(val){
      var result = JSON.parse(val);
      alert(
        "account: " + result.msg1 + 
        "password: " + result.msg2 + 
        "birthday: " + result.msg3
      )
    }
  }
}
</script>

<style scoped>
</style>
