<template>
  <div></div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['non-admin-auth'],
});
</script>
