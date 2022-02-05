<template>
  <div>gogogo</div>
  
</template>
<script>
export default {
    data(){
        return{
            childmsg:"789",
            text:""
        }
    },
    
    props:{    
        child: {
            type: Object,
            // go: 6,
            // default: {t4: 'hello'},
            // require,
            // vaildator:value=>value>2
        },
        child2:String,
        
    },
    emits:['test'],
    methods:{
        click(){
            // alert("uuuu");
            this.$emit('test', this.text); 
        }
    }
}
</script>