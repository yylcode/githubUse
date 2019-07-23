<template>
	<div class="hello">     
		<span v-if="islogin">欢迎您！</span>
		<span v-else>请您登陆</span>
		<li 
			v-for="(item,index) in sortItems">
			{{item.id}}--{{item.name}}--{{item.age}}
		</li> 
		<!-- 不加 v-pre -->
		<!-- <p>{{msg}}</p>
		<p v-pre>{{msg}}</p> -->
		<!-- v-cloak  配合 display:none 使用， 避免闪烁 -->
		<!-- v-once 只渲染一次 后面的渲染会跳过该元素

		<!-- 父组件给子组件传值 -->
		父组件的值：<input type="text" v-model="myname"> -->
		<myextend :myName="myname" v-on:parentOn="parentOn"></myextend> -->
		<!-- 子组件给父组件传值 -->
		 
		父组件的值：<span>{{parentmsg}}</span>
	
	</div>
</template>

<script>

import myextend from './myExtend.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
	  myname:'ddd',
	  parentmsg:'',
      msg: 'Welcome to Your Vue.js App',
      islogin:false,
      mydata:[
        {id:1,name:'zhangsan',age:32},
        {id:2,name:'lisi',age:903},
        {id:3,name:'wangmazi',age:12}
      ]
    }
  },
   components:{
	myextend
   },
  	computed:{
		sortItems:function () {  
			return this.mydata.sort(function (a,b) { 
				return b.age-a.age;
			})
		}

  
	},
	methods: {
		parentOn(childmsg){
			this.parentmsg=childmsg
		}
	}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
