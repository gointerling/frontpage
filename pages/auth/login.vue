<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-96">
      <h1 class="text-3xl font-bold mb-6">Login</h1>
      <form @submit="login" class="space-y-4">
        <div>
          <label for="email" class="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useAuthService } from "~/composables/useAuthService";

// component setup
const email = ref("");
const password = ref("");

const { login } = useAuthService();
</script>
