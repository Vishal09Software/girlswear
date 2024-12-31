<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 font-poppins">
        <!-- Header Component -->
        <Header />

        <!-- Product Details Section -->
        <div class="container mx-auto px-4 py-8 sm:py-12">
            <div class="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <!-- Product Image -->
                    <div class="w-full lg:w-1/2">
                        <div class="relative">
                            <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20"></div>
                            <img :src="product.image" :alt="product.name" class="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl shadow-lg object-cover" />
                        </div>
                        <div class="grid grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
                            <button v-for="(image, index) in product.images" 
                                :key="index"
                                class="w-full h-16 sm:h-24 bg-gray-100 rounded-lg cursor-pointer hover:bg-indigo-100 transition duration-300 flex items-center justify-center overflow-hidden"
                                :class="{'border-2 border-indigo-600': selectedImage === image}">
                                <img :src="image" :alt="`View ${index + 1}`" class="w-full h-full object-cover" />
                            </button>
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <h1 class="text-2xl sm:text-3xl lg:text-5xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">{{ product.name }}</h1>
                        <div class="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div class="flex items-center">
                                <i v-for="n in 5" :key="n" class="pi text-sm sm:text-base" :class="n <= product.rating ? 'pi-star-fill text-yellow-400' : 'pi-star text-gray-300'"></i>
                            </div>
                            <span class="text-sm sm:text-base text-gray-600">({{ product.reviews }} reviews)</span>
                        </div>
                        <p class="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 sm:mb-6">{{ product.price }}</p>
                        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{{ product.description }}</p>

                        <!-- Size Selection -->
                        <div class="mb-6 sm:mb-8">
                            <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Select Size</h3>
                            <div class="flex flex-wrap gap-2 sm:gap-4">
                                <button v-for="size in product.sizes" :key="size" class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-gray-200 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none transition duration-300 text-sm sm:text-base">
                                    {{ size }}
                                </button>
                            </div>
                        </div>

                        <!-- Color Selection -->
                        <div class="mb-6 sm:mb-8">
                            <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Available Colors</h3>
                            <div class="flex flex-wrap gap-3 sm:gap-4">
                                <button v-for="color in product.colors" 
                                        :key="color" 
                                        class="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md hover:scale-110 focus:outline-none transition duration-300" 
                                        :style="{ backgroundColor: color }">
                                </button>
                            </div>
                        </div>

                        <!-- Add to Cart -->
                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <div class="flex items-center border-2 border-gray-200 rounded-xl">
                                <button class="px-3 sm:px-4 py-2 hover:text-indigo-600" @click="quantity > 1 && quantity--"><i class="pi pi-minus"></i></button>
                                <input type="number" v-model="quantity" class="w-12 sm:w-16 text-center border-none focus:outline-none text-sm sm:text-base">
                                <button class="px-3 sm:px-4 py-2 hover:text-indigo-600" @click="quantity++"><i class="pi pi-plus"></i></button>
                            </div>
                            <button class="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-sm sm:text-base">
                                <i class="pi pi-shopping-cart mr-2"></i>
                                Add to Cart
                            </button>
                            <button class="p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition duration-300">
                                <i class="pi pi-heart"></i>
                            </button>
                            <button class="p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition duration-300">
                                <i class="pi pi-sync"></i>
                            </button>
                        </div>

                        <!-- Additional Info -->
                        <div class="mt-8 sm:mt-12 border-t border-gray-200 pt-6 sm:pt-8">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <i class="pi pi-truck text-xl sm:text-2xl text-indigo-600"></i>
                                    <div>
                                        <h4 class="font-semibold text-sm sm:text-base">Free Shipping</h4>
                                        <p class="text-xs sm:text-sm text-gray-600">On orders over $100</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <i class="pi pi-refresh text-xl sm:text-2xl text-indigo-600"></i>
                                    <div>
                                        <h4 class="font-semibold text-sm sm:text-base">Easy Returns</h4>
                                        <p class="text-xs sm:text-sm text-gray-600">30-day return policy</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 sm:gap-4">
                                    <i class="pi pi-shield text-xl sm:text-2xl text-indigo-600"></i>
                                    <div>
                                        <h4 class="font-semibold text-sm sm:text-base">Secure Payment</h4>
                                        <p class="text-xs sm:text-sm text-gray-600">100% secure checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Tabs -->
                <div class="mt-12 sm:mt-16">
                    <div class="border-b border-gray-200 overflow-x-auto">
                        <nav class="flex gap-4 sm:gap-8 whitespace-nowrap">
                            <button @click="activeTab = 'description'" 
                                    :class="{'border-b-2 border-indigo-600 text-indigo-600': activeTab === 'description'}"
                                    class="py-3 sm:py-4 text-sm sm:text-base font-medium hover:text-indigo-600">
                                Description
                            </button>
                            <button @click="activeTab = 'specifications'"
                                    :class="{'border-b-2 border-indigo-600 text-indigo-600': activeTab === 'specifications'}"
                                    class="py-3 sm:py-4 text-sm sm:text-base font-medium hover:text-indigo-600">
                                Specifications
                            </button>
                            <button @click="activeTab = 'reviews'"
                                    :class="{'border-b-2 border-indigo-600 text-indigo-600': activeTab === 'reviews'}"
                                    class="py-3 sm:py-4 text-sm sm:text-base font-medium hover:text-indigo-600">
                                Reviews
                            </button>
                        </nav>
                    </div>
                    
                    <div class="py-6 sm:py-8">
                        <div v-if="activeTab === 'description'" class="prose max-w-none text-sm sm:text-base">
                            <p>{{ product.fullDescription }}</p>
                        </div>
                        <div v-if="activeTab === 'specifications'" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div v-for="(spec, index) in product.specifications" :key="index" class="flex justify-between py-2 border-b text-sm sm:text-base">
                                <span class="font-medium">{{ spec.label }}</span>
                                <span class="text-gray-600">{{ spec.value }}</span>
                            </div>
                        </div>
                        <div v-if="activeTab === 'reviews'" class="space-y-4 sm:space-y-6">
                            <!-- Add Review Form -->
                            <div class="bg-gray-50 p-4 sm:p-6 rounded-xl mb-6">
                                <h3 class="text-lg sm:text-xl font-semibold mb-4">Write a Review</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                                        <div class="flex gap-2">
                                            <button v-for="n in 5" :key="n" 
                                                    @click="newReview.rating = n"
                                                    class="text-2xl focus:outline-none"
                                                    :class="n <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'">
                                                ★
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                                        <textarea v-model="newReview.comment" 
                                                rows="4" 
                                                class="w-full rounded-lg p-3 border-gray-200 focus:border-indigo-600 focus:ring-indigo-600"
                                                placeholder="Share your thoughts about this product..."></textarea>
                                    </div>
                                    <button @click="submitReview" 
                                            class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                                        Submit Review
                                    </button>
                                </div>
                            </div>

                            <!-- Existing Reviews -->
                            <div v-for="review in product.customerReviews" :key="review.id" class="border-b pb-4 sm:pb-6">
                                <div class="flex items-center gap-3 sm:gap-4 mb-2">
                                    <img :src="review.userImage" :alt="review.userName" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                                    <div>
                                        <h4 class="font-medium text-sm sm:text-base">{{ review.userName }}</h4>
                                        <div class="flex items-center">
                                            <i v-for="n in 5" :key="n" class="pi text-sm sm:text-base" :class="n <= review.rating ? 'pi-star-fill text-yellow-400' : 'pi-star text-gray-300'"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 text-sm sm:text-base">{{ review.comment }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Similar Products -->
                <div class="mt-12 sm:mt-16">
                    <h2 class="text-2xl sm:text-3xl font-playfair font-bold mb-6 sm:mb-8">Similar Products</h2>
                    <Carousel :items-to-show="1.2" :items-to-scroll="1" :wrap-around="true" :autoplay="4000" :transition="600" :mouseDrag="true" :touchDrag="true" :breakpoints="{
                        '640': {
                            itemsToShow: 2.2
                        },
                        '768': {
                            itemsToShow: 3.2
                        },
                        '1024': {
                            itemsToShow: 4
                        }
                    }">
                        <Slide v-for="product in similarProducts" :key="product.id">
                            <div class="px-2 sm:px-4">
                                <div class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 group">
                                    <div class="relative">
                                        <img :src="product.image" :alt="product.name" class="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-t-xl">
                                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div class="absolute top-4 right-4 space-y-2">
                                                <button class="bg-white/90 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300">
                                                    <i class="pi pi-sync text-sm sm:text-base"></i>
                                                </button>
                                                <button class="bg-white/90 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300">
                                                    <i class="pi pi-heart text-sm sm:text-base"></i>
                                                </button>
                                                <button class="bg-white/90 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300">
                                                    <i class="pi pi-shopping-cart text-sm sm:text-base"></i>
                                                </button>
                                            </div>
                                            <div class="absolute bottom-4 left-4">
                                                <span class="bg-indigo-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">New</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 sm:p-6">
                                        <h3 class="text-base sm:text-lg font-semibold mb-2 group-hover:text-indigo-600 transition duration-300">{{ product.name }}</h3>
                                        <div class="flex items-center mb-4">
                                            <div class="flex text-yellow-400 mr-2">
                                                <i v-for="n in 5" :key="n" class="pi text-sm sm:text-base" :class="n <= product.rating ? 'pi-star-fill' : 'pi-star'"></i>
                                            </div>
                                            <span class="text-gray-500 text-xs sm:text-sm">({{ product.reviews }} reviews)</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <span class="text-lg sm:text-xl font-bold text-indigo-600">{{ product.price }}</span>
                                                <span class="text-xs sm:text-sm text-gray-500 line-through ml-2">{{ product.oldPrice }}</span>
                                            </div>
                                            <router-link to="/product_details" class="bg-indigo-100 text-indigo-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 text-xs sm:text-sm">
                                                Quick View
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
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
    name: 'ProductDetails',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            quantity: 1,
            selectedImage: null,
            activeTab: 'description',
            newReview: {
                rating: 0,
                comment: ''
            },
            product: {
                name: 'Elegant Evening Dress',
                price: '$299.99',
                rating: 4.8,
                reviews: 156,
                description: 'A stunning evening dress crafted from premium silk fabric, featuring intricate beadwork and a flattering silhouette.',
                fullDescription: 'A stunning evening dress crafted from premium silk fabric, featuring intricate beadwork and a flattering silhouette. Perfect for special occasions and formal events. The dress features a sweetheart neckline, fitted bodice, and flowing skirt that creates an elegant and timeless look.',
                image: 'src/assets/images/placeholder.png',
                images: [
                    'src/assets/images/placeholder.png',
                    'src/assets/images/placeholder.png',
                    'src/assets/images/placeholder.png',
                    'src/assets/images/placeholder.png'
                ],
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                colors: ['#000000', '#3B82F6', '#EF4444', '#10B981', '#F59E0B'],
                specifications: [
                    { label: 'Material', value: 'Silk' },
                    { label: 'Style', value: 'Evening Dress' },
                    { label: 'Care Instructions', value: 'Dry Clean Only' },
                    { label: 'Country of Origin', value: 'Italy' }
                ],
                customerReviews: [
                    {
                        id: 1,
                        userName: 'Sarah Johnson',
                        userImage: 'src/assets/images/placeholder.png',
                        rating: 5,
                        comment: 'Beautiful dress! The quality is amazing and it fits perfectly.'
                    },
                    {
                        id: 2,
                        userName: 'Emily Davis',
                        userImage: 'src/assets/images/placeholder.png',
                        rating: 4,
                        comment: 'Lovely dress, but slightly longer than expected.'
                    }
                ]
            },
            similarProducts: [
                {
                    id: 1,
                    name: 'Cocktail Dress',
                    price: '$199.99',
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 2,
                    name: 'Summer Dress',
                    price: '$149.99',
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 3,
                    name: 'Maxi Dress',
                    price: '$249.99',
                    image: 'src/assets/images/placeholder.png'
                },
                {
                    id: 4,
                    name: 'Party Dress',
                    price: '$179.99',
                    image: 'src/assets/images/placeholder.png'
                }
            ]
        }
    },
    methods: {
        submitReview() {
            if (this.newReview.rating === 0 || !this.newReview.comment.trim()) {
                alert('Please provide both a rating and comment')
                return
            }

            const review = {
                id: this.product.customerReviews.length + 1,
                userName: 'Current User',
                userImage: 'src/assets/images/placeholder.png',
                rating: this.newReview.rating,
                comment: this.newReview.comment
            }

            this.product.customerReviews.unshift(review)
            this.product.reviews++

            // Reset form
            this.newReview.rating = 0
            this.newReview.comment = ''
        }
    }
}
</script>
