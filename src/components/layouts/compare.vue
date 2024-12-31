<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
        <!-- Header -->
        <Header />

        <!-- Compare Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl sm:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    Compare Products
                </h1>
                <p class="text-gray-600 text-lg">Make the right choice by comparing features side by side</p>
            </div>

            <div class="bg-white rounded-3xl shadow-xl p-6 mb-6 overflow-x-auto">
                <div v-if="compareItems.length > 0" class="min-w-[768px]">
                    <!-- Compare Table -->
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="p-4 text-left text-gray-600">Features</th>
                                <th v-for="item in compareItems.slice(0,2)" :key="item.id" class="p-4 w-1/3">
                                    <div class="relative">
                                        <button @click="removeFromCompare(item.id)" 
                                            class="absolute -top-2 -right-2 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition">
                                            <i class="pi pi-times"></i>
                                        </button>
                                        <img :src="item.image" :alt="item.name" 
                                            class="w-full h-48 object-cover rounded-xl mb-4 transition-transform hover:scale-105">
                                        <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
                                        <div class="text-2xl font-bold text-indigo-600 mb-4">${{ item.price }}</div>
                                        <button @click="addToCart(item)" 
                                            class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                                            <i class="pi pi-shopping-cart mr-2"></i>
                                            Add to Cart
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Rating</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`rating-${item.id}`" class="p-4">
                                    <div class="flex items-center justify-center bg-amber-50 rounded-full py-2">
                                        <i class="pi pi-star-fill text-amber-500 mr-2"></i>
                                        <span class="font-semibold">{{ item.rating }}/5</span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Availability</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`stock-${item.id}`" class="p-4">
                                    <div class="flex items-center justify-center">
                                        <span class="px-4 py-1 rounded-full" 
                                            :class="item.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'">
                                            {{ item.stock }} in stock
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Material</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`material-${item.id}`" class="p-4 text-center">
                                    {{ item.material }}
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Color</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`color-${item.id}`" class="p-4 text-center">
                                    {{ item.color }}
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Dimensions</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`dimensions-${item.id}`" class="p-4 text-center">
                                    {{ item.dimensions }}
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 text-gray-600">Warranty</td>
                                <td v-for="item in compareItems.slice(0,2)" :key="`warranty-${item.id}`" class="p-4 text-center">
                                    {{ item.warranty }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="text-center py-12">
                    <div class="animate-bounce mb-6">
                        <i class="pi pi-sync text-6xl text-gray-200"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-2">No items to compare</h3>
                    <p class="text-gray-600 mb-6">Select products to start comparing</p>
                    <router-link to="/shop" 
                        class="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                        <i class="pi pi-shopping-bag mr-2"></i>
                        Browse Products
                    </router-link>
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
    name: 'Compare',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            compareItems: [
                {
                    id: 1,
                    name: 'Classic Chronograph Watch',
                    price: 299.99,
                    rating: 4.8,
                    stock: 15,
                    image: 'src/assets/images/placeholder.png',
                    material: 'Stainless Steel, Sapphire Crystal',
                    color: 'Silver/Black',
                    dimensions: '42mm case diameter, 22mm band width',
                    warranty: '2 Years International'
                },
                {
                    id: 2,
                    name: 'Premium Leather Tote Bag',
                    price: 199.99,
                    rating: 4.6,
                    stock: 8,
                    image: 'src/assets/images/placeholder.png',
                    material: 'Full-grain Italian Leather',
                    color: 'Cognac Brown',
                    dimensions: '14"L x 11"H x 6"W',
                    warranty: '1 Year Limited'
                }
            ]
        }
    },
    methods: {
        removeFromCompare(itemId) {
            this.compareItems = this.compareItems.filter(item => item.id !== itemId)
        },
        addToCart(item) {
            // Implement add to cart functionality
            console.log('Added to cart:', item)
        }
    }
}
</script>

<style scoped>
/* Add Poppins and Playfair Display fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
</style>
