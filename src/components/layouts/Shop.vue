<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Component -->
    <Header />

    <!-- Shop Banner -->
    <div class="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="text-center">
          <span
            class="bg-white/20 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md mb-2 sm:mb-4 inline-block">New
            Collection 2024</span>
          <h1 class="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-6 font-playfair">Our Collection</h1>
          <p class="text-sm sm:text-base md:text-xl text-white/90 max-w-xl mx-auto">Discover our curated selection of premium fashion pieces</p>
        </div>
      </div>
    </div>

    <!-- Special Offers Section -->
    <div class="container mx-auto px-4 -mt-8 sm:-mt-12 md:-mt-16 relative z-20 mb-8 sm:mb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 transform hover:-translate-y-2 transition duration-300">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="bg-indigo-100 p-2 sm:p-3 rounded-lg sm:rounded-xl">
              <i class="pi pi-percentage text-xl sm:text-2xl text-indigo-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-base sm:text-lg">Special Offer</h3>
              <p class="text-sm sm:text-base text-gray-600">Get 20% off on new arrivals</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 transform hover:-translate-y-2 transition duration-300">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="bg-purple-100 p-2 sm:p-3 rounded-lg sm:rounded-xl">
              <i class="pi pi-truck text-xl sm:text-2xl text-purple-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-base sm:text-lg">Free Shipping</h3>
              <p class="text-sm sm:text-base text-gray-600">On orders above $100</p>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 transform hover:-translate-y-2 transition duration-300 hidden lg:block">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="bg-pink-100 p-2 sm:p-3 rounded-lg sm:rounded-xl">
              <i class="pi pi-gift text-xl sm:text-2xl text-pink-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-base sm:text-lg">Flash Sale</h3>
              <p class="text-sm sm:text-base text-gray-600">Up to 50% off today only</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shop Content -->
    <div class="container mx-auto px-4 py-6 sm:py-12">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <!-- Sidebar Filters -->
        <div class="lg:w-64 flex-shrink-0">
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 sticky top-4">
            <div class="flex items-center justify-between mb-4 sm:mb-6">
              <h3 class="font-bold text-lg sm:text-xl">Filters</h3>
              <button class="text-indigo-600 text-xs sm:text-sm hover:underline">Clear All</button>
            </div>

            <!-- Special Deals Counter -->
            <div class="mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl text-white">
              <h4 class="font-bold text-lg mb-2">Flash Sale Ends In:</h4>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="bg-white/20 rounded-lg p-2">
                  <span class="block text-2xl font-bold">24</span>
                  <span class="text-xs">Hours</span>
                </div>
                <div class="bg-white/20 rounded-lg p-2">
                  <span class="block text-2xl font-bold">45</span>
                  <span class="text-xs">Mins</span>
                </div>
                <div class="bg-white/20 rounded-lg p-2">
                  <span class="block text-2xl font-bold">30</span>
                  <span class="text-xs">Secs</span>
                </div>
              </div>
            </div>

            <!-- Best Offers -->
            <div class="mb-6 bg-gradient-to-br from-pink-50 to-indigo-50 p-4 rounded-xl border border-indigo-100">
              <h4 class="font-bold text-lg mb-3">Today's Best Deals</h4>
              <div class="space-y-3">
                <div class="flex items-center gap-3 bg-white p-2 rounded-lg">
                  <img src="@/assets/images/placeholder.png" class="w-12 h-12 object-cover rounded-md" alt="Product">
                  <div>
                    <h5 class="font-medium">Summer Dress</h5>
                    <span class="text-indigo-600 font-bold">50% OFF</span>
                  </div>
                </div>
                <div class="flex items-center gap-3 bg-white p-2 rounded-lg">
                  <img src="@/assets/images/placeholder.png" class="w-12 h-12 object-cover rounded-md" alt="Product">
                  <div>
                    <h5 class="font-medium">Designer Bag</h5>
                    <span class="text-indigo-600 font-bold">30% OFF</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Categories -->
            <div class="space-y-4 sm:space-y-6">
              <div>
                <h4 class="font-medium text-base sm:text-lg mb-3 sm:mb-4">Categories</h4>
                <div class="space-y-2 sm:space-y-3">
                  <label class="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                    <input type="checkbox"
                      class="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <span class="text-sm sm:text-base text-gray-700 group-hover:text-indigo-600 transition">Dresses</span>
                  </label>
                  <label class="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                    <input type="checkbox"
                      class="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <span class="text-sm sm:text-base text-gray-700 group-hover:text-indigo-600 transition">Tops</span>
                  </label>
                  <label class="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                    <input type="checkbox"
                      class="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <span class="text-sm sm:text-base text-gray-700 group-hover:text-indigo-600 transition">Bottoms</span>
                  </label>
                  <label class="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                    <input type="checkbox"
                      class="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <span class="text-sm sm:text-base text-gray-700 group-hover:text-indigo-600 transition">Accessories</span>
                  </label>
                </div>
              </div>

              <!-- Price Range -->
              <div>
                <h4 class="font-medium text-base sm:text-lg mb-3 sm:mb-4">Price Range</h4>
                <div class="space-y-3 sm:space-y-4">
                  <input type="range" min="0" max="1000" class="w-full accent-indigo-600" v-model="priceRange">
                  <div class="flex justify-between items-center">
                    <div class="bg-gray-100 px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                      <span class="text-sm sm:text-base text-gray-600">$0</span>
                    </div>
                    <div class="bg-gray-100 px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                      <span class="text-sm sm:text-base text-gray-600">${{ priceRange }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size -->
              <div>
                <h4 class="font-medium text-base sm:text-lg mb-3 sm:mb-4">Size</h4>
                <div class="grid grid-cols-3 gap-1 sm:gap-2">
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">XS</button>
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">S</button>
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">M</button>
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">L</button>
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">XL</button>
                  <button
                    class="px-2 sm:px-4 py-1 sm:py-2 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition">XXL</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Filters and View Toggle -->
          <div class="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <select
              class="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-lg sm:rounded-xl text-sm sm:text-base shadow-sm border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>

            <div class="flex gap-1 sm:gap-2 bg-white rounded-lg sm:rounded-xl p-1 shadow-sm border-2 border-gray-200">
              <button @click="viewMode = 'grid'" :class="{ 'bg-indigo-600 text-white': viewMode === 'grid' }"
                class="p-1.5 sm:p-2 rounded-lg transition">
                <i class="pi pi-th-large text-lg sm:text-xl"></i>
              </button>
              <button @click="viewMode = 'list'" :class="{ 'bg-indigo-600 text-white': viewMode === 'list' }"
                class="p-1.5 sm:p-2 rounded-lg transition">
                <i class="pi pi-list text-lg sm:text-xl"></i>
              </button>
            </div>
          </div>

          <!-- Products Grid/List View -->
          <div
            :class="{ 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6': viewMode === 'grid', 'space-y-4 sm:space-y-6': viewMode === 'list' }">
            <div v-for="i in 12" :key="i" class="bg-white rounded-xl sm:rounded-2xl shadow-lg group"
              :class="{ 'flex flex-col sm:flex-row': viewMode === 'list' }">
              <div class="relative overflow-hidden" :class="{ 'w-full sm:w-1/3': viewMode === 'list' }">
                <img :src="`src/assets/images/placeholder.png`"
                  class="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-xl sm:rounded-t-2xl transition duration-700 group-hover:scale-110"
                  :class="{ 'sm:rounded-l-2xl sm:rounded-t-none h-full': viewMode === 'list' }" alt="Product Image">
                <div
                  class="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <button class="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition">
                    <i class="pi pi-sync text-sm sm:text-base"></i>
                  </button>
                  <button class="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition">
                    <i class="pi pi-heart text-sm sm:text-base"></i>
                  </button>
                  <button class="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition">
                    <i class="pi pi-shopping-cart text-sm sm:text-base"></i>
                  </button>
                </div>
                <div class="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span class="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">-20%</span>
                </div>
              </div>
              <div class="p-4 sm:p-6" :class="{ 'w-full sm:w-2/3': viewMode === 'list' }">
                <div class="flex items-center gap-2 mb-2 sm:mb-3">
                  <span class="bg-indigo-100 text-indigo-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">New</span>
                  <span class="bg-green-100 text-green-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">In Stock</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-indigo-600 transition">Fashion Item #{{ i }}</h3>
                <div class="flex items-center gap-2 mb-3 sm:mb-4">
                  <div class="flex text-yellow-400 text-sm sm:text-base">
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star"></i>
                  </div>
                  <span class="text-gray-500 text-xs sm:text-sm">(24)</span>
                </div>
                <p v-if="viewMode === 'list'" class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div class="flex items-center justify-between">
                  <div class="space-x-1 sm:space-x-2">
                    <span class="text-xl sm:text-2xl font-bold text-indigo-600">$99.99</span>
                    <span class="text-sm sm:text-base text-gray-500 line-through">$129.99</span>
                  </div>
                  <router-link to="/product_details"
                    class="inline-flex items-center gap-1 sm:gap-2 bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-indigo-700 transition">
                    <span>Quick View</span>
                    <i class="pi pi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12">
            <button
              class="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition">
              <i class="pi pi-chevron-left text-sm sm:text-base"></i>
            </button>
            <button class="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm sm:text-base">1</button>
            <button
              class="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition text-sm sm:text-base">2</button>
            <button
              class="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition text-sm sm:text-base">3</button>
            <button
              class="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition">
              <i class="pi pi-chevron-right text-sm sm:text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Shop',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      viewMode: 'grid',
      priceRange: 500
    }
  }
}
</script>
