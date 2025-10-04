<template>
  <div>
    <h1>Home Page</h1>
   <p>{{ x }}</p> 
    <NuxtLink to="/about">Go to About</NuxtLink>
  </div>
</template>

<script setup>

let x = "hello";
</script>