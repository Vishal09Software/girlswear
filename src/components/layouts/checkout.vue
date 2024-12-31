<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100">
        <!-- Header -->
        <Header />

        <!-- Main Checkout Content -->
        <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div class="flex flex-col lg:flex-row gap-6 sm:gap-8">
                <!-- Left Column - Form -->
                <div class="lg:w-2/3 space-y-6 sm:space-y-8">
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                        <h2 class="text-2xl sm:text-3xl font-playfair font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                            Shipping Information
                        </h2>

                        <!-- Default Address -->
                        <div v-if="!showNewAddress" class="p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                                <h3 class="font-semibold text-base sm:text-lg">Default Address</h3>
                                <button @click="showNewAddress = true" class="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">
                                    <i class="pi pi-pencil mr-2"></i>
                                    Change Address
                                </button>
                            </div>
                            <div class="space-y-1 sm:space-y-2 text-sm sm:text-base">
                                <p>John Doe</p>
                                <p>123 Main Street</p>
                                <p>New York, NY 10001</p>
                                <p>United States</p>
                            </div>
                        </div>

                        <!-- New Address Form -->
                        <form v-if="showNewAddress" class="space-y-4 sm:space-y-6">
                            <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">First Name</label>
                                    <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Last Name</label>
                                    <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                            </div>

                            <div>
                                <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Email Address</label>
                                <input type="email" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                            </div>

                            <div>
                                <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Street Address</label>
                                <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                            </div>

                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">City</label>
                                    <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">State</label>
                                    <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">ZIP Code</label>
                                    <input type="text" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                            </div>

                            <div class="flex justify-end gap-3 sm:gap-4">
                                <button type="button" @click="showNewAddress = false" class="px-4 sm:px-6 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl hover:border-indigo-600 transition duration-200">
                                    Cancel
                                </button>
                                <button type="submit" class="px-4 sm:px-6 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-lg sm:rounded-xl hover:bg-indigo-700 transition duration-200">
                                    Save Address
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Payment Section -->
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                        <h2 class="text-2xl sm:text-3xl font-playfair font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                            Payment Details
                        </h2>
                        
                        <div class="space-y-4 sm:space-y-6">
                            <div class="border-b border-gray-200 overflow-x-auto">
                                <nav class="flex gap-2 sm:gap-4 min-w-max">
                                    <button @click="activeTab = 'card'" :class="['px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-b-2 transition duration-200', activeTab === 'card' ? 'border-indigo-600 text-indigo-600' : 'border-transparent']">
                                        <i class="pi pi-credit-card mr-2"></i>
                                        Credit Card
                                    </button>
                                    <button @click="activeTab = 'paypal'" :class="['px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-b-2 transition duration-200', activeTab === 'paypal' ? 'border-indigo-600 text-indigo-600' : 'border-transparent']">
                                        <i class="pi pi-paypal mr-2"></i>
                                        PayPal
                                    </button>
                                    <button @click="activeTab = 'bank'" :class="['px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-b-2 transition duration-200', activeTab === 'bank' ? 'border-indigo-600 text-indigo-600' : 'border-transparent']">
                                        <i class="pi pi-wallet mr-2"></i>
                                        Bank Transfer
                                    </button>
                                    <button @click="activeTab = 'cod'" :class="['px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-b-2 transition duration-200', activeTab === 'cod' ? 'border-indigo-600 text-indigo-600' : 'border-transparent']">
                                        <i class="pi pi-money-bill mr-2"></i>
                                        Cash on Delivery
                                    </button>
                                </nav>
                            </div>

                            <!-- Credit Card Form -->
                            <div v-if="activeTab === 'card'" class="space-y-4 sm:space-y-6">
                                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div class="col-span-2 sm:col-span-1">
                                        <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Card Number</label>
                                        <input type="text" placeholder="1234 5678 9012 3456" value="4111 1111 1111 1111" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Name on Card</label>
                                        <input type="text" placeholder="John Doe" value="John Smith" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Expiry Date</label>
                                        <input type="text" placeholder="MM/YY" value="12/25" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">CVV</label>
                                        <input type="password" placeholder="***" maxlength="3" value="123" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                    </div>
                                </div>
                            </div>

                            <!-- PayPal -->
                            <div v-if="activeTab === 'paypal'" class="text-center py-6 sm:py-8">
                                <i class="pi pi-paypal text-4xl sm:text-6xl text-blue-600 mb-3 sm:mb-4"></i>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2">Pay with PayPal</h3>
                                <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">You will be redirected to PayPal to complete your payment</p>
                                <button class="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg sm:rounded-xl hover:bg-blue-700 transition duration-200">
                                    Continue with PayPal
                                </button>
                            </div>

                            <!-- Bank Transfer -->
                            <div v-if="activeTab === 'bank'" class="space-y-4 sm:space-y-6">
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Account Holder Name</label>
                                    <input type="text" placeholder="Enter account holder name" value="John Smith" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Bank Name</label>
                                    <input type="text" placeholder="Enter bank name" value="Chase Bank" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">Account Number</label>
                                    <input type="text" placeholder="Enter account number" value="1234567890" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm sm:text-base mb-1.5 sm:mb-2">SWIFT/BIC Code</label>
                                    <input type="text" placeholder="Enter SWIFT/BIC code" value="CHASUS33XXX" class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition duration-200" />
                                </div>
                            </div>

                            <!-- Cash on Delivery -->
                            <div v-if="activeTab === 'cod'" class="text-center py-6 sm:py-8">
                                <i class="pi pi-money-bill text-4xl sm:text-6xl text-green-600 mb-3 sm:mb-4"></i>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2">Cash on Delivery</h3>
                                <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Pay with cash when your order is delivered</p>
                                <div class="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-left">
                                    <p class="text-xs sm:text-sm text-gray-600">
                                        <i class="pi pi-info-circle mr-2"></i>
                                        Additional fee of $5 will be charged for Cash on Delivery
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Order Summary -->
                <div class="lg:w-1/3">
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 lg:sticky lg:top-8">
                        <h2 class="text-2xl sm:text-3xl font-playfair font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                            Order Summary
                        </h2>

                        <div class="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            <div v-for="(item, index) in cartItems" :key="index" class="flex gap-3 sm:gap-4 py-3 sm:py-4 border-b">
                                <img :src="item.image" :alt="item.name" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg" />
                                <div class="flex-1">
                                    <h3 class="font-medium text-sm sm:text-base">{{ item.name }}</h3>
                                    <p class="text-gray-500 text-xs sm:text-sm">Qty: {{ item.quantity }}</p>
                                    <p class="text-indigo-600 font-medium text-sm sm:text-base">${{ item.price }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                            <div class="flex justify-between">
                                <span>Subtotal</span>
                                <span>${{ subtotal }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Shipping</span>
                                <span>${{ shipping }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Tax</span>
                                <span>${{ tax }}</span>
                            </div>
                            <div class="flex justify-between font-bold text-base sm:text-lg pt-2 sm:pt-3 border-t">
                                <span>Total</span>
                                <span class="text-indigo-600">${{ total }}</span>
                            </div>
                        </div>

                        <button class="w-full mt-6 sm:mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base py-3 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                            Place Order
                        </button>

                        <p class="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                            <i class="pi pi-lock mr-2"></i>
                            Secure Checkout
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Checkout',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            showNewAddress: false,
            activeTab: 'card',
            cartItems: [
                {
                    name: 'Designer Dress',
                    quantity: 1,
                    price: 129.99,
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    name: 'Casual Shirt',
                    quantity: 2,
                    price: 49.99,
                    image: 'src/assets/images/placeholder.png'
                }
            ],
            shipping: 9.99,
            tax: 18.99
        }
    },
    computed: {
        subtotal() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        total() {
            return this.subtotal + this.shipping + this.tax
        }
    }
}
</script>

<style scoped>
@media (max-width: 1023px) {
    .sticky {
        position: static;
    }
}

@media (min-width: 1024px) {
    .sticky {
        position: sticky;
        top: 2rem;
    }
}
</style>
