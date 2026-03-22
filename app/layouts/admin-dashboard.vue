<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div class="px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="sp-x-8 flex items-center">
            <NuxtLink
              :to="{ name: ROUTES.adminDashboard }"
              class="flex items-center gap-x-2"
            >
              <div
                class="brand-gradient flex size-8 items-center justify-center rounded-lg"
              >
                <span class="font-bold text-white">B</span>
              </div>
              <span class="text-xl font-bold">BookWise Admin</span>
            </NuxtLink>
          </div>
          <div class="flex items-center gap-x-4">
            <span class="text-sm text-gray-600">{{ user?.name }}</span>
            <NuxtLink
              :to="{ name: ROUTES.home }"
              class="text-sm text-gray-600 hover:text-gray-900"
              >View Site</NuxtLink
            >
            Sign Out
          </div>
        </div>
      </div>
    </nav>
    <div class="flex">
      <aside
        class="sticky top-[57px] min-h-[calc(100dvh-57px)] w-64 border-r border-gray-200 bg-white"
      >
        <nav class="gap-y-1 p-4">
          <NuxtLink
            v-for="link in links"
            :key="link.route"
            :to="{ name: link.route }"
            class="flex items-center gap-y-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <span class="text-xl">{{ link.icon }}</span>
            <span class="font-medium">{{ link.text }}</span>
          </NuxtLink>
        </nav>
      </aside>
    </div>
    <main class="flex-1 p-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';

const links = [
  {
    icon: '📊',
    text: 'Dashboard',
    route: ROUTES.adminDashboard,
  },
  {
    icon: '📚',
    text: 'Books',
    route: ROUTES.adminBooks,
  },
  {
    icon: '➕',
    text: 'Add new book',
    route: ROUTES.adminBooksNew,
  },
  {
    icon: '🏷️',
    text: 'Categories',
    route: ROUTES.adminCategories,
  },
  {
    icon: '👥',
    text: 'Users',
    route: ROUTES.adminUsers,
  },
  {
    icon: '⭐',
    text: 'Reviews',
    route: ROUTES.adminReviews,
  },
  {
    icon: '💳',
    text: 'Subscriptions',
    route: ROUTES.adminSubscriptions,
  },
  {
    icon: '⚙️',
    text: 'Settings',
    route: ROUTES.adminSettings,
  },
];

const { user } = useAuth();
</script>
