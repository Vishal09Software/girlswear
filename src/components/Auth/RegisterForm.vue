<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-purple-100">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <div class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <!-- Image Section - Hidden on mobile -->
                    <div class="relative hidden lg:block">
                        <img src="https://raw.githubusercontent.com/minimal-ui-kit/material-kit-react/main/public/assets/illustrations/illustration_register.png"
                            alt="Fashion" class="w-full h-full object-cover" />
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex flex-col justify-center px-6 lg:px-12">
                            <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Welcome to GirlsWear</h1>
                            <p class="text-white/90 text-base lg:text-lg">Join our fashion community and discover the latest trends
                                in women's fashion.</p>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div class="p-6 sm:p-8 lg:p-12">
                        <h2
                            class="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Create Account</h2>
                        <p class="text-gray-600 mb-6 sm:mb-8">Join our community today</p>

                        <form @submit.prevent="register" class="space-y-4 sm:space-y-6">
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700" for="name">Full Name</label>
                                <div class="relative">
                                    <i class="pi pi-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input type="text" id="name" v-model="name"
                                        class="w-full px-4 py-2.5 sm:py-3 pl-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white/50"
                                        placeholder="Enter your full name" />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700" for="email">Email Address</label>
                                <div class="relative">
                                    <i class="pi pi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input type="email" id="email" v-model="email"
                                        class="w-full px-4 py-2.5 sm:py-3 pl-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white/50"
                                        placeholder="Enter your email" />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
                                <div class="relative">
                                    <i class="pi pi-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                                        class="w-full px-4 py-2.5 sm:py-3 pl-10 pr-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white/50"
                                        placeholder="Create a password" />
                                    <button type="button" @click.prevent="togglePassword"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit"
                                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                                <i class="pi pi-user-plus"></i>
                                Create Account
                            </button>

                            <div class="relative my-4 sm:my-6">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <button type="button"
                                    class="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200">
                                    <i class="pi pi-google text-red-500"></i>
                                    Google
                                </button>
                                <button type="button"
                                    class="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200">
                                    <i class="pi pi-facebook text-blue-600"></i>
                                    Facebook
                                </button>
                            </div>

                            <p class="text-center text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
                                Already have an account?
                                <router-link :to="{ name: 'login' }"
                                    class="text-blue-500 hover:text-blue-600 font-medium">
                                    Sign in
                                </router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from '../layouts/Header.vue';
import Footer from '../layouts/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            showPassword: false
        };
    },
    methods: {
        register() {
            // Handle registration logic
            console.log(`Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`);
            // After successful registration, redirect to login
            this.$router.push({ name: 'Login' });
        },

        togglePassword() {
            this.showPassword = !this.showPassword;
        }
    },
};
</script>