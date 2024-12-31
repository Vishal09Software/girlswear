<template>
  <footer class="bg-indigo-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        <!-- About Section -->
        <div class="text-center sm:text-left">
          <h3 class="text-xl sm:text-2xl font-bold text-indigo-400 mb-3 sm:mb-4">GirlsWear</h3>
          <p class="text-sm sm:text-base text-gray-300">Your one-stop destination for trendy and fashionable girls' clothing and accessories.</p>
          <div class="mt-3 sm:mt-4 flex justify-center sm:justify-start space-x-3 sm:space-x-4">
            <a href="#" class="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition duration-300" @click="openChat('facebook')">
              <i class="pi pi-facebook text-lg sm:text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition duration-300" @click="openChat('instagram')">
              <i class="pi pi-instagram text-lg sm:text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition duration-300" @click="openChat('pinterest')">
              <i class="pi pi-pinterest text-lg sm:text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition duration-300" @click="openChat('twitter')">
              <i class="pi pi-twitter text-lg sm:text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition duration-300" @click="openChat('discord')">
              <i class="pi pi-discord text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center sm:text-left">
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-indigo-400">Quick Links</h4>
          <ul class="space-y-1.5 sm:space-y-2">
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('new')"><i class="pi pi-chevron-right mr-2"></i>New Arrivals</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('best')"><i class="pi pi-chevron-right mr-2"></i>Best Sellers</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('sale')"><i class="pi pi-chevron-right mr-2"></i>Sale Items</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('gift')"><i class="pi pi-chevron-right mr-2"></i>Gift Cards</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div class="text-center sm:text-left">
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-indigo-400">Customer Service</h4>
          <ul class="space-y-1.5 sm:space-y-2">
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('contact')"><i class="pi pi-envelope mr-2"></i>Contact Us</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('shipping')"><i class="pi pi-truck mr-2"></i>Shipping Policy</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('returns')"><i class="pi pi-sync mr-2"></i>Returns & Exchanges</a></li>
            <li><a href="#" class="text-sm sm:text-base text-gray-300 hover:text-indigo-400 inline-flex items-center" @click="openChat('size')"><i class="pi pi-ruler mr-2"></i>Size Guide</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="text-center sm:text-left">
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-indigo-400">Stay Updated</h4>
          <p class="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Subscribe to our newsletter for updates and exclusive offers!</p>
          <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md sm:rounded-l-md sm:rounded-r-none w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900"
            >
            <button class="bg-indigo-500 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-indigo-600 transition duration-300 flex items-center justify-center whitespace-nowrap" @click="openChat('newsletter')">
              <i class="pi pi-send mr-2"></i>
              Join
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-indigo-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
        <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          <p class="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
            © {{ new Date().getFullYear() }} GirlsWear. All rights reserved.
          </p>
          <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6">
            <a href="#" class="text-xs sm:text-sm text-gray-300 hover:text-indigo-400 flex items-center justify-center" @click="openChat('privacy')"><i class="pi pi-shield mr-2"></i>Privacy Policy</a>
            <a href="#" class="text-xs sm:text-sm text-gray-300 hover:text-indigo-400 flex items-center justify-center" @click="openChat('terms')"><i class="pi pi-file mr-2"></i>Terms of Service</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button 
      @click="scrollToTop"
      class="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-indigo-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-110"
      :class="{ 'opacity-0': !showScrollButton, 'opacity-100': showScrollButton }"
    >
      <i class="pi pi-arrow-up text-lg sm:text-xl"></i>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showScrollButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openChat(section) {
      // Add chat functionality here
      console.log('Opening chat for section:', section)
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 500
    }
  }
}
</script>

<style scoped>
.pi {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

@media (max-width: 640px) {
  .pi {
    font-size: 1rem;
  }
}

.pi:hover {
  transform: translateY(-2px);
}

button {
  transition: opacity 0.3s ease;
}
</style>
