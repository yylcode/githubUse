<template>
    <div>
        <span>这是父组件:(输入值传递到子组件并显示出来)</span>
        <input type="text" v-model="msg">
        <bas :parentchild="msg" v-on:getchild="getchild"></bas>
        <span>子组件传来的值：{{childspan}}</span>
        <router-link :to="'b'" replace tag="li">跳转到B</router-link>
         <p>{{this.$route.params.age}}</p>
        <button @click="topageb">点击跳转（$route.push）</button>
    </div>
</template>
<script>
    import bas from './B.vue'
export default{
    name:'A',
    data(){
        return {
            msg:'',
            childspan:''
        }
    },
    components:{
        bas
    },
    methods: {
        getchild(childinfo){
            this.childspan = childinfo
        },
        printInfo(){
            console.log("父组件的函数")
        },
        topageb(){
            this.$router.push({path:'/b',params:{
                title:'$router.push传值，paramss'
            }})
        }
    }
}
</script>
<style>

</style>