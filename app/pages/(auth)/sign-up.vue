<template>
  <div
    class="flex min-h-screen items-center justify-center bg-linear-to-r from-indigo-50 via-white to-purple-50 px-4 py-12"
  >
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <NuxtLink
          :to="{ name: ROUTES.home }"
          class="inline-flex items-center space-x-2"
        >
          <div
            class="brand-gradient flex size-12 items-center justify-center rounded-xl shadow-lg"
          >
            <span class="text-2xl font-bold text-white">B</span>
          </div>
          <span
            class="brand-gradient bg-clip-text text-3xl font-bold text-transparent"
          >
            BookWise
          </span>
        </NuxtLink>
        <h1 class="mt-6 text-3xl font-bold text-gray-900">
          Create your account
        </h1>
        <p class="mt-2 text-gray-600">
          Start learning from the best books today
        </p>
      </div>

      <div class="rounded-2xl bg-white p-8 shadow-xl">
        <div class="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <p class="text-sm text-red-700">error</p>
        </div>
        <form class="flex flex-col gap-y-6">
          <div>
            <label
              for="fullName"
              class="mb-2 text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              required
              value="test"
              placeholder="John Doe"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            class="brand-gradient w-full transform rounded-lg px-4 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            Create account
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Already have an account? &nbsp;
            <NuxtLink
              :to="{ name: ROUTES.signIn }"
              class="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign In
            </NuxtLink>
          </p>
        </div>
      </div>
      <p class="mt-8 text-center text-xs text-gray-500">
        By creating an account, you agree to our&nbsp;<NuxtLink
          class="underline hover:text-gray-700"
          >Terms fo service</NuxtLink
        >&nbsp;and&nbsp;<NuxtLink class="underline hover:text-gray-700"
          >Privacy policy</NuxtLink
        >.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';
</script>
