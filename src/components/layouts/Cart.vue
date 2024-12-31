<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
        <!-- Header -->
        <Header />

        <!-- Cart Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl sm:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    Shopping Cart
                </h1>
                <p class="text-gray-600 text-lg">Review and manage your selected items</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Cart Items List -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-3xl shadow-xl p-6 mb-6">
                        <div v-if="cartItems.length > 0">
                            <div v-for="(item, index) in cartItems" :key="index" 
                                class="flex flex-col sm:flex-row items-center gap-6 p-4 border-b border-gray-100 last:border-0">
                                <img :src="item.image" :alt="item.name" 
                                    class="w-32 h-32 object-cover rounded-2xl">
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
                                    <p class="text-gray-500 mb-2">Size: {{ item.size }}</p>
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center bg-gray-50 rounded-full">
                                            <button @click="decrementQuantity(item)" 
                                                class="p-2 hover:text-indigo-600 transition">
                                                <i class="pi pi-minus"></i>
                                            </button>
                                            <span class="w-8 text-center">{{ item.quantity }}</span>
                                            <button @click="incrementQuantity(item)"
                                                class="p-2 hover:text-indigo-600 transition">
                                                <i class="pi pi-plus"></i>
                                            </button>
                                        </div>
                                        <span class="text-xl font-bold text-indigo-600">${{ item.price }}</span>
                                    </div>
                                </div>
                                <button @click="removeFromCart(item.id)"
                                    class="p-2 text-gray-400 hover:text-red-500 transition">
                                    <i class="pi pi-trash text-xl"></i>
                                </button>
                            </div>
                        </div>
                        <div v-else class="text-center py-12">
                            <i class="pi pi-shopping-cart text-6xl text-gray-200 mb-4"></i>
                            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                            <p class="text-gray-600 mb-6">Add items to start shopping</p>
                            <router-link to="/shop" 
                                class="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                                <i class="pi pi-shopping-bag mr-2"></i>
                                Continue Shopping
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-3xl shadow-xl p-6 sticky top-6">
                        <h2 class="text-2xl font-semibold mb-6">Order Summary</h2>
                        <div class="space-y-4 mb-6">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Subtotal</span>
                                <span class="font-semibold">${{ subtotal }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Shipping</span>
                                <span class="font-semibold">${{ shipping }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Tax</span>
                                <span class="font-semibold">${{ tax }}</span>
                            </div>
                            <div class="border-t pt-4">
                                <div class="flex justify-between">
                                    <span class="text-lg font-semibold">Total</span>
                                    <span class="text-xl font-bold text-indigo-600">${{ total }}</span>
                                </div>
                            </div>
                        </div>
                        <router-link to="/checkout" class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex items-center justify-center text-lg font-medium">
                            <i class="pi pi-credit-card mr-2"></i>
                            Proceed to Checkout
                        </router-link>
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
    name: 'Cart',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            cartItems: [
                {
                    id: 1,
                    name: 'Designer Dress',
                    price: 199.99,
                    size: 'M',
                    quantity: 1,
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 2,
                    name: 'Leather Handbag',
                    price: 299.99,
                    size: 'One Size',
                    quantity: 1,
                    image: 'src/assets/images/placeholder.png'
                }
            ],
            shipping: 15.00,
            taxRate: 0.10
        }
    },
    computed: {
        subtotal() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
        },
        tax() {
            return (this.subtotal * this.taxRate).toFixed(2)
        },
        total() {
            return (parseFloat(this.subtotal) + parseFloat(this.shipping) + parseFloat(this.tax)).toFixed(2)
        }
    },
    methods: {
        incrementQuantity(item) {
            item.quantity++
        },
        decrementQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--
            }
        },
        removeFromCart(itemId) {
            this.cartItems = this.cartItems.filter(item => item.id !== itemId)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
</style>
