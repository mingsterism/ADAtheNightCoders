<template>
  <button @click="handleClick()" :style="{fontSize: `${size}px`}" class="super">{{inputs}}</button>
</template>

<script>
export default {
  props: ['inputs', 'size'],
  methods: {
    handleClick() {
      console.log('YAAA');
    },
  },
};
</script>

<style scoped>
.super {
  font-size: 50px;
  color: white;
  background-color: blue;
}
</style>
