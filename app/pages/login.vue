<script setup>
import { reactive, ref } from "vue";
import { useField } from "vee-validate";
import { useLoginValidation } from "@/composables/auth/useLoginValidation";

const showPassword = ref(false);
const { handleSubmit } = useLoginValidation();
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit((values) => {
  alert("Login successful ✅");
  console.log(values);
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <!-- card -->
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-md p-10">
      <!-- Logo -->
      <div class="text-center mb-4 flex item-center justify-center">
        <img
          src="https://bdfunnelbuilder.com/BFLOGO.png"
          alt="Logo"
          class="w-20 md:w-40"
        />
      </div>

      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Sign in</h2>
        <p class="text-gray-500 mt-1 text-xs">
          or
          <NuxtLink
            to="/register"
            class="text-orange-500 hover:underline hover:text-orange-600"
            >sign up for an account</NuxtLink
          >
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="onSubmit" class="space-y-3">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email address <span class="text-red-500">*</span>
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-1 focus:outline-none focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            :class="
              emailError
                ? 'border-red-500'
                : 'border-orange-500 focus:ring-1 focus:ring-orange-400'
            "
          />

          <p v-if="emailError" class="text-sm text-blue-500 mt-1">
            {{ emailError }}
          </p>
        </div>

        <div>
          <!-- Forget Password -->
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-gray-700">
              Password <span class="text-red-500">*</span>
            </label>
            <NuxtLink
              to="#"
              class="text-xs text-orange-500 hover:underline hover:text-orange-600"
              >Forget password</NuxtLink
            >
          </div>

          <!-- Password input  -->
          <div class="relative">
            <input
              v-model="password"
              placeholder="Enter your password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full mt-1 px-3 py-2 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
              :class="
                passwordError
                  ? 'border-red-500'
                  : 'border-gray-300 focus:ring-1 focus:ring-orange-400'
              "
            />

            <!-- Eye Icon -->
            <span
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            >
              <Icon
                :name="showPassword ? 'entypo:eye-with-line' : 'entypo:eye'"
                class="w-5 h-5"
              />
            </span>
          </div>

          <p v-if="passwordError" class="text-sm text-red-500 mt-1">
            {{ passwordError }}
          </p>
        </div>

        <!-- Remember -->
        <div class="flex items-center gap-2">
          <input v-model="remember" type="checkbox" class="w-4 h-4" />
          <span class="text-sm text-gray-700">Remember me</span>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
