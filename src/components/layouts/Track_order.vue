<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <div class="flex-grow container mx-auto px-4 py-12">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <!-- Title Section -->
                    <div class="text-center mb-8">
                        <h1
                            class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Track Your Order</h1>
                        <p class="text-gray-600 mt-2">Enter your order number to track your package</p>
                    </div>

                    <!-- Search Form -->
                    <form @submit.prevent="trackOrder" class="space-y-6">
                        <div class="relative">
                            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="text" v-model="orderNumber" placeholder="Enter Order Number"
                                class="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
                        </div>

                        <button type="submit"
                            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                            <i class="pi pi-truck"></i>
                            Track Now
                        </button>
                    </form>

                    <!-- Order Status (shown when order is found) -->
                    <div v-if="orderStatus" class="mt-12">
                        <div class="border-t border-gray-100 pt-8">
                            <h2 class="text-xl font-semibold mb-6">Order Status</h2>

                            <!-- Status Timeline -->
                            <div class="relative">
                                <div class="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                                <div class="space-y-8">
                                    <div class="relative flex items-start">
                                        <div
                                            class="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white relative z-10">
                                            <i class="pi pi-check text-sm"></i>
                                        </div>
                                        <div class="ml-6">
                                            <h3 class="font-medium">Order Confirmed</h3>
                                            <p class="text-sm text-gray-500">Your order has been confirmed</p>
                                            <p class="text-xs text-gray-400 mt-1">June 12, 2023 - 10:30 AM</p>
                                        </div>
                                    </div>

                                    <div class="relative flex items-start">
                                        <div
                                            class="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white relative z-10">
                                            <i class="pi pi-check text-sm"></i>
                                        </div>
                                        <div class="ml-6">
                                            <h3 class="font-medium">Processing</h3>
                                            <p class="text-sm text-gray-500">Your order is being processed</p>
                                            <p class="text-xs text-gray-400 mt-1">June 13, 2023 - 2:45 PM</p>
                                        </div>
                                    </div>

                                    <div class="relative flex items-start">
                                        <div
                                            class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white relative z-10">
                                            <i class="pi pi-sync text-sm"></i>
                                        </div>
                                        <div class="ml-6">
                                            <h3 class="font-medium">In Transit</h3>
                                            <p class="text-sm text-gray-500">Your package is on the way</p>
                                            <p class="text-xs text-gray-400 mt-1">June 14, 2023 - 9:15 AM</p>
                                        </div>
                                    </div>

                                    <div class="relative flex items-start">
                                        <div
                                            class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-400 relative z-10">
                                            <i class="pi pi-home text-sm"></i>
                                        </div>
                                        <div class="ml-6">
                                            <h3 class="font-medium text-gray-400">Delivered</h3>
                                            <p class="text-sm text-gray-500">Estimated delivery: June 16, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            orderNumber: '',
            orderStatus: false
        };
    },
    methods: {
        trackOrder() {
            // Simulate order tracking
            if (this.orderNumber) {
                this.orderStatus = true;
            }
        }
    }
};
</script>
