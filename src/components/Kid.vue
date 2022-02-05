<template>
  <div>
    <form action="#" method="get" class="card" id="form">
      <div class="card-header">
        {{title}}
      </div>

      <div class="card-body">
        <div class="row justify-content-center mb-1">
          <div class="col-sm-3">
            <label for="text" class="text-danger">Account:</label>
          </div>
          <div class="col-sm-6">
            <input type="text" id="text" class="form-control form-control-sm" v-model="Account" v-bind:placeholder="child1"/>
          </div>
        </div>

        <div class="row justify-content-center mb-1">
          <div class="pwd col-sm-3">
            <label for="password" class="text-danger">Password:</label>
          </div>
          <div class="col-sm-6">
            <input type="password" id="password" class="form-control form-control-sm" v-model="Password" v-bind:placeholder="child2"/>
          </div>
        </div>

        <div class="row justify-content-center mb-1">
          <div class="col-sm-3">
            <label for="bday" class="text-danger">Birthday:</label>
          </div>
          <div class="col-sm-6">
            <input type="date" id="bday" class="form-control form-control-sm col-sm-4" v-model="Birthday"/>
          </div>
        </div>
        <hr> 
      </div>
      
      <div class="btn-group" role="group">
        <button type="submit" class="btn btn-primary" @click="submitInput">Login</button>
        <button type="reset" class="btn btn-secondary" @click="resetInput">Clear</button>   
        <button type="button" class="btn btn-danger" @click="click">Jump</button>
      </div>
      
      <p v-if="Account.length > 0">Account:{{Account}}</p>
      <p v-if="Password.length > 0">Password:{{Password}}</p>
      <p v-if="Birthday.length > 0">Birthday:{{Birthday}}</p>  
    </form>
  </div>   
</template>

<script>
export default {
  emits:['test'],
  props:{
    child1: String,
    child2: String
  },
  setup(){
  },
  data(){
    return {
      title: "CRM 登入",
      Account: "",
      Password: "",
      Birthday: "",
      input: "",
      childmsg1: "請輸入帳號",
      childmsg2: "請輸入密碼"
      
    };
  },
  methods:{
    resetInput() {
      this.Account = "";
      this.Password = "";
      this.Birthday = "";
    },
    submitInput(){
      this.$router.push({
      path:'/Home',  
      query: {id:this.Account}
      });
    },
    click(){
      let obj = new Object;
      obj.msg1 = this.Account;
      obj.msg2 = this.Password;
      obj.msg3 = this.Birthday;
      this.$emit('test', JSON.stringify(obj));
    },    
  },
}
</script>

<style scoped>
</style>