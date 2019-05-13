<template>
  <div id="app">
    <input type="text" v-model="message">
    <button @click="sendData()">INSERT DATA</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      message: ''
    }
  },
  components: {
  }, 
  methods: {
    sendData () {
      fetch('http://localhost:3000/addUser', {
        method: 'POST',
        body: JSON.stringify({myInput: this.message})
      })
    }
  }
}
</script>

<style>
