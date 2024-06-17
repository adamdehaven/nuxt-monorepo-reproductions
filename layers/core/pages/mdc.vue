<template>
  <NuxtLayout>
    <div>
      <MDCRenderer
        v-if="data?.body && !error"
        :body="data.body"
        :data="data.data"
      />
      <div v-else>
        {{ error?.message || error?.statusMessage }}
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// Fetch markdown document
const { data, error } = await useFetch('/api/document')
</script>

