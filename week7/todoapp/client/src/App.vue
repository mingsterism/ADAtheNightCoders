<template>
  <div id="app">
    <input @keyup.enter="sendData()" type="text" v-model="message">
    <button @click="sendData()">INSERT DATA</button>
    <ul v-for="(todo, index ) in todos" :key="index">
      <li @click="completed(todo)">{{todo}}</li>
    </ul>
    <h1>Completed Todos</h1>
    <ul v-for="(todo, index ) in completedTodos" :key="(index + 1) * Math.random()">
      <li @click="completed(todo)">{{todo}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "",
      todos: [],
      completedTodos: []
    };
  },
  components: {},
  methods: {
    sendData() {
      fetch("http://localhost:3000/addUser", {
        method: "POST",
        body: JSON.stringify({ myInput: this.message })
      })
        .then(response => {
          if (this.message !== "") {
            response.json().then(data => {
              this.todos.push(data.myInput);
              this.message = "";
            });
          }
        })
        .catch(err => console.log(err));
    },
    completed(selectedTodo) {
      this.completedTodos.push(selectedTodo);
      this.todos = this.todos.filter( (todo) => todo !== selectedTodo)
    }

  }
};
</script>

<style>
