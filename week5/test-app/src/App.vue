<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="blablabla to  Vsdfasdfsdue.js App"/>
    <SuperButtonMegaOmega inputs="Ultra Button" size="100"/>
    <SuperButtonMegaOmega inputs="SuperButton Button" size="10"/>
    <SuperButtonMegaOmega inputs="Mega Button"/>
    <SuperButtonMegaOmega inputs="Button"/>
    <super-button-mega-omega />
    <super-input />
    <todo-card />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SuperButtonMegaOmega from './components/SuperButton.vue';
import SuperInput from './components/SuperInput.vue';
import TodoCard from './components/TodoCard.vue';


export default {
  name: 'app',
  components: {
    HelloWorld,
    SuperButtonMegaOmega,
    SuperInput,
    TodoCard,
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  inputs-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
