<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 font-poppins">
    <!-- Header Component -->
    <Header />

    <div class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <div class="relative rounded-3xl overflow-hidden mb-12">
        <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-8">
          <h1 class="text-4xl md:text-6xl font-playfair font-bold text-center mb-6">Get in Touch</h1>
          <p class="text-lg text-center max-w-2xl mx-auto opacity-90">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-50/80 to-transparent"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-3xl shadow-xl p-8">
          <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="6" class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300 resize-none"></textarea>
            </div>

            <button class="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center gap-2">
              <i class="pi pi-send"></i>
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <i class="pi pi-map-marker text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Our Location</h3>
                  <p class="text-gray-600">123 Fashion Street, New York, NY 10001</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <i class="pi pi-phone text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Phone Number</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <i class="pi pi-envelope text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Email Address</h3>
                  <p class="text-gray-600">contact@fashionstore.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <h3 class="text-xl font-bold mb-6">Follow Us</h3>
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-50 transition duration-300">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <i class="pi pi-facebook"></i>
                </div>
                <span class="font-medium">Facebook</span>
              </a>
              <a href="#" class="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-50 transition duration-300">
                <div class="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                  <i class="pi pi-twitter"></i>
                </div>
                <span class="font-medium">Twitter</span>
              </a>
              <a href="#" class="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-50 transition duration-300">
                <div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                  <i class="pi pi-instagram"></i>
                </div>
                <span class="font-medium">Instagram</span>
              </a>
              <a href="#" class="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-50 transition duration-300">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <i class="pi pi-linkedin"></i>
                </div>
                <span class="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
