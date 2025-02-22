<template>
  <div class="w-full">
    <!-- Preloader -->
    <div class="fixed inset-0 bg-white z-[9999] flex items-center justify-center" v-if="isLoading">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
    </div>

    <!-- Top Bar -->
    <div class="bg-indigo-100 py-2">
      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row justify-between items-center text-sm">
          <!-- Contact Info -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0 w-full sm:w-auto">
            <a href="tel:+1234567890" class="flex items-center justify-center text-gray-700 hover:text-indigo-600 transition duration-300 w-full sm:w-auto">
              <i class="pi pi-phone mr-2"></i>
              <span class="text-xs sm:text-sm">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@girlswear.com" class="flex items-center justify-center text-gray-700 hover:text-indigo-600 transition duration-300 w-full sm:w-auto">
              <i class="pi pi-envelope mr-2"></i>
              <span class="text-xs sm:text-sm">info@girlswear.com</span>
            </a>
          </div>

          <!-- Account Links -->
          <div class="hidden sm:flex items-center space-x-6">
            <router-link to="/account" class="text-gray-700 hover:text-indigo-600 transition duration-300 flex items-center">
              <i class="pi pi-user-edit mr-2"></i>
              <span class="text-sm">My Account</span>
            </router-link>
            <router-link to="/track-order" class="text-gray-700 hover:text-indigo-600 transition duration-300 flex items-center">
              <i class="pi pi-truck mr-2"></i>
              <span class="text-sm">Track Order</span>
            </router-link>
            <router-link to="/login" class="text-gray-700 hover:text-indigo-600 transition duration-300 flex items-center">
              <i class="pi pi-user mr-2"></i>
              <span class="text-sm">Login</span>
            </router-link>
            <router-link to="/register" class="text-gray-700 hover:text-indigo-600 transition duration-300 flex items-center">
              <i class="pi pi-user-plus mr-2"></i>
              <span class="text-sm">Register</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-24">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition duration-300">
              GirlsWear
            </router-link>
          </div>

          <!-- Navigation Links with Mega Menu - Hidden on Mobile -->
          <div class="hidden lg:flex space-x-8">
            <!-- New Arrivals -->
            <div class="relative group">
              <router-link to="/new-arrivals" class="text-gray-700 hover:text-indigo-600 font-medium py-2 flex items-center">
                <i class="pi pi-star-fill mr-2"></i>
                New Arrivals
                <i class="pi pi-chevron-down ml-2 text-sm"></i>
              </router-link>
              <div class="absolute top-full -left-1/2 w-[800px] bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div class="grid grid-cols-4 gap-6">
                  <div>
                    <h3 class="font-semibold text-indigo-600 mb-4">Latest Collections</h3>
                    <ul class="space-y-2">
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-sun mr-2"></i>Summer Collection</router-link></li>
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-cloud mr-2"></i>Spring Collection</router-link></li>
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-moon mr-2"></i>Winter Collection</router-link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-indigo-600 mb-4">Trending Now</h3>
                    <ul class="space-y-2">
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-bolt mr-2"></i>Hot Picks</router-link></li>
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-heart-fill mr-2"></i>Most Loved</router-link></li>
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-star-fill mr-2"></i>Best Sellers</router-link></li>
                    </ul>
                  </div>
                  <div class="col-span-2">
                    <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22" alt="New Collection" class="rounded-lg shadow-md w-full h-48 object-cover">
                  </div>
                </div>
              </div>
            </div>

            <!-- Shop -->
            <div class="relative group">
              <router-link to="/shop" class="text-gray-700 hover:text-indigo-600 font-medium py-2 flex items-center">
                <i class="pi pi-shopping-bag mr-2"></i>
                Shop
                <i class="pi pi-chevron-down ml-2 text-sm"></i>
              </router-link>
              <div class="absolute top-full -left-1/2 w-[800px] bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div class="grid grid-cols-4 gap-6">
                  <div>
                    <h3 class="font-semibold text-indigo-600 mb-4">Categories</h3>
                    <ul class="space-y-2">
                      <li><router-link to="/shop" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-tag mr-2"></i>All Products</router-link></li>
                      <li><router-link to="/featured" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-star mr-2"></i>Featured Items</router-link></li>
                      <li><router-link to="/sale" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-percentage mr-2"></i>Sale Items</router-link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-indigo-600 mb-4">Collections</h3>
                    <ul class="space-y-2">
                      <li><router-link to="/summer-2023" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-box mr-2"></i>Summer 2023</router-link></li>
                      <li><router-link to="/winter-2023" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-box mr-2"></i>Winter 2023</router-link></li>
                      <li><router-link to="/limited-edition" class="text-gray-600 hover:text-indigo-600 flex items-center"><i class="pi pi-box mr-2"></i>Limited Edition</router-link></li>
                    </ul>
                  </div>
                  <div class="col-span-2">
                    <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04" alt="Shop Collection" class="rounded-lg shadow-md w-full h-48 object-cover">
                  </div>
                </div>
              </div>
            </div>

            <!-- Blog -->
            <div class="relative group">
              <router-link to="/blog" class="text-gray-700 hover:text-indigo-600 font-medium py-2 flex items-center">
                <i class="pi pi-book mr-2"></i>
                Blog
              </router-link>
            </div>

            <!-- Contact -->
            <div class="relative group">
              <router-link to="/contact" class="text-gray-700 hover:text-indigo-600 font-medium py-2 flex items-center">
                <i class="pi pi-envelope mr-2"></i>
                Contact
              </router-link>
            </div>
          </div>

          <!-- Icons -->
          <div class="flex items-center space-x-4 sm:space-x-8">
            <div class="relative group hidden sm:block">
              <input type="text" placeholder="Search..." class="w-40 sm:w-64 pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
              <i class="pi pi-search absolute left-3 top-3 text-gray-400 group-hover:text-indigo-600 transition duration-300"></i>
            </div>
            
            <div class="flex space-x-4 sm:space-x-6">
              <router-link to="/compare" class="relative text-gray-600 hover:text-indigo-600 transition duration-300">
                <i class="pi pi-sync text-xl sm:text-2xl"></i>
                <span class="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">0</span>
              </router-link>

              <router-link to="/wishlist" class="relative text-gray-600 hover:text-indigo-600 transition duration-300">
                <i class="pi pi-heart-fill text-xl sm:text-2xl"></i>
                <span class="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">0</span>
              </router-link>
              
              <router-link to="/cart" class="relative text-gray-600 hover:text-indigo-600 transition duration-300">
                <i class="pi pi-shopping-cart text-xl sm:text-2xl"></i>
                <span class="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">0</span>
              </router-link>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="lg:hidden hover:text-indigo-600 transition duration-300">
              <i class="pi pi-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Sidebar -->
      <div :class="{'translate-x-0': isMobileMenuOpen, '-translate-x-full': !isMobileMenuOpen}" 
           class="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 overflow-y-auto">
        <div class="p-4">
          <div class="flex justify-between items-center mb-8">
            <router-link to="/" class="text-2xl font-bold text-indigo-600">GirlsWear</router-link>
            <button @click="toggleMobileMenu" class="text-gray-600">
              <i class="pi pi-times text-xl"></i>
            </button>
          </div>

          <!-- Contact Info for Mobile -->
          <div class="mb-6 space-y-3 border-b border-gray-200 pb-4">
            <a href="tel:+1234567890" class="flex items-center text-gray-700">
              <i class="pi pi-phone mr-3 text-indigo-600"></i>
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@girlswear.com" class="flex items-center text-gray-700">
              <i class="pi pi-envelope mr-3 text-indigo-600"></i>
              <span>info@girlswear.com</span>
            </a>
          </div>

          <!-- Mobile Account Links -->
          <div class="mb-6 space-y-3 border-b border-gray-200 pb-4">
            <router-link to="/account" class="flex items-center text-gray-700">
              <i class="pi pi-user-edit mr-3 text-indigo-600"></i>
              <span>My Account</span>
            </router-link>
            <router-link to="/track-order" class="flex items-center text-gray-700">
              <i class="pi pi-truck mr-3 text-indigo-600"></i>
              <span>Track Order</span>
            </router-link>
            <router-link to="/login" class="flex items-center text-gray-700">
              <i class="pi pi-user mr-3 text-indigo-600"></i>
              <span>Login</span>
            </router-link>
            <router-link to="/register" class="flex items-center text-gray-700">
              <i class="pi pi-user-plus mr-3 text-indigo-600"></i>
              <span>Register</span>
            </router-link>
          </div>

          <!-- Mobile Search -->
          <div class="mb-6">
            <div class="relative">
              <input type="text" placeholder="Search..." class="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none">
              <i class="pi pi-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <!-- Mobile Navigation Links -->
          <nav class="space-y-4">
            <div>
              <button @click="toggleNewArrivals" class="w-full flex items-center justify-between text-gray-700 hover:text-indigo-600 py-2">
                <span class="flex items-center">
                  <i class="pi pi-star-fill mr-2"></i>
                  New Arrivals
                </span>
                <i :class="{'pi-chevron-down': !showNewArrivals, 'pi-chevron-up': showNewArrivals}" class="pi"></i>
              </button>
              <div v-show="showNewArrivals" class="pl-4 mt-2 space-y-2">
                <router-link to="/summer-collection" class="block text-gray-600 hover:text-indigo-600 py-2">Summer Collection</router-link>
                <router-link to="/spring-collection" class="block text-gray-600 hover:text-indigo-600 py-2">Spring Collection</router-link>
                <router-link to="/winter-collection" class="block text-gray-600 hover:text-indigo-600 py-2">Winter Collection</router-link>
              </div>
            </div>

            <div>
              <button @click="toggleShop" class="w-full flex items-center justify-between text-gray-700 hover:text-indigo-600 py-2">
                <span class="flex items-center">
                  <i class="pi pi-shopping-bag mr-2"></i>
                  Shop
                </span>
                <i :class="{'pi-chevron-down': !showShop, 'pi-chevron-up': showShop}" class="pi"></i>
              </button>
              <div v-show="showShop" class="pl-4 mt-2 space-y-2">
                <router-link to="/shop" class="block text-gray-600 hover:text-indigo-600 py-2">All Products</router-link>
                <router-link to="/featured" class="block text-gray-600 hover:text-indigo-600 py-2">Featured Items</router-link>
                <router-link to="/sale" class="block text-gray-600 hover:text-indigo-600 py-2">Sale Items</router-link>
              </div>
            </div>

            <router-link to="/blog" class="flex items-center text-gray-700 hover:text-indigo-600 py-2">
              <i class="pi pi-book mr-2"></i>
              Blog
            </router-link>

            <router-link to="/contact" class="flex items-center text-gray-700 hover:text-indigo-600 py-2">
              <i class="pi pi-envelope mr-2"></i>
              Contact
            </router-link>
          </nav>
        </div>
      </div>

      <!-- Overlay -->
      <div v-if="isMobileMenuOpen" 
           @click="toggleMobileMenu"
           class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isLoading: true,
      isMobileMenuOpen: false,
      showNewArrivals: false,
      showShop: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (!this.isMobileMenuOpen) {
        this.showNewArrivals = false
        this.showShop = false
      }
    },
    toggleNewArrivals() {
      this.showNewArrivals = !this.showNewArrivals
      if (this.showNewArrivals) this.showShop = false
    },
    toggleShop() {
      this.showShop = !this.showShop
      if (this.showShop) this.showNewArrivals = false
    }
  }
}
</script>

<style scoped>
/* Prevent body scroll when mobile menu is open */
:root {
  overflow: hidden;
}
</style>
