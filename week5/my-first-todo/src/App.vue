<template>
  <div id="app">
    <input type="text">
    <todo-card
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :duration="todo.duration"
      :person="todo.person"
    />
    <input type="text" :model="title">
    <input type="text" :model="duration">
    <input type="text" :model="person">
    <button @click="handleClick()">ADD TODO</button>
  </div>
</template>

<script>
import TodoCard from "./components/TodoCard";
import { pushTodo } from "./mongoClient.js";
import mongoC from "./mixins/mongoClient.js";

export default {
  name: "app",
  components: {
    TodoCard
  },
  mixins: [mongoC],
  data() {
    return {
      title: "",
      duration: 0,
      person: "",
      todos: [
        {
          title: "Sweep floor",
          duration: 10,
          person: "Reniel"
        },
        {
          title: "Clean room",
          duration: 100,
          person: "Lucy"
        },
        {
          title: "Mop dishes",
          duration: 13,
          person: "Charles"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      const title = this.title;
      const duration = this.duration;
      const person = this.person;
      pushTodo({ title, duration, person });
      this.title, (this.person = "");
      this.duration = 0;
    }
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
