<script setup>
const route = useRoute();

const { data, pending, error } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
);
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>

    <div v-else-if="error">Error</div>

    <div v-else>
      <h1>{{ data.title }}</h1>

      <p>{{ data.body }}</p>
    </div>
  </div>
</template>
