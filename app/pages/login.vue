<script setup>
import { reactive, ref } from "vue";

const showPassword = ref(false);

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const errors = reactive({
  email: "",
  password: "",
});

const validate = () => {
  errors.email = "";
  errors.password = "";

  let valid = true;

  // Email validation
  {
    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }
  }

  // Password validation
  {
    if (!form.password) {
      errors.password = "Password is required";
      valid = false;
    } else if (form.password.length < 6) {
      errors.password = "Minimum 6 characters required";
      valid = false;
    } else if (!/[a-z]/.test(form.password)) {
      errors.password = "Minimum 1 lowercase character required";
      valid = false;
    } else if (!/[A-Z]/.test(form.password)) {
      errors.password = "Minimum 1 uppercase character required";
      valid = false;
    } else if (!/\d/.test(form.password)) {
      errors.password = "Minimum 1 number required";
      valid = false;
    } else if (!/[@$!%*?&]/.test(form.password)) {
      errors.password = "Minimum 1 special character required";
      valid = false;
    }
  }

  return valid;
};

const handleSubmit = () => {
  if (validate()) {
    alert("Login successful (static)");
  }
};

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
          class="w-20 md:w-[120px]"
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
      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email address <span class="text-red-500">*</span>
          </label>

          <input
            v-model="form.email"
            type="phone"
            placeholder="Enter your email"
            class="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-1 focus:outline-none focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            :class="
              errors.email
                ? 'border-red-500'
                : 'border-orange-500 focus:ring-1 focus:ring-orange-400'
            "
          />

          <p v-if="errors.email" class="text-sm text-red-500 mt-1">
            {{ errors.email }}
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
              class="text-sm text-orange-500 hover:underline hover:text-orange-600"
              >Forget password</NuxtLink
            >
          </div>

          <!-- Password input  -->
          <div class="relative">
            <input
              v-model="form.password"
              placeholder="Enter your password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full mt-1 px-3 py-2 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
              :class="
                errors.password
                  ? 'border-red-500'
                  : 'border-gray-300 focus:ring-1 focus:ring-orange-400'
              "
            />

            <!-- Eye Icon -->
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <!-- Eye open-->
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5
                       c4.477 0 8.268 2.943 9.542 7
                       -1.274 4.057-5.065 7-9.542 7
                       -4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>

              <!-- Eye Off -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19
                       c-4.478 0-8.27-2.943-9.543-7
                       a9.956 9.956 0 012.223-3.592M6.18 6.18
                       A9.956 9.956 0 0112 5c4.478 0 8.27 2.943
                       9.543 7a9.956 9.956 0 01-4.132 5.411M15 12
                       a3 3 0 00-3-3m0 0a3 3 0 00-3 3m3-3v6m9 4L3 3"
                />
              </svg>
            </button>
          </div>

          <p v-if="errors.password" class="text-sm text-red-500 mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Remember -->
        <div class="flex items-center gap-2">
          <input v-model="form.remember" type="checkbox" class="w-4 h-4" />
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
