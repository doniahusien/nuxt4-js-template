<template>
  <div class="p-8 bg-blue-500 text-white text-center rounded-xl">
    <h1>Home Page</h1>
   <p>{{ x }}</p> 
    <NuxtLink to="/about">Go to About</NuxtLink>
  </div>
</template>

<script setup>

let x = "hello";
</script>