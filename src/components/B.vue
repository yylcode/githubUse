<template>
    <div>
        <span>这是子组件:(显示父组件的值){{parentchild}}</span>
        <br>
        <input type="text" name="" id="" v-model="childinfo">
        <button @click="clickchild">点击给父组件传值</button>
        <hr>
        <div>
            <child>
                <!-- 需要插槽才能渲染的内容 -->
            <!-- <p>父组件dell</p>
            <p>lee</p> -->
            </child>
            <hr>
            <childOne>
                <header slot="header">具名插槽父组件内容</header>
                <p>插槽内容</p>
            </childOne>    
        </div>
        <router-link :to="{name:'a',params:{
            'id':1,'name':'sedsese','age':32
        }}">跳转</router-link>
        <button @click="clickParent">调用父组件方法 </button>
        <p>{{this.$route.params.title}}</p>
    </div>
</template>
<script>
    // Vue.component('child', {
    //     template:`
    //         <div>
    //             <p>这是子组件的内容</p>
    //         </div>
    //     `
    // })
export default{
    name:'B',
    data(){
        return {
            childinfo:"" 
        }
    },
    props:{
        parentchild:String
    },
    methods: {
        clickchild(childinfo){
            this.$emit('getchild',this.childinfo)
        },
        clickParent(){
            this.$parent.printInfo()
        }
    },
    activated () {
        
      console.log(this.$route.params.title)  
    
    },
    components: {
        'child':{
            template:`
                <div>
                    <p>这是子组件的内容</p>
                    <slot>插槽默认内容</slot>
                </div>
            `
        },
        'childOne':{
            template:`
                <div>
                    zi
                    <slot name="header">默认header插槽内容</slot>  
                    <slot></slot>  
                </div>
            `
        }
    }

     
}
</script>
<style>

</style>