<script setup>
const { data } = await useFetch("/api/users");
</script>

<template>
  <div>
    <h1>Users</h1>

    <div v-for="user in data" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
