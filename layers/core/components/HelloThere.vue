<template>
  <div>
    {{ $hello('world') }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script>
