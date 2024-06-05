<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="incrementCounter">Click me!</button>
    <p>Counter: {{ counter }}</p>
    <div v-for="todo in todos" />
  </div>
</template>

<script setup lang="ts">
// Define reactive data and props
import { ref } from 'vue';

type Counter = {
  value: number;
};

let greeting = ref('Hello, Vue 3!');
const todos = ref<string[]>([]);
const counter = ref<Counter>({
  value: '0',
});

// Define a function
const incrementCounter = () => {
  counter.value++;
};
</script>

<style>
.a {
  color: red;
}
</style>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
</style>
