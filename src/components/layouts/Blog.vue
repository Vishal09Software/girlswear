<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 font-poppins">
        <!-- Header Component -->
        <Header />

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Main Content -->
                <div class="lg:w-3/4">
                    <!-- Blog Hero Section -->
                    <div class="relative rounded-3xl overflow-hidden mb-12">
                        <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-8">
                            <h1 class="text-4xl md:text-6xl font-playfair font-bold text-center mb-6">Our Blog</h1>
                            <p class="text-lg text-center max-w-2xl mx-auto opacity-90">Discover the latest trends, style tips, and fashion insights from our expert community</p>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-50/80 to-transparent"></div>
                    </div>

                    <!-- Featured Posts Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="(post, index) in featuredPosts" :key="index" 
                            class="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl">
                            <div class="relative h-64 overflow-hidden">
                                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <span class="absolute bottom-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    {{ post.category }}
                                </span>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-4">
                                    <img :src="post.authorImage" :alt="post.author" class="w-10 h-10 rounded-full ring-2 ring-indigo-100">
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
                                        <p class="text-xs text-gray-500">{{ post.date }}</p>
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold mb-3 group-hover:text-indigo-600 transition duration-300">
                                    {{ post.title }}
                                </h3>
                                <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>
                                <router-link :to="'/blog_details'" class="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
                                    Read More
                                    <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:w-1/4 space-y-8">
                    <!-- Search -->
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <h3 class="text-xl font-bold mb-4">Search Posts</h3>
                        <div class="relative">
                            <input type="text" placeholder="Search..." 
                                class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition duration-300">
                            <i class="pi pi-search absolute right-4 top-3.5 text-gray-400"></i>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <h3 class="text-xl font-bold mb-4">Categories</h3>
                        <div class="space-y-2">
                            <a v-for="category in ['Fashion Trends', 'Style Guide', 'Sustainability', 'Vintage Style']" 
                               :key="category"
                               href="#" 
                               class="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 transition duration-300">
                                <span class="text-gray-700">{{ category }}</span>
                                <span class="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg text-sm">12</span>
                            </a>
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                        <h3 class="text-xl font-bold mb-4">Newsletter</h3>
                        <p class="text-sm mb-4 opacity-90">Get the latest fashion updates straight to your inbox</p>
                        <input type="email" placeholder="Your email" 
                            class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white mb-4">
                        <button class="w-full bg-white text-indigo-600 py-3 rounded-xl font-medium hover:bg-opacity-90 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Component -->
        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

const featuredPosts = [
    {
        title: "The Ultimate Guide to Summer Fashion Trends 2024",
        excerpt: "Discover the hottest trends that will dominate the fashion scene this summer season.",
        image: "src/assets/images/placeholder.png",
        author: "Emma Wilson",
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 15, 2024",
        category: "Fashion Trends"
    },
    {
        title: "Sustainable Fashion: Making Ethical Choices",
        excerpt: "Learn how to build a sustainable wardrobe while staying stylish and environmentally conscious.",
        image: "src/assets/images/placeholder.png",
        author: "James Anderson",
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 12, 2024",
        category: "Sustainability"
    },
    {
        title: "Accessorizing 101: Complete Your Look",
        excerpt: "Master the art of accessorizing with our comprehensive guide to jewelry and accessories.",
        image: "src/assets/images/placeholder.png",
        author: "Sophie Chen",
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 10, 2024",
        category: "Style Guide"
    },
    {
        title: "Vintage Fashion: Timeless Pieces for Modern Wardrobes",
        excerpt: "Incorporate classic vintage pieces into your contemporary style with these expert tips.",
        image: "src/assets/images/placeholder.png",
        author: "David Miller", 
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 8, 2024",
        category: "Vintage Style"
    },
    {
        title: "Street Style: Urban Fashion Inspiration",
        excerpt: "Get inspired by the latest street style trends from fashion capitals around the world.",
        image: "src/assets/images/placeholder.png",
        author: "Alex Johnson",
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 5, 2024",
        category: "Street Fashion"
    },
    {
        title: "Minimalist Fashion: Less is More",
        excerpt: "Embrace the minimalist aesthetic with our guide to building a capsule wardrobe.",
        image: "src/assets/images/placeholder.png",
        author: "Linda Park",
        authorImage: "src/assets/images/placeholder.png",
        date: "Mar 3, 2024",
        category: "Minimalism"
    }
];
</script>

<style scoped>
.transform:hover {
    transform: translateY(-0.5rem);
}
</style>
