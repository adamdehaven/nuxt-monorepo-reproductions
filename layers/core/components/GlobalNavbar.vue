<template>
  <div>
    <ul>
      <li>
        <NuxtLink href="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/mdc">
          MDC
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  align-items: center;
  display: flex;
  gap: 20px;
  padding: 0;
}

li {
  display: block;
}
</style>
