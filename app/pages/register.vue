<script setup>
import { ref } from "vue";

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

  // Password validation
  {
    if (!form.value.password) {
      errors.value.password = "Password is required";
      valid = false;
    } else if (form.value.password.length < 6) {
      errors.value.password = "Minimum 6 characters required";
      valid = false;
    } else if (!/[a-z]/.test(form.value.password)) {
      errors.value.password = "Minimum 1 lowercase character required";
      valid = false;
    } else if (!/[A-Z]/.test(form.value.password)) {
      errors.value.password = "Minimum 1 uppercase character required";
      valid = false;
    } else if (!/\d/.test(form.value.password)) {
      errors.value.password = "Minimum 1 number required";
      valid = false;
    } else if (!/[@$!%*?&]/.test(form.value.password)) {
      errors.value.password = "Minimum 1 special character required";
      valid = false;
    }
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
  <div
    class="flex items-center justify-center bg-gray-100 p-4 min-h-screen max-w-screen"
  >
    <!-- Card -->
    <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-5 sm:p-6">
      <!-- Logo -->
      <div class="text-center mb-4 flex item-center justify-center">
        <img
          src="https://bdfunnelbuilder.com/BFLOGO.png"
          alt="Logo"
          class="w-20 md:w-30"
        />
      </div>

      <!-- Title -->
      <div>
        <h2 class="text-xl font-semibold text-center mb-1">Sign up</h2>
        <p class="text-center text-xs text-gray-500 mb-4">
          or
          <NuxtLink to="/login" class="text-orange-500 hover:underline"
            >sign in to your account</NuxtLink
          >
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- Name -->
        <div class="flex flex-col">
          <label class="text-xs font-medium"
            >Name <span class="text-red-500">*</span></label
          >
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label class="text-xs font-medium"
            >Phone Number <span class="text-red-500">*</span></label
          >
          <input
            v-model="form.phone"
            type="text"
            placeholder="Enter Bangladeshi phone number"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
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
          <label class="text-xs font-medium"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="text-xs font-medium"
            >Password <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            />
            <!-- <span
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2 cursor-pointer text-gray-500"
            >
              {{ showPassword ? "🙈" : "👁" }}
            </span> -->
            <span
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2 cursor-pointer text-gray-500"
            >
              <Icon
                :name="showPassword ? 'entypo:eye-with-line' : 'entypo:eye'"
                class="w-5 h-5"
              />
            </span>
          </div>
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="text-xs font-medium"
            >Confirm password <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              v-model="form.confirm"
              :type="showConfirm ? 'text' : 'password'"
              placeholder="Confirm password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
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
