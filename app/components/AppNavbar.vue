<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>

    <NuxtLink to="/about"> About </NuxtLink>

    <NuxtLink to="/blogs"> Blogs </NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: black;
}

a {
  color: white;
  text-decoration: none;
}
</style>
