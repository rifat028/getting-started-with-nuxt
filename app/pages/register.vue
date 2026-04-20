<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "primary-layout",
});

const form = ref({
  name: "",
  phone: "",
  email: "",
  password: "",
  confirm: "",
});

const errors = ref({});

const showPassword = ref(false);
const showConfirm = ref(false);

// ✅ Validation
const validate = () => {
  errors.value = {};

  if (!form.value.name) {
    errors.value.name = "Name is required";
  }

  if (!/^01\d{9}$/.test(form.value.phone)) {
    errors.value.phone = "Enter valid 11 digit number starting with 01";
  }

  if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Invalid email";
  }

  if (form.value.password.length < 6) {
    errors.value.password = "Minimum 6 characters required";
  }

  if (form.value.password !== form.value.confirm) {
    errors.value.confirm = "Passwords do not match";
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (validate()) {
    alert("Form submitted ✅");
  }
};
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 px-4">
    <!-- Card -->
    <div class="w-150 max-w-200 bg-white rounded-lg shadow-md p-5 sm:p-6">
      <div class="text-center mb-4">
        <h1 class="text-lg font-semibold text-gray-700">
          <span class="text-blue-600 font-bold">bd</span>
          <span class="text-orange-500 font-bold">funnel</span>
          <span class="text-gray-400 text-xs block tracking-widest">
            BUILDER
          </span>
        </h1>
      </div>

      <!-- Title -->
      <h2 class="text-xl font-semibold text-center mb-1">Sign up</h2>
      <p class="text-center text-xs text-gray-500 mb-4">
        or
        <span class="text-orange-500 cursor-pointer">
          sign in to your account
        </span>
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- Name -->
        <div class="flex flex-col">
          <label class="text-xs font-medium">Name *</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label class="text-xs font-medium">Phone Number *</label>
          <input
            v-model="form.phone"
            type="text"
            placeholder="Enter Bangladeshi phone number"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p class="text-xs text-gray-400 mt-1">
            Must be 11 digits starting with 01
          </p>
          <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
            {{ errors.phone }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="text-xs font-medium">Email *</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="text-xs font-medium">Password *</label>
          <div class="relative">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm focus:ring-1 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            />
            <span
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2 cursor-pointer text-gray-500"
            >
              {{ showPassword ? "🙈" : "👁" }}
            </span>
          </div>
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="text-xs font-medium">Confirm password *</label>
          <div class="relative">
            <input
              v-model="form.confirm"
              :type="showConfirm ? 'text' : 'password'"
              placeholder="Confirm password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm focus:ring-1 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            />
            <span
              @click="showConfirm = !showConfirm"
              class="absolute right-3 top-2 cursor-pointer text-gray-500"
            >
              {{ showConfirm ? "🙈" : "👁" }}
            </span>
          </div>
          <p v-if="errors.confirm" class="text-red-500 text-xs mt-1">
            {{ errors.confirm }}
          </p>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>
