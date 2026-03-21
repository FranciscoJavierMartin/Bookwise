<template>
  <component :is="formField" :name>
    <template #default="{ field }">
      <div>
        <label :for="field.name" class="ml-1 text-[15px]" :class="labelClass">
          {{ label }}
        </label>
        <input
          :id="field.name"
          :name="field.name"
          :value="field.state.value"
          :type
          :placeholder
          autocomplete="off"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-500"
          :class="inputClass"
          @blur="field.handleBlur"
          @input="field.handleChange($event.target?.value)"
        />
        <FormInputError :errors="field.state.meta.errors" />
      </div>
    </template>
  </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const {
  type = 'text',
  labelClass = '',
  inputClass = '',
} = defineProps<{
  name: string;
  label: string;
  formField: Component;
  placeholder: string;
  type?: 'email' | 'text' | 'password';
  labelClass?: HTMLAttributes['class'];
  inputClass?: HTMLAttributes['class'];
}>();
</script>
