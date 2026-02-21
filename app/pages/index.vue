<template>
  <div class="min-h-screen bg-white">
    <nav class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div class="container mx-auto p-4">
        <div class="flex items-center justify-between">
          <NuxtLink
            :to="{ name: ROUTES.home }"
            class="flex items-center space-x-2"
          >
            <div
              class="brand-gradient flex size-10 items-center justify-center rounded-xl shadow-lg"
            >
              <span class="text-2xl font-bold text-white">B</span>
            </div>
            <span
              class="brand-gradient bg-clip-text text-2xl font-bold text-transparent"
            >
              BookWise
            </span>
          </NuxtLink>
          <div class="flex items-center space-x-6">
            <NuxtLink
              :to="{ name: ROUTES.signIn }"
              class="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              Sign In
            </NuxtLink>
            <NuxtLink
              :to="{ name: ROUTES.signUp }"
              class="brand-gradient transform rounded-lg px-6 py-2.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started Free
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <section
      class="bg-linear-to-br from-indigo-50 via-white to-purple-50 py-24"
    >
      <div class="container mx-auto max-w-5xl px-4 text-center">
        <div
          class="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm"
        >
          📚 Over 1000+ Book Summaries Available
        </div>
        <h1
          class="mb-8 text-6xl leading-tight font-extrabold text-gray-900 md:text-7xl"
        >
          Learn from the best books in <br />
          <span
            class="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >just 15 minutes</span
          >
        </h1>
        <p
          class="mx-auto mb-12 max-w-3xl text-2xl leading-relaxed text-gray-600"
        >
          Get key insights from bestselling books. Read or listen anytime,
          anywhere.
        </p>
        <div class="mb-16 flex justify-center gap-4">
          <NuxtLink
            :to="{ name: ROUTES.signUp }"
            class="brand-gradient transform rounded-xl px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-indigo-500/50"
          >
            Start Free Today
          </NuxtLink>
          <NuxtLink
            :to="{ name: ROUTES.books }"
            class="rounded-xl border-2 border-gray-300 bg-white px-10 py-5 text-lg font-bold text-gray-900 transition-all hover:border-indigo-400 hover:bg-gray-50"
          >
            Browse Library
          </NuxtLink>
        </div>
        <div
          class="mx-auto grid max-w-3xl grid-cols-3 gap-12 border-t-2 border-gray-200 pt-12"
        >
          <div>
            <div class="text-4xl font-black text-indigo-600">1000+</div>
            <div class="font-medium text-gray-600">Summaries</div>
          </div>
          <div>
            <div class="text-4xl font-black text-purple-600">15min</div>
            <div class="font-medium text-gray-600">Per Book</div>
          </div>
          <div>
            <div class="text-4xl font-black text-pink-600">20+</div>
            <div class="font-medium text-gray-600">Categories</div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-24">
      <div class="container mx-auto px-4">
        <div class="mb-20 text-center">
          <h2 class="mb-6 text-5xl font-bold text-gray-900">
            Why choose BookWise?
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Everything you need to accelerate your learning journey
          </p>
        </div>
        <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-2xl border-2 border-gray-100 p-8 transition-all duration-300 hover:shadow-xl"
            :class="feature.hoverBorderColor"
          >
            <div
              class="mb-6 flex size-16 items-center justify-center rounded-2xl text-3xl"
              :class="feature.bgColor"
            >
              {{ feature.icon }}
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="text-lg leading-relaxed text-gray-600">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 py-32"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="mb-8 text-5xl font-bold text-white md:text-6xl">
          Start Learning Today
        </h2>
        <p class="mx-auto mb-12 max-w-2xl text-2xl text-indigo-100">
          Join thousands growing their knowledge daily
        </p>
        <NuxtLink
          :to="{ name: ROUTES.signUp }"
          class="inline-block transform rounded-xl bg-white px-12 py-6 text-xl font-bold text-indigo-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/30"
        >
          Get Started Free
        </NuxtLink>
      </div>
    </section>
    <footer class="bg-gray-900 py-16 text-gray-400">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-6 flex items-center justify-center space-x-3">
          <div
            class="brand-gradient flex size-10 items-center justify-center rounded-xl"
          >
            <span class="text-xl font-bold text-white">B</span>
          </div>
          <span class="text-2xl font-bold text-white">BookWise</span>
        </div>
        <p class="mb-8 text-lg">
          Learn from the world's best books in just 15 minutes.
        </p>
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} BookWise. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';

const features = [
  {
    icon: '📖',
    title: 'Expert Summaries',
    desc: 'Professional summaries capturing key insights from each book',
    hoverBorderColor: 'hover:border-indigo-200',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: '🎧',
    title: 'Audio Narration',
    desc: 'Listen on-the-go with high-quality AI-powered audio',
    hoverBorderColor: 'hover:border-purple-200',
    bgColor: 'bg-purple-100',
  },
  {
    icon: '⚡',
    title: 'Save Hours',
    desc: 'Learn in 15 minutes what takes hours to read',
    hoverBorderColor: 'hover:border-pink-200',
    bgColor: 'bg-pink-100',
  },
  {
    icon: '💡',
    title: 'Key Insights',
    desc: 'Action able takeaways highlighted for quick reference',
    hoverBorderColor: 'hover:border-indigo-200',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: '📱',
    title: 'Any Device',
    desc: 'Seamless experience across web, mobile, and tablet',
    hoverBorderColor: 'hover:border-purple-200',
    bgColor: 'bg-purple-100',
  },
  {
    icon: '⭐',
    title: 'Best Selection',
    desc: 'Curated collection of top-rated bestsellers',
    hoverBorderColor: 'hover:border-pink-200',
    bgColor: 'bg-pink-100',
  },
];
</script>
