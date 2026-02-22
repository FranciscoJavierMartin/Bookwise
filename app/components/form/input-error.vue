<template>
  <ul
    role="alert"
    class="ml-4 flex list-disc flex-col gap-1 text-sm font-normal text-red-400"
  >
    <li v-for="error in content" :key="error">
      {{ error }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  errors?: Array<string | { message: string | undefined } | undefined>;
}>();

const content = computed<(string | undefined)[] | null | undefined>(() => {
  if (!props.errors || props.errors.length === 0) return null;

  const uniqueErrors = [
    ...new Map(
      props.errors.filter(Boolean).map((error) => {
        const message = typeof error === 'string' ? error : error?.message;
        return [message, error];
      }),
    ).values(),
  ];

  return uniqueErrors.map((error) =>
    typeof error === 'string' ? error : error?.message,
  );
});
</script>
