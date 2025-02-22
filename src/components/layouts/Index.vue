<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
        <!-- Header Component -->
        <Header />

        <!-- Flash Deal Popup -->
        <div class="fixed inset-0 z-50 flex items-center justify-center px-4" v-show="showFlashDeal">
            <div class="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" @click="closeFlashDeal"></div>

            <div
                class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all animate-popup">
                <!-- Close Button -->
                <button @click="showFlashDeal = false"
                    class="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
                    <i class="pi pi-times text-gray-600"></i>
                </button>

                <!-- Content -->
                <div class="p-6 sm:p-8">
                    <!-- Header -->
                    <div class="text-center mb-6">
                        <span
                            class="inline-block animate-bounce bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-3">
                            Limited Time Offer
                        </span>
                        <h2
                            class="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            Flash Sale! 🎉
                        </h2>
                        <p class="text-gray-600">Get amazing deals before they're gone</p>
                    </div>

                    <!-- Timer -->
                    <div class="flex justify-center gap-4 mb-8">
                        <div
                            class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 text-center min-w-[70px]">
                            <span class="block text-2xl font-bold text-indigo-600">{{ Math.floor(timeLeft / 3600)
                                }}</span>
                            <span class="text-sm text-gray-600">Hours</span>
                        </div>
                        <div
                            class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 text-center min-w-[70px]">
                            <span class="block text-2xl font-bold text-indigo-600">{{ Math.floor((timeLeft % 3600) / 60)
                                }}</span>
                            <span class="text-sm text-gray-600">Minutes</span>
                        </div>
                        <div
                            class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 text-center min-w-[70px]">
                            <span class="block text-2xl font-bold text-indigo-600">{{ timeLeft % 60 }}</span>
                            <span class="text-sm text-gray-600">Seconds</span>
                        </div>
                    </div>

                    <!-- Offer Details -->
                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-3">
                            <i class="pi pi-check-circle text-green-500"></i>
                            <span class="text-gray-700">Up to 70% off on selected items</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="pi pi-check-circle text-green-500"></i>
                            <span class="text-gray-700">Free shipping on orders over $50</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="pi pi-check-circle text-green-500"></i>
                            <span class="text-gray-700">Extra 10% off for new customers</span>
                        </div>
                    </div>

                    <!-- CTA Button -->
                    <button @click="goToShop"
                        class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                        <i class="pi pi-shopping-cart"></i>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>

        <!-- Hero Section with Carousel -->
        <div class="relative">
            <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000" :transition="1000" :mouseDrag="true"
                :touchDrag="true" class="h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px]">
                <Slide v-for="(slide, index) in slides" :key="index">
                    <div
                        class="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px] transition-all duration-500 ease-in-out">
                        <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
                            <div
                                class="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
                                <div class="lg:w-1/2 text-center lg:text-left">
                                    <h1
                                        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 animate-fade-in leading-tight">
                                        {{ slide.title }} <span
                                            class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">{{
                                                slide.highlight }}</span>
                                    </h1>
                                    <p
                                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                        {{ slide.description }}
                                    </p>
                                    <div
                                        class="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
                                        <a href="#collections"
                                            class="group inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-sm sm:text-base">
                                            <i class="pi pi-shopping-bag mr-2 sm:mr-3 group-hover:animate-bounce"></i>
                                            Explore Collection
                                        </a>
                                        <router-link to="/register"
                                            class="group inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:bg-indigo-600 hover:text-white transform hover:-translate-y-1 transition duration-300 text-sm sm:text-base">
                                            <i
                                                class="pi pi-user-plus mr-2 sm:mr-3 group-hover:rotate-12 transition-transform"></i>
                                            Join Our Community
                                        </router-link>
                                    </div>
                                </div>
                                <div class="lg:w-1/2 mt-6 lg:mt-0">
                                    <div class="relative">
                                        <div
                                            class="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-[2rem] blur opacity-20 animate-pulse">
                                        </div>
                                        <img :src="slide.image" :alt="slide.imageAlt"
                                            class="relative rounded-[2rem] shadow-2xl hover:shadow-3xl transition duration-300 transform hover:scale-102 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation>
                        <template #next>
                            <button
                                class="hidden sm:block carousel-nav next bg-white/90 backdrop-blur-sm p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <i class="pi pi-chevron-right text-base sm:text-lg lg:text-xl"></i>
                            </button>
                        </template>
                        <template #prev>
                            <button
                                class="hidden sm:block carousel-nav prev bg-white/90 backdrop-blur-sm p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <i class="pi pi-chevron-left text-base sm:text-lg lg:text-xl"></i>
                            </button>
                        </template>
                    </Navigation>
                    <Pagination class="mt-4 sm:mt-6">
                        <template #addons>
                            <div class="carousel-dots flex gap-2 sm:gap-3 justify-center">
                                <button v-for="slide in slides" :key="slide"
                                    class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-200 hover:bg-indigo-600 transition-all duration-300"></button>
                            </div>
                        </template>
                    </Pagination>
                </template>
            </Carousel>
        </div>

        <!-- Featured Categories with Modern Design -->
        <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <h2
                class="text-4xl sm:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Shop by Category
            </h2>
            <p class="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 font-light">Explore our carefully
                curated
                collections</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Dresses"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Dresses</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Accessories"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Accessories</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Scarves"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Scarves</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Sunglasses"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Sunglasses</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Watches"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Watches</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Jackets"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Jackets</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Handbags"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Handbags</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Summer"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Summer</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Blazers"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Blazers</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                    <img src="@/assets/images/placeholder.png" alt="Boots"
                        class="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Boots</h3>
                            <span class="inline-flex items-center text-white/90 text-xs sm:text-sm">
                                <span>Shop Now</span>
                                <i class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Special Offers Banner -->
        <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div class="relative rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <!-- Animated gradient background -->
                <div class="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 animate-gradient-x">
                </div>

                <!-- Decorative elements -->
                <div class="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2">
                </div>
                <div class="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2">
                </div>

                <div class="relative">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-16">
                        <!-- Left Content -->
                        <div class="space-y-6 sm:space-y-8">
                            <div class="flex items-center space-x-4">
                                <span class="animate-pulse inline-flex h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-pink-400"></span>
                                <span class="bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    Exclusive Offer
                                </span>
                            </div>

                            <div class="space-y-3 sm:space-y-4">
                                <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    Spring Collection
                                    <span class="block text-pink-200">Up To 70% Off</span>
                                </h2>
                                <p class="text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                                    Elevate your style with our curated selection of premium fashion pieces. Limited time
                                    exclusive deals you won't find anywhere else.
                                </p>
                            </div>

                            <div class="flex flex-wrap gap-4">
                                <a href="#" class="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full text-sm sm:text-base font-semibold text-fuchsia-600 overflow-hidden">
                                    <span class="relative z-10">Explore Collection</span>
                                    <div class="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                                    </div>
                                    <span class="group-hover:text-white relative z-10 transition-colors">
                                        <i class="pi pi-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Content -->
                        <div class="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
                            <div class="space-y-4 sm:space-y-6">
                                <div class="group bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div class="text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <i class="pi pi-bolt text-2xl sm:text-3xl"></i>
                                    </div>
                                    <h3 class="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Flash Sales</h3>
                                    <p class="text-white/80 text-sm sm:text-base">24-hour exclusive deals</p>
                                </div>

                                <div class="group bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div class="text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <i class="pi pi-gift text-2xl sm:text-3xl"></i>
                                    </div>
                                    <h3 class="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">VIP Rewards</h3>
                                    <p class="text-white/80 text-sm sm:text-base">Exclusive member perks</p>
                                </div>
                            </div>

                            <div class="space-y-4 sm:space-y-6 mt-4 sm:mt-8 lg:mt-12">
                                <div class="group bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div class="text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <i class="pi pi-ticket text-2xl sm:text-3xl"></i>
                                    </div>
                                    <h3 class="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Special Deals</h3>
                                    <p class="text-white/80 text-sm sm:text-base">Up to 70% discount</p>
                                </div>

                                <div class="group bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div class="text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <i class="pi pi-send text-2xl sm:text-3xl"></i>
                                    </div>
                                    <h3 class="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Express Delivery</h3>
                                    <p class="text-white/80 text-sm sm:text-base">Free on orders $150+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Best Sellers Section with Floating Cards -->
        <div class="bg-gradient-to-b from-indigo-50/50 to-blue-50/50 py-12 sm:py-24">
            <div class="container mx-auto px-4 sm:px-6">
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    Trending Now
                </h2>
                <p class="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-16 font-light">Discover our most
                    coveted
                    pieces</p>

                <Carousel :items-to-show="1.2" :breakpoints="{
                    640: {
                        itemsToShow: 2.2
                    },
                    1024: {
                        itemsToShow: 3.2
                    },
                    1280: {
                        itemsToShow: 4
                    }
                }" :wrap-around="true" :autoplay="3000" :transition="500" :mouseDrag="true" :touchDrag="true">
                    <Slide v-for="(product, index) in [
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Ethereal Summer Blouse',
                            price: '$59.99',
                            rating: 4.5,
                            reviews: 128
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Silk Evening Gown',
                            price: '$289.99',
                            rating: 4.8,
                            reviews: 89
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Luxury Handbag',
                            price: '$459.99',
                            rating: 4.7,
                            reviews: 156
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Designer Boots',
                            price: '$349.99',
                            rating: 4.6,
                            reviews: 94
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Leather Jacket',
                            price: '$599.99',
                            rating: 4.9,
                            reviews: 203
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Summer Dress',
                            price: '$179.99',
                            rating: 4.5,
                            reviews: 167
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Modern Blazer',
                            price: '$299.99',
                            rating: 4.6,
                            reviews: 142
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Designer Watch',
                            price: '$799.99',
                            rating: 4.8,
                            reviews: 76
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Pearl Necklace',
                            price: '$399.99',
                            rating: 4.7,
                            reviews: 113
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Luxury Sunglasses',
                            price: '$259.99',
                            rating: 4.4,
                            reviews: 98
                        }
                    ]" :key="index">
                        <div class="px-2 sm:px-4">
                            <div
                                class="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-102 transition-all duration-500">
                                <div class="relative">
                                    <img :src="product.image" :alt="product.name"
                                        class="w-full h-48 sm:h-64 lg:h-80 object-cover">
                                    <div class="absolute top-2 sm:top-4 left-2 sm:left-4">
                                        <span
                                            class="bg-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">New
                                            Arrival</span>
                                    </div>
                                    <div class="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                                        <button
                                            class="bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300 group">
                                            <i class="pi pi-heart text-base sm:text-lg"></i>
                                            <span
                                                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100">0</span>
                                        </button>
                                        <button
                                            class="bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                            <i class="pi pi-shopping-cart text-base sm:text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="p-4 sm:p-6">
                                    <div class="flex items-center mb-2">
                                        <div class="flex text-yellow-400">
                                            <i class="pi pi-star-fill text-xs sm:text-sm"></i>
                                            <span class="ml-1 text-xs sm:text-sm font-medium">{{ product.rating
                                                }}</span>
                                        </div>
                                        <span class="mx-2 text-gray-400">•</span>
                                        <span class="text-xs sm:text-sm text-gray-600">{{ product.reviews }}
                                            reviews</span>
                                    </div>
                                    <h3
                                        class="text-base sm:text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors truncate">
                                        {{ product.name }}</h3>
                                    <div
                                        class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                                        <span class="text-lg sm:text-2xl font-bold text-indigo-600">{{ product.price
                                            }}</span>
                                        <button
                                            class="flex items-center justify-center bg-indigo-600 text-white w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-indigo-700 transition-colors duration-300 text-sm sm:text-base">
                                            <i class="pi pi-shopping-bag mr-2"></i>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <Pagination class="mt-4 sm:mt-8" />
                    </template>
                </Carousel>
            </div>
        </div>

        <!-- Featured Products with Modern Slider -->
        <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-24">
            <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Featured Collection</h2>
            <p class="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-16 font-light">Discover our exclusive
                curated
                selection</p>

            <Carousel :items-to-show="1.2" :breakpoints="{
                640: {
                    itemsToShow: 2.2
                },
                1024: {
                    itemsToShow: 3
                }
            }" :wrap-around="true" :autoplay="4000" :transition="600" :mouseDrag="true" :touchDrag="true"
                class="featured-carousel">
                <Slide v-for="(product, index) in [
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Silk Evening Gown',
                        description: 'Timeless elegance in pure silk',
                        price: '$289.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Luxury Handbag',
                        description: 'Handcrafted Italian leather',
                        price: '$459.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Designer Boots',
                        description: 'Premium craftsmanship',
                        price: '$349.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Leather Jacket',
                        description: 'Timeless style statement',
                        price: '$599.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Summer Dress',
                        description: 'Light and breezy elegance',
                        price: '$179.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Modern Blazer',
                        description: 'Contemporary sophistication',
                        price: '$299.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Luxury Watch',
                        description: 'Precision crafted timepiece',
                        price: '$899.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Cashmere Scarf',
                        description: 'Ultimate luxury comfort',
                        price: '$159.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Designer Sunglasses',
                        description: 'Premium UV protection',
                        price: '$239.99'
                    },
                    {
                        image: 'src/assets/images/placeholder.png',
                        name: 'Crystal Necklace',
                        description: 'Elegant statement piece',
                        price: '$329.99'
                    }
                ]" :key="index">
                    <div class="px-2 sm:px-4">
                        <div
                            class="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                            <div class="relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
                                <img :src="product.image" :alt="product.name"
                                    class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                                <div
                                    class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <div class="flex justify-between items-center gap-2">
                                            <button
                                                class="bg-white/90 hover:bg-indigo-600 text-indigo-600 hover:text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base transition duration-300">
                                                Quick View
                                            </button>
                                            <button
                                                class="bg-white/90 hover:bg-indigo-600 text-indigo-600 hover:text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition duration-300">
                                                <i class="pi pi-shopping-cart text-sm sm:text-base"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 sm:p-6">
                                <div class="flex justify-between items-start mb-2">
                                    <h3
                                        class="text-base sm:text-xl font-semibold group-hover:text-indigo-600 transition duration-300">
                                        {{ product.name }}</h3>
                                    <span
                                        class="bg-indigo-100 text-indigo-600 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">New</span>
                                </div>
                                <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{{ product.description }}</p>
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                                        {{ product.price }}
                                    </span>
                                    <div class="flex gap-2 sm:gap-3">
                                        <button class="text-gray-400 hover:text-red-500 transition duration-300">
                                            <i class="pi pi-heart text-base sm:text-xl"></i>
                                        </button>
                                        <button class="text-gray-400 hover:text-amber-500 transition duration-300">
                                            <i class="pi pi-star text-base sm:text-xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination class="mt-4 sm:mt-6" />
                </template>
            </Carousel>
        </div>

        <!-- Ads Section with Modern Design -->
        <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <!-- Left Ad -->
                <div class="group relative overflow-hidden rounded-3xl shadow-xl">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur-lg group-hover:opacity-30 transition duration-500">
                    </div>
                    <div
                        class="relative bg-gradient-to-br from-white to-indigo-50 p-8 sm:p-12 rounded-3xl overflow-hidden">
                        <div class="absolute top-0 right-0 -mt-8 -mr-8">
                            <div class="text-9xl font-bold text-indigo-100 opacity-50 transform rotate-12">
                                %
                            </div>
                        </div>
                        <span
                            class="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Limited
                            Time</span>
                        <h3
                            class="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Summer Sale</h3>
                        <p class="text-gray-600 mb-6">Get up to 50% off on selected summer collection items</p>
                        <a href="#"
                            class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white transform hover:-translate-y-1 transition duration-300">
                            <span>Shop Now</span>
                            <i class="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <!-- Right Ad -->
                <div class="group relative overflow-hidden rounded-3xl shadow-xl">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 opacity-20 blur-lg group-hover:opacity-30 transition duration-500">
                    </div>
                    <div
                        class="relative bg-gradient-to-br from-white to-blue-50 p-8 sm:p-12 rounded-3xl overflow-hidden">
                        <div class="absolute top-0 right-0 -mt-8 -mr-8">
                            <div class="text-9xl font-bold text-blue-100 opacity-50 transform -rotate-12">
                                +
                            </div>
                        </div>
                        <span
                            class="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">New
                            Arrival</span>
                        <h3
                            class="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                            Premium Collection</h3>
                        <p class="text-gray-600 mb-6">Discover our latest premium fashion pieces</p>
                        <a href="#"
                            class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white transform hover:-translate-y-1 transition duration-300">
                            <span>Explore Now</span>
                            <i class="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonials with Modern Design -->
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 py-12 sm:py-24">
            <div class="container mx-auto px-4 sm:px-6">
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    Customer Stories</h2>
                <p class="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-16 font-light">Hear from our satisfied
                    customers</p>
                <Carousel :items-to-show="1" :breakpoints="{
                    640: {
                        itemsToShow: 2
                    },
                    1024: {
                        itemsToShow: 3
                    }
                }" :wrap-around="true" :autoplay="5000" :transition="800" :mouseDrag="true" :touchDrag="true">
                    <Slide v-for="(testimonial, index) in [
                        {
                            name: 'Emma Thompson',
                            image: 'src/assets/images/placeholder.png',
                            text: 'The quality and style of their collections are unmatched. Every piece feels luxurious and the customer service is exceptional!'
                        },
                        {
                            name: 'Sarah Johnson',
                            image: 'src/assets/images/placeholder.png',
                            text: 'I absolutely love shopping here! The designs are unique and the quality is outstanding. Will definitely be a returning customer!'
                        },
                        {
                            name: 'Michael Chen',
                            image: 'src/assets/images/placeholder.png',
                            text: 'Found the perfect gift for my wife here. The attention to detail and packaging was impressive. Highly recommended!'
                        },
                        {
                            name: 'Jessica Williams',
                            image: 'src/assets/images/placeholder.png',
                            text: 'The collection is simply stunning! Each piece tells a story and the craftsmanship is exceptional.'
                        },
                        {
                            name: 'David Miller',
                            image: 'src/assets/images/placeholder.png',
                            text: 'Great experience from browsing to delivery. The website is user-friendly and the products exceed expectations.'
                        },
                        {
                            name: 'Amanda Garcia',
                            image: 'src/assets/images/placeholder.png',
                            text: 'Fantastic selection and impeccable service. The quality of items is consistently excellent!'
                        }
                    ]" :key="index">
                        <div class="px-2 sm:px-4">
                            <div
                                class="bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                <div class="flex items-center mb-4 sm:mb-6">
                                    <img :src="testimonial.image" :alt="testimonial.name"
                                        class="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-2 sm:ring-4 ring-indigo-100 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                                    <div>
                                        <h4 class="text-lg sm:text-xl font-semibold">{{ testimonial.name }}</h4>
                                        <div class="flex text-amber-400 mt-1">
                                            <i class="pi pi-star-fill text-sm sm:text-base"></i>
                                            <i class="pi pi-star-fill text-sm sm:text-base"></i>
                                            <i class="pi pi-star-fill text-sm sm:text-base"></i>
                                            <i class="pi pi-star-fill text-sm sm:text-base"></i>
                                            <i class="pi pi-star-fill text-sm sm:text-base"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ testimonial.text }}</p>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation>
                            <template #next>
                                <button
                                    class="hidden sm:block absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                                    <i class="pi pi-chevron-right text-sm sm:text-base"></i>
                                </button>
                            </template>
                            <template #prev>
                                <button
                                    class="hidden sm:block absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                                    <i class="pi pi-chevron-left text-sm sm:text-base"></i>
                                </button>
                            </template>
                        </Navigation>
                    </template>
                </Carousel>
            </div>
        </div>

        <!-- Blog Section with Modern Cards -->
        <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-24">
            <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Style Journal</h2>
            <p class="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-16 font-light">Insights and
                inspiration from the world of
                fashion</p>
            <Carousel :items-to-show="1.2" :breakpoints="{
                640: {
                    itemsToShow: 2.2
                },
                1024: {
                    itemsToShow: 3
                }
            }" :wrap-around="true" :autoplay="3000" :transition="500" :mouseDrag="true" :touchDrag="true">
                <Slide v-for="(blog, index) in [
                    {
                        category: 'Accessories',
                        title: 'Jewelry Trends 2024',
                        description: 'The latest in statement pieces and minimalist designs...',
                        image: 'src/assets/images/placeholder.png'
                    },
                    {
                        category: 'Fashion',
                        title: 'Summer Style Guide',
                        description: 'Essential looks for the perfect summer wardrobe...',
                        image: 'src/assets/images/placeholder.png'
                    },
                    {
                        category: 'Lifestyle',
                        title: 'Sustainable Fashion',
                        description: 'Making eco-friendly choices in your wardrobe...',
                        image: 'src/assets/images/placeholder.png'
                    },
                    {
                        category: 'Beauty',
                        title: 'Makeup Essentials',
                        description: 'Must-have products for your beauty routine...',
                        image: 'src/assets/images/placeholder.png'
                    },
                    {
                        category: 'Trends',
                        title: 'Fall Collection Preview',
                        description: 'A sneak peek at upcoming autumn styles...',
                        image: 'src/assets/images/placeholder.png'
                    },
                    {
                        category: 'Style Tips',
                        title: 'Accessorizing 101',
                        description: 'Master the art of completing your look...',
                        image: 'src/assets/images/placeholder.png'
                    }
                ]" :key="index">
                    <div
                        class="group bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 mx-2 sm:mx-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 h-full">
                            <div class="p-4 sm:p-6 flex flex-col justify-between">
                                <div>
                                    <span
                                        class="inline-block bg-amber-100 text-amber-600 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">{{
                                            blog.category }}</span>
                                    <h3
                                        class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-amber-600 transition duration-300">
                                        {{
                                            blog.title }}</h3>
                                    <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{{ blog.description }}</p>
                                </div>
                                <a href="#"
                                    class="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm sm:text-base">
                                    View Article <i
                                        class="pi pi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                                </a>
                            </div>
                            <div class="relative overflow-hidden h-48 sm:h-full">
                                <img :src="blog.image" :alt="blog.title"
                                    class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination class="mt-4 sm:mt-6" />
                </template>
            </Carousel>
        </div>

        <!-- Unique Shopping Experience Section -->
        <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <h2
                class="text-4xl sm:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Discover Your Style
            </h2>
            <p class="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 font-light">Explore our unique
                shopping
                experiences</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- Virtual Try-On -->
                <div
                    class="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8 transform hover:-translate-y-2 transition-all duration-500">
                    <div
                        class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                    </div>

                    <div class="relative">
                        <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl inline-block mb-6">
                            <i class="pi pi-camera text-2xl sm:text-3xl text-indigo-600"></i>
                        </div>

                        <h3 class="text-xl sm:text-2xl font-bold mb-4">Virtual Try-On</h3>
                        <p class="text-gray-600 mb-6">Experience clothes virtually before you buy with our AR technology
                        </p>

                        <button
                            class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white transform group-hover:scale-105 transition duration-300">
                            <span>Try Now</span>
                            <i class="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>

                <!-- Personal Stylist -->
                <div
                    class="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 transform hover:-translate-y-2 transition-all duration-500">
                    <div
                        class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                    </div>

                    <div class="relative">
                        <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl inline-block mb-6">
                            <i class="pi pi-user text-2xl sm:text-3xl text-blue-600"></i>
                        </div>

                        <h3 class="text-xl sm:text-2xl font-bold mb-4">Personal Stylist</h3>
                        <p class="text-gray-600 mb-6">Get personalized fashion advice from our expert stylists</p>

                        <button
                            class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white transform group-hover:scale-105 transition duration-300">
                            <span>Book Session</span>
                            <i class="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>

                <!-- Smart Size Finder -->
                <div
                    class="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-6 sm:p-8 transform hover:-translate-y-2 transition-all duration-500">
                    <div
                        class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                    </div>

                    <div class="relative">
                        <div class="bg-white/80 backdrop-blur-sm p-3 rounded-xl inline-block mb-6">
                            <i class="pi pi-sliders-h text-2xl sm:text-3xl text-purple-600"></i>
                        </div>

                        <h3 class="text-xl sm:text-2xl font-bold mb-4">Smart Size Finder</h3>
                        <p class="text-gray-600 mb-6">Find your perfect fit with our AI-powered size recommendation tool
                        </p>

                        <button
                            class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white transform group-hover:scale-105 transition duration-300">
                            <span>Find My Size</span>
                            <i class="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Arrivals with Premium Cards -->
        <div class="bg-gradient-to-b from-white to-indigo-50/30 py-12 sm:py-24">
            <div class="container mx-auto px-4 sm:px-6">
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    Latest Arrivals</h2>
                <p class="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-16 font-light">Be the
                    first to
                    discover our newest
                    collections
                </p>

                <Carousel :items-to-show="1.2" :breakpoints="{
                    640: {
                        itemsToShow: 2.2
                    },
                    1024: {
                        itemsToShow: 3.2
                    },
                    1280: {
                        itemsToShow: 4
                    }
                }" :wrap-around="true" :autoplay="3000" :transition="500" :mouseDrag="true" :touchDrag="true">
                    <Slide v-for="(product, index) in [
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Silk Evening Gown',
                            price: '$299.99',
                            isNew: true,
                            rating: 4.5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Designer Handbag',
                            price: '$459.99',
                            isNew: true,
                            rating: 5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Premium Sneakers',
                            price: '$189.99',
                            isNew: false,
                            rating: 4
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Leather Jacket',
                            price: '$599.99',
                            isNew: true,
                            rating: 4.5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Summer Dress',
                            price: '$159.99',
                            isNew: true,
                            rating: 5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Casual Blazer',
                            price: '$259.99',
                            isNew: false,
                            rating: 4.5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Designer Watch',
                            price: '$799.99',
                            isNew: true,
                            rating: 5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Luxury Scarf',
                            price: '$129.99',
                            isNew: false,
                            rating: 4
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Classic Sunglasses',
                            price: '$199.99',
                            isNew: true,
                            rating: 4.5
                        },
                        {
                            image: 'src/assets/images/placeholder.png',
                            name: 'Designer Boots',
                            price: '$459.99',
                            isNew: true,
                            rating: 5
                        }
                    ]" :key="index">
                        <div class="px-2 sm:px-4">
                            <div
                                class="group bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-3 transition-all duration-300">
                                <div class="relative overflow-hidden">
                                    <img :src="product.image" :alt="product.name"
                                        class="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition duration-500 group-hover:scale-110">
                                    <div
                                        class="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-col gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <button
                                            class="bg-white/95 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                                            <i class="pi pi-heart text-base sm:text-lg"></i>
                                        </button>
                                        <button
                                            class="bg-white/95 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                                            <i class="pi pi-shopping-bag text-base sm:text-lg"></i>
                                        </button>
                                    </div>
                                    <div
                                        class="absolute top-4 sm:top-6 left-4 sm:left-6 transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span v-if="product.isNew"
                                            class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium">New</span>
                                    </div>
                                    <div
                                        class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <h3 class="text-base sm:text-xl font-semibold text-white mb-2">{{ product.name
                                            }}</h3>
                                        <div class="flex justify-between items-center">
                                            <p class="text-lg sm:text-xl font-bold text-white">{{ product.price }}</p>
                                            <div class="flex text-amber-400 text-xs sm:text-sm">
                                                <i v-for="star in Math.floor(product.rating)" :key="star"
                                                    class="pi pi-star-fill"></i>
                                                <i v-if="product.rating % 1 !== 0" class="pi pi-star-half-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation>
                            <template #prev>
                                <button
                                    class="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 p-3 sm:p-4 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300 z-10 items-center justify-center">
                                    <i class="pi pi-chevron-left text-lg sm:text-xl"></i>
                                </button>
                            </template>
                            <template #next>
                                <button
                                    class="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 p-3 sm:p-4 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300 z-10 items-center justify-center">
                                    <i class="pi pi-chevron-right text-lg sm:text-xl"></i>
                                </button>
                            </template>
                        </Navigation>
                        <Pagination class="mt-4 sm:mt-6" />
                    </template>
                </Carousel>
            </div>
        </div>

        <!-- Newsletter Section -->
        <div class="bg-gradient-to-r from-indigo-100 to-blue-100 py-12 sm:py-24">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-12">
                    <h2
                        class="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                        Stay in Style</h2>
                    <p class="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-6 sm:mb-10 font-light">
                        Subscribe to
                        our newsletter for
                        exclusive offers and style updates</p>
                    <div class="max-w-2xl mx-auto">
                        <form class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <input type="email" placeholder="Enter your email"
                                class="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-600 transition duration-300 text-sm sm:text-base">
                            <button
                                class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-sm sm:text-base flex items-center justify-center">
                                <i class="pi pi-send mr-2"></i>
                                Subscribe
                            </button>
                        </form>
                        <p class="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">By subscribing, you agree
                            to our
                            Privacy
                            Policy</p>
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
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'Index',
    components: {
        Header,
        Footer,
        Carousel,
        Navigation,
        Pagination,
        Slide
    },
    data() {
        return {
            showFlashDeal: true,
            timeLeft: 7200, // 2 hours in seconds
            slides: [
                {
                    title: 'Discover Your',
                    highlight: 'Signature Style',
                    description: 'Curated collections that blend timeless elegance with contemporary fashion trends.',
                    image: 'src/assets/images/placeholder.png',
                    imageAlt: 'Fashion Collection'
                },
                {
                    title: 'Elevate Your',
                    highlight: 'Wardrobe',
                    description: 'Premium designer pieces carefully selected for the modern fashionista.',
                    image: 'src/assets/images/placeholder.png',
                    imageAlt: 'Premium Fashion'
                },
                {
                    title: 'Express Your',
                    highlight: 'Unique Style',
                    description: 'Discover the latest trends and make them uniquely yours with our exclusive collection.',
                    image: 'src/assets/images/placeholder.png',
                    imageAlt: 'Trendy Fashion'
                }
            ]
        }
    },
    methods: {
        closeFlashDeal() {
            this.showFlashDeal = false
        },
        goToShop() {
            this.$router.push('/shop')
            this.showFlashDeal = false
        },
        startTimer() {
            setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--
                }
            }, 1000)
        }
    },
    mounted() {
        this.startTimer()
    }
}
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Add Poppins and Playfair Display fonts */

.font-poppins {
    font-family: 'Poppins', sans-serif;
}

.font-playfair {
    font-family: 'Playfair Display', serif;
}
</style>
