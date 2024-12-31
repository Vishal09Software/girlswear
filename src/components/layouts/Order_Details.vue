<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
    <Header />
    
    <div class="container mx-auto px-4 py-8 sm:py-12">
      <!-- Order Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Order Details
        </h1>
        <p class="text-gray-600 text-base sm:text-lg">Order #ORD-123456</p>
      </div>

      <!-- Order Status Timeline -->
      <div class="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <div class="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
          <div class="flex items-center space-x-3 sm:space-x-4 mb-4 md:mb-0">
            <span class="text-xl sm:text-2xl font-semibold">Status:</span>
            <span class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-700 font-medium">
              Processing
            </span>
          </div>
          <div class="text-gray-600 text-sm sm:text-base">
            Ordered on: August 15, 2023
          </div>
        </div>

        <div class="relative">
          <div class="h-1.5 sm:h-2 bg-gray-200 rounded-full">
            <div class="h-full w-1/2 bg-indigo-600 rounded-full"></div>
          </div>
          <div class="flex justify-between mt-3 sm:mt-4">
            <div class="text-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <i class="pi pi-check text-white text-xs sm:text-sm"></i>
              </div>
              <p class="text-xs sm:text-sm font-medium">Order Placed</p>
            </div>
            <div class="text-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <i class="pi pi-check text-white text-xs sm:text-sm"></i>
              </div>
              <p class="text-xs sm:text-sm font-medium">Processing</p>
            </div>
            <div class="text-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <i class="pi pi-truck text-gray-400 text-xs sm:text-sm"></i>
              </div>
              <p class="text-xs sm:text-sm font-medium text-gray-400">Shipped</p>
            </div>
            <div class="text-center">
              <div class="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <i class="pi pi-check text-gray-400 text-xs sm:text-sm"></i>
              </div>
              <p class="text-xs sm:text-sm font-medium text-gray-400">Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Details -->
      <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div class="md:col-span-2">
          <!-- Products -->
          <div class="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Order Items</h2>
            <div class="space-y-4 sm:space-y-6">
              <div class="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-6 p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition">
                <img src="https://via.placeholder.com/150" alt="Product" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl">
                <div class="flex-1">
                  <h3 class="font-medium text-base sm:text-lg mb-1.5 sm:mb-2">Floral Summer Dress</h3>
                  <p class="text-gray-600 text-sm sm:text-base mb-1.5 sm:mb-2">Size: M | Color: Blue</p>
                  <p class="text-gray-600 text-sm sm:text-base">Quantity: 1</p>
                </div>
                <div class="text-lg sm:text-xl font-semibold">$129.00</div>
              </div>

              <div class="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-6 p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition">
                <img src="https://via.placeholder.com/150" alt="Product" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl">
                <div class="flex-1">
                  <h3 class="font-medium text-base sm:text-lg mb-1.5 sm:mb-2">Denim Jacket</h3>
                  <p class="text-gray-600 text-sm sm:text-base mb-1.5 sm:mb-2">Size: S | Color: Light Blue</p>
                  <p class="text-gray-600 text-sm sm:text-base">Quantity: 1</p>
                </div>
                <div class="text-lg sm:text-xl font-semibold">$89.00</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="md:col-span-1">
          <div class="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 sticky top-8">
            <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Order Summary</h2>
            <div class="space-y-3 sm:space-y-4">
              <div class="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>$218.00</span>
              </div>
              <div class="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Shipping</span>
                <span>$12.00</span>
              </div>
              <div class="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Tax</span>
                <span>$21.80</span>
              </div>
              <div class="h-px bg-gray-200 my-3 sm:my-4"></div>
              <div class="flex justify-between text-lg sm:text-xl font-semibold">
                <span>Total</span>
                <span>$251.80</span>
              </div>
            </div>

            <button class="w-full mt-6 sm:mt-8 bg-indigo-600 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base hover:bg-indigo-700 transition flex items-center justify-center space-x-2">
              <i class="pi pi-download text-sm sm:text-base"></i>
              <span>Download Invoice</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'OrderDetails',
  components: {
    Header,
    Footer
  }
}
</script>
