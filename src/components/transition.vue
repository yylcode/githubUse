<template>
    <div id="transition">
        <h1>header</h1>  
        <button @click="show=!show">点击</button>
         <p v-if="show">一段文字es</p>
            <hr>
        访问量计数：{{$store.state.count}}
    </div>
</template>
<script>
import store from '../vuex/store'
export default{
    name:'transition',
    data(){
        return {
            show:true
        }
    },
    store,
    mounted () {
        this.$store.commit('add')
    }
    // ,
    // beforeCreate(){
    //     console.log('实例创建前');
    // },
    // created () {
    //     console.log('实例已创建');
    // },
    // beforeMount () {
    //     console.log('实例编译前');
    // },
    // mounted () {
    //     console.log('实例已编译')
    // },
    // beforeUpdate () {
    //     console.log('实例更新前')
    // },
    // updated () {
    //     console.log('实例已更新')
    // },
    // beforeDestroy () {
    //     console.log('实例销毁前')
    // },
    // destroyed () {
    //     console.log('实例已销毁')
    // }
}
</script>
<style>

</style>