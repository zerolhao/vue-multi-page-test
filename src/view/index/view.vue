<template>
  <div id="app">
    <img alt="Vue logo" src="./../../assets/logo.png" />
    <h1>Home Page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a href="my.html">Go My</a>
  </div>
</template>

<script>
import HelloWorld from './../../components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
