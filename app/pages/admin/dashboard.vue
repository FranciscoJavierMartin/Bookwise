<template>
  <div>Hello world</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin-dashboard',
  middleware: ['admin-auth']
});

const { user } = useAuth();
</script>
