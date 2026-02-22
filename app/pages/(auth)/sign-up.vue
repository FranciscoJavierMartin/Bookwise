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
        <form class="flex flex-col gap-y-4" @submit.prevent="form.handleSubmit">
          <FormInput
            name="fullName"
            label="Full name"
            placeholder="John Doe"
            :form-field="form.Field"
          />
          <FormInput
            name="email"
            label="Email"
            placeholder="john@example.com"
            type="email"
            :form-field="form.Field"
          />
          <FormInput
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            :form-field="form.Field"
          />
          <FormInput
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
            type="password"
            :form-field="form.Field"
          />
          <button
            type="submit"
            :disabled="form.state.isSubmitting"
            class="brand-gradient mt-2 w-full transform rounded-lg px-4 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {{ form.state.isSubmitting ? 'Signing Up' : 'Sign Up' }}
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
import * as v from 'valibot';
import { useForm } from '@tanstack/vue-form';
import { authClient } from '~~/lib/auth-client';
import { ROUTES } from '@/utils/constants/routes';

const { showErrorToast } = useToast();

const signUpFormSchema = v.pipe(
  v.object({
    fullName: v.pipe(
      v.string(),
      v.nonEmpty('Name is required.'),
      v.minLength(2, 'Name must be at least 2 characters long'),
      v.maxLength(50, 'Name cannot exceed 50 characters.'),
    ),
    email: v.pipe(
      v.string(),
      v.nonEmpty('Email is required'),
      v.email('Please provide a valid email address'),
    ),
    password: v.pipe(
      v.string(),
      v.minLength(6, 'Password must be at least 6 characters long'),
    ),
    confirmPassword: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['confirmPassword']],
      (input) => input.password === input.confirmPassword,
      'Must confirm with password',
    ),
    ['confirmPassword'],
  ),
);

const form = useForm({
  defaultValues: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  validators: {
    onSubmit: signUpFormSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      const response = await authClient.signUp.email({
        email: value.email,
        name: value.fullName,
        password: value.password,
        callbackURL: '/',
      });

      if (response.error) {
        throw new Error();
      }
    } catch {
      showErrorToast('Error on creating account');
    }
  },
});
</script>
