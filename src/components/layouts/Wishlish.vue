<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
        <!-- Header -->
        <Header />

        <!-- Wishlist Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl sm:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    My Wishlist
                </h1>
                <p class="text-gray-600 text-lg">Keep track of all your favorite items</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Wishlist Items List -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-3xl shadow-xl p-6 mb-6">
                        <div v-if="wishlistItems.length > 0">
                            <div v-for="(item, index) in wishlistItems" :key="index" 
                                class="flex flex-col sm:flex-row items-center gap-6 p-4 border-b border-gray-100 last:border-0">
                                <img :src="item.image" :alt="item.name" 
                                    class="w-32 h-32 object-cover rounded-2xl">
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
                                    <div class="flex items-center gap-4 mb-2">
                                        <div class="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                                            <i class="pi pi-star-fill text-amber-500 mr-1"></i>
                                            <span class="font-medium">{{ item.rating }}</span>
                                        </div>
                                        <span class="text-xl font-bold text-indigo-600">${{ item.price }}</span>
                                    </div>
                                    <button @click="addToCart(item)" 
                                        class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                                        <i class="pi pi-shopping-cart mr-2"></i>
                                        Add to Cart
                                    </button>
                                </div>
                                <button @click="removeFromWishlist(item.id)"
                                    class="p-2 text-gray-400 hover:text-red-500 transition">
                                    <i class="pi pi-heart-fill text-xl"></i>
                                </button>
                            </div>
                        </div>
                        <div v-else class="text-center py-12">
                            <i class="pi pi-heart text-6xl text-gray-200 mb-4"></i>
                            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
                            <p class="text-gray-600 mb-6">Start adding items you love!</p>
                            <router-link to="/shop" 
                                class="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                                <i class="pi pi-shopping-bag mr-2"></i>
                                Continue Shopping
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-3xl shadow-xl p-6 sticky top-6">
                        <h2 class="text-2xl font-semibold mb-6">Wishlist Summary</h2>
                        <div class="space-y-4 mb-6">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Total Items</span>
                                <span class="font-semibold">{{ wishlistItems.length }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Total Value</span>
                                <span class="font-semibold">${{ getTotalValue() }}</span>
                            </div>
                        </div>
                        <button @click="addAllToCart" 
                            class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                            Add All to Cart
                        </button>
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
    name: 'Wishlist',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            wishlistItems: [
                {
                    id: 1,
                    name: 'Designer Handbag',
                    price: 299.99,
                    rating: 4.8,
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 2,
                    name: 'Luxury Watch',
                    price: 599.99,
                    rating: 4.9,
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 3,
                    name: 'Summer Dress',
                    price: 89.99,
                    rating: 4.7,
                    image: 'src/assets/images/placeholder.png'
                }
            ]
        }
    },
    methods: {
        removeFromWishlist(itemId) {
            this.wishlistItems = this.wishlistItems.filter(item => item.id !== itemId)
        },
        addToCart(item) {
            // Implement add to cart functionality
            console.log('Added to cart:', item)
        },
        addAllToCart() {
            // Implement add all to cart functionality
            console.log('Adding all items to cart')
        },
        getTotalValue() {
            return this.wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(2)
        }
    }
}
</script>

<style scoped>
/* Add Poppins and Playfair Display fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
</style>
