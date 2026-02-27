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
          <div class="flex items-center space-x-4">
            <div class="hidden text-right md:block">
              <p class="text-sm font-medium text-gray-900">{{ user?.name }}</p>
              <p class="text-xs text-gray-600">{{ user?.email }}</p>
            </div>
            <button
              class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
              @click="signOut"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="mx-auto max-w-7xl px-4 py-12">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900">
          Welcome back, {{ user?.name }}!
        </h1>
        <p class="text-gray-600">
          Manage your subsciption and track your learning progress
        </p>
      </div>
      <div
        v-if="false"
        class="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-6"
      >
        <div class="flex items-start">
          <svg
            class="mt-0.5 h-6 w-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            view-box="0  0  24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div class="ml-3 flex-1">
            <h3 class="text-lg font-bold text-yellow-900">
              Payment under review
            </h3>
            <p class="mt-1 text-yellow-700">
              Your planType subscription payment (amount) is being reviewed by
              our team. You'll receive an email once your subscription is
              activated (usually within 24 hours).
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <div
            class="rounded-2xl bg-linear-to-br p-8 text-white shadow-xl"
            :class="{
              'from-purple-600 to-pink-600': tier === 'LIFETIME',
              'from-blue-600 to-indigo-600': tier === 'YEARLY',
              'from-green-600 to-emerald-600': tier === 'MONTHLY',
              'from-gray-600 to-gray-700': tier === 'FREE',
            }"
          >
            <div class="mb-6">
              <p class="mb-2 text-sm text-white/80">Current Plan</p>
              <h2 class="text-3xl font-bold">title</h2>
            </div>
            <div class="mb-6 border-b border-white/20 pb-6">
              <p class="mb-1 text-sm text-white/80">Status</p>
              <p class="text-lg font-semibold">✓ Active</p>
            </div>
            <div class="mb-6 border-b border-white/20 pb-6">
              <p class="mb-1 text-sm text-white/80">Renews On</p>
              <p class="text-lg font-semibold">subscriptionEndDate</p>
            </div>
            <NuxtLink
              v-if="tier === 'FREE'"
              :to="{ name: ROUTES.pricing }"
              class="block w-full rounded-lg bg-white py-3 text-center font-bold text-indigo-600 transition-colors hover:bg-gray-100"
            >
              Upgrade to Premium
            </NuxtLink>
            <NuxtLink
              v-else-if="tier !== 'LIFETIME'"
              :to="{ name: ROUTES.pricing }"
              class="block w-full rounded-lg bg-white/20 py-3 text-center font-bold text-white transition-colors hover:bg-white/30"
            >
              Change plan
            </NuxtLink>
          </div>
          <div
            class="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 class="mb-4 text-lg font-bold text-gray-900">Your stats</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Total listen time</span>
                <span class="font-semibold text-gray-900">
                  {{ formatListenTime(0) }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Member since</span>
                <span class="font-semibold text-gray-900">
                  {{ new Date(user?.createdAt ?? '').toLocaleDateString() }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6 lg:col-span-2">
          <div
            class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Your plan include
            </h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                v-for="feature in tierBenefits.features"
                :key="feature"
                class="flex items-start"
              >
                <svg
                  class="mt-0.5 mr-3 size-6 shrink-0 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  view-box="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
              <div
                v-for="limitation in tierBenefits.limitations"
                :key="limitation"
                class="flex items-start"
              >
                <svg
                  class="mt-0.5 mr-3 size-6 shrink-0 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  view-box="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="text-gray-500">{{ limitation }}</span>
              </div>
            </div>
            <div
              v-if="tier === 'FREE'"
              class="mt-8 rounded-xl border border-indigo-200 bg-linear-to-r from-indigo-50 to-purple-50 p-6"
            >
              <h3 class="mb-2 text-xl font-bold text-gray-900">
                Ready to unlock full access?
              </h3>
              <p class="mb-4 text-gray-700">
                Upgrade to premium and get unlimited access to 10,000+ book
                summaries, full audio, and PDF downloads.
              </p>
              <NuxtLink
                :to="{ name: ROUTES.pricing }"
                class="brand-gradient inline-block rounded-lg px-6 py-3 font-semibold text-white hover:shadow-lg"
              >
                View Plans & Pricing
              </NuxtLink>
            </div>
          </div>
          <div
            class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Subscription history
            </h2>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between rounded-lg border border-gray-200 p-4"
              >
                <div>
                  <p class="font-semibold text-gray-900">Plan</p>
                  <p class="text-sm text-gray-600">createdAt</p>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-gray-900">$amount</p>
                  <span
                    class="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700"
                  >
                    orderStatus
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-900">Quick actions</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <NuxtLink
                :to="{ name: ROUTES.books }"
                class="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50"
              >
                <div class="flex items-center">
                  <span class="mr-3 text-3xl">📚</span>
                  <span class="font-semibold text-gray-900">Browse Books</span>
                </div>
                <span class="text-gray-400">→</span>
              </NuxtLink>
              <NuxtLink
                :to="{ name: ROUTES.favorites }"
                class="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50"
              >
                <div class="flex items-center">
                  <span class="mr-3 text-3xl">❤️</span>
                  <span class="font-semibold text-gray-900">My Favorites</span>
                </div>
                <span class="text-gray-400">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';

definePageMeta({
  middleware: ['auth'],
});

const { user, signOut } = useAuth();

const tier: string = 'FREE';

const tierBenefits = computed(() => {
  let benefits;

  switch (tier) {
    case 'FREE':
      benefits = {
        title: `Free plan`,
        features: [
          'Browse all books catalog',
          'Read book descriptions',
          'View table of contents',
          'Listen to ONLY 10 seconds of audio',
          'Add reviews and ratings',
        ],
        limitations: [
          'Cannot listen to full audio',
          'Cannot download PDFs',
          'No favorites feature',
        ],
      };
      break;
    default:
      benefits = {
        title: `${tier} plan`,
        features: [
          'Full access to 10,000+ book summaries',
          'Read complete summaries online',
          'Listen to full audio summaries',
          'Download PDFs',
          'Add books to favorites',
          'Unlimited access',
        ],
        limitations: [],
      };
      break;
  }

  return benefits;
});
</script>
