<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="(task, index) in myTasks" :key="index">{{task.task}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      myTasks: []
    };
  },
  components: {
    HelloWorld
  },
  mounted() {
    const data = (async function() {
      const myTasks = await fetch("http://localhost:3000/mytodos");
      // console.log(await myTasks.json())
      const tasks = await myTasks.json();
      return tasks;
    })();
    data.then(d => {
      this.myTasks = d;
      console.log(d);
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
