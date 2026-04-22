<script setup>
import { ref } from "vue";

const showPassword = ref(false);
const showConfirm = ref(false);

import { useField } from "vee-validate";
import { useRegisterValidation } from "@/composables/auth/useRegisterValidation";

const { handleSubmit } = useRegisterValidation();

const { value: name, errorMessage: nameError } = useField("name");
const { value: phone, errorMessage: phoneError } = useField("phone");
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: confirm, errorMessage: confirmError } = useField("confirm");

const onSubmit = handleSubmit((values) => {
  alert("Form submitted ✅");
  console.log(values);
});
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
      <form @submit.prevent="onSubmit" class="space-y-3">
        <!-- Name -->
        <div class="flex flex-col">
          <label class="text-xs font-medium"
            >Name <span class="text-red-500">*</span></label
          >
          <input
            v-model="name"
            type="text"
            placeholder="Enter your name"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="nameError" class="text-red-500 text-xs mt-1">
            {{ nameError }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label class="text-xs font-medium"
            >Phone Number <span class="text-red-500">*</span></label
          >
          <input
            v-model="phone"
            type="text"
            placeholder="Enter Bangladeshi phone number"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p class="text-xs text-gray-700 mt-1">
            Must be 11 digits starting with 01
          </p>
          <p v-if="phoneError" class="text-red-500 text-xs mt-1">
            {{ phoneError }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="text-xs font-medium"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-1 px-3 py-1.5 border rounded-md text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">
            {{ emailError }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="text-xs font-medium"
            >Password <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            />
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
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">
            {{ passwordError }}
          </p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="text-xs font-medium"
            >Confirm password <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              v-model="confirm"
              :type="showConfirm ? 'text' : 'password'"
              placeholder="Confirm password"
              class="w-full mt-1 px-3 py-1.5 border rounded-md pr-10 text-sm border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-0 focus:border-orange-400 placeholder:text-gray-400 placeholder:text-xs"
            />
            <span
              @click="showConfirm = !showConfirm"
              class="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            >
              <Icon
                :name="showConfirm ? 'entypo:eye-with-line' : 'entypo:eye'"
                class="w-5 h-5"
              />
            </span>
          </div>
          <p v-if="confirmError" class="text-red-500 text-xs mt-1">
            {{ confirmError }}
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
