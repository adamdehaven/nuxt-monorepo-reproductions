<template>
  <NuxtLayout>
    <div>
      <h1>Homepage</h1>
      <p>This is the homepage.</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useMyApi('/api/v1/beer')
console.log('data', data.value)
</script>
