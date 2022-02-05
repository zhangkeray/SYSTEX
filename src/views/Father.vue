<template>
    <div>
        <Child v-bind:child="obj" v-bind:child2="'12345'" @test="myclick"/>
    </div>
</template>
<script>
import Child from '../components/Child.vue'
export default {
    components:{Child},
    data(){
        return{
            father: "3",
            obj: {t1: 'Danny', t2: 'Anita', t3: 'Louis'}
        }
    },

    beforemount(){
    },


    methods:{
        myclick(val){
            console.log(val);
            alert(val);
        },
        myclickref(){
            console.log(this.$refs.testcom);
            this.fatherdata="4";
        }       

    },
    
}
</script>