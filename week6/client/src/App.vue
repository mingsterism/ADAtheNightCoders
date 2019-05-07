<template>
  <div id="app">
    <input @keyup.enter="addTask()" type="text">
    <ul>
      <li v-for="(task, index) in myTasks" :key="index">{{task.task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      myTasks: []
    };
  },
  methods: {
    addTask() {
      console.log("adding task");
      fetch("http://localhost:3000/insertTask", {
        method: "POST",
        body: JSON.stringify({ task: "Clean the cow" }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  },
  mounted() {
    const data = (async function() {
      const myTasks = await fetch("http://localhost:3000/mytodos");
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
