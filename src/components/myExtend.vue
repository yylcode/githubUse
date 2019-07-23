<template>
    <div>
            <div>子组件的值：{{myName}}</div>
            <input type="text" v-model="childmsg">
            <button @click="clickbutton">子组件</button>
    </div>
    
</template>
<script>
export default{
    name:'myExtend',
    data(){
        return{
            msg:'hello extends',
            childmsg:''
        }
    },
    props:{
        myName:String,
        required:true
    },
    methods:{
        clickbutton:function(){
            this.$emit('parentOn',this.childmsg)
        }
    }
}
</script>
<style>
</style>