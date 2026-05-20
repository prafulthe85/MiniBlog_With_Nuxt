<script setup>
const { data, pending, error } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts",
);
</script>

<template>
  <div>
    <h1>Blogs</h1>

    <div v-if="pending">Loading...</div>

    <div v-else-if="error">Error</div>

    <div v-else>
      <div v-for="blog in data.slice(0, 10)" :key="blog.id">
        <NuxtLink :to="`/blogs/${blog.id}`">
          {{ blog.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
