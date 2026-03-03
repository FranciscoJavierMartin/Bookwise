<template>
  <div
    class="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12"
  >
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <div class="mb-6 inline-flex items-center space-x-2">
          <div
            class="brand-gradient flex size-12 items-center justify-center rounded-xl shadow-lg"
          >
            <span class="text-2xl font-bold text-white">B</span>
          </div>
          <span class="text-3xl font-bold text-white">BookWise Admin</span>
        </div>
        <h1 class="text-2xl font-bold text-white">Admin Portal</h1>
        <p class="mt-2 text-gray-400">Sign In to access admin dashboard</p>
      </div>
      <div
        class="rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl"
      >
        <form class="flex flex-col gap-y-4" @submit.prevent="form.handleSubmit">
          <FormInput
            name="email"
            label="Email"
            placeholder="john@example.com"
            type="email"
            label-class="text-gray-200 font-semibold"
            input-class="border-gray-600 bg-gray-700 text-white placeholder-gray-400"
            :form-field="form.Field"
          />
          <FormInput
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            label-class="text-gray-200 font-semibold"
            input-class="border-gray-600 bg-gray-700 text-white placeholder-gray-400"
            :form-field="form.Field"
          />
          <button
            type="submit"
            :disabled="form.state.isSubmitting"
            class="brand-gradient mt-2 w-full transform rounded-lg px-4 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {{ form.state.isSubmitting ? 'Signing In' : 'Sign In to Admin' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <NuxtLink
            :to="{ name: ROUTES.home }"
            class="text-sm text-gray-400 transition-colors hover:text-gray-300"
          >
            ← Back to Website
          </NuxtLink>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p class="text-xs text-gray-500">
          Admin access only. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as v from 'valibot';
import { useForm } from '@tanstack/vue-form';
import { authClient } from '~~/lib/auth-client';
import { ROUTES } from '@/utils/constants/routes';

definePageMeta({
  middleware: ['non-admin-auth'],
});

const { showErrorToast } = useToast();

const signInFormSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('Email is required'),
    v.email('Please provide a valid email address'),
  ),
  password: v.pipe(
    v.string(),
    v.minLength(6, 'Password must be at least 6 characters long'),
  ),
});

const form = useForm({
  defaultValues: {
    email: '',
    password: '',
  },
  validators: {
    onSubmit: signInFormSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      const response = await authClient.signIn.email({
        email: value.email,
        password: value.password,
        rememberMe: true,
        callbackURL: '/admin/dashboard',
      });

      if (response.error) {
        throw new Error();
      }
    } catch {
      showErrorToast('Error on sign in');
    }
  },
});
</script>
