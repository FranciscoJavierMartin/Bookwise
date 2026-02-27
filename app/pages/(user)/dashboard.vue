<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center space-x-8">
            <NuxtLink
              :to="{ name: ROUTES.home }"
              class="flex items-center space-x-2"
            >
              <div
                class="brand-gradient flex size-10 items-center justify-center rounded-xl"
              >
                <span class="text-xl font-bold text-white">B</span>
              </div>
              <span class="text-xl font-bold text-gray-900">BookWise</span>
            </NuxtLink>
            <div class="hidden items-center space-x-6 md:flex">
              <NuxtLink
                :to="{ name: ROUTES.dashboard }"
                class="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Dashboard
              </NuxtLink>
              <NuxtLink
                :to="{ name: ROUTES.books }"
                class="font-medium text-gray-600 hover:text-gray-900"
              >
                Browse Books
              </NuxtLink>
              <NuxtLink
                :to="{ name: ROUTES.pricing }"
                class="font-medium text-gray-600 hover:text-gray-900"
              >
                Pricing
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';
</script>
