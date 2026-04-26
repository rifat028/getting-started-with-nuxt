<script setup></script>

<template>
  <footer class="bg-linear-to-r from-gray-900 to-gray-800 text-gray-300 mt-1">
    <!-- Top Section -->
    <div
      class="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
    >
      <!-- Brand -->
      <div>
        <h2 class="text-white text-xl font-bold mb-4">BD Funnel Builder</h2>
        <p class="text-gray-400 leading-relaxed mb-4">
          Your trusted e-commerce platform for seamless shopping experiences.
        </p>

        <!-- Social -->
        <div class="flex gap-4 text-xl">
          <span class="hover:text-white cursor-pointer"
            ><Icon name="ic:round-facebook"></Icon
          ></span>
          <span class="hover:text-white cursor-pointer"
            ><Icon name="tabler:brand-instagram"></Icon
          ></span>
          <span class="hover:text-white cursor-pointer"
            ><Icon name="mdi:twitter"></Icon
          ></span>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-white font-bold mb-4">Quick Links</h3>
        <ul type="disc" class="space-y-4 list-disc list-inside">
          <li class="text-gray-400 hover:text-white cursor-pointer">Home</li>
          <li class="text-gray-400 hover:text-white cursor-pointer">
            Products
          </li>
          <li class="text-gray-400 hover:text-white cursor-pointer">
            About Us
          </li>
          <li class="text-gray-400 hover:text-white cursor-pointer">Blog</li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h3 class="text-white font-bold mb-4">Support</h3>
        <ul class="space-y-4 list-disc list-inside">
          <li class="text-gray-400 hover:text-white cursor-pointer">
            Contact Us
          </li>
          <li class="text-gray-400 hover:text-white cursor-pointer">FAQ</li>
          <li class="text-gray-400 hover:text-white cursor-pointer">
            Shipping Policy
          </li>
          <li class="text-gray-400 hover:text-white cursor-pointer">
            Returns & Refunds
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-white font-bold mb-4">Newsletter</h3>
        <p class="text-gray-400 mb-4">
          Subscribe to get updates on new products and offers
        </p>

        <input
          type="email"
          placeholder="Your email address"
          class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none mb-3"
        />

        <button
          class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
        >
          Subscribe
        </button>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="pb-3 md:pb-8">
      <div
        class="mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400"
      >
        <p>© 2023 BD Funnel Builder. All rights reserved.</p>

        <div class="flex gap-6">
          <span class="hover:text-white cursor-pointer">Terms of Service</span>
          <span class="hover:text-white cursor-pointer">Privacy Policy</span>
          <span class="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </div>
  </footer>
</template>
