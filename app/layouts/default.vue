<template>
  <div>
    <AppNavbar />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
</style>
