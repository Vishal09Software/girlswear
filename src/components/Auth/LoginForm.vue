<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-purple-100">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <div class="flex-grow flex items-center justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div class="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <!-- Image Section - Hidden on mobile -->
                    <div class="relative hidden lg:block">
                        <img src="https://raw.githubusercontent.com/minimal-ui-kit/material-kit-react/main/public/assets/illustrations/illustration_register.png"
                            alt="Fashion" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex flex-col justify-center px-6 lg:px-12">
                            <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Welcome to GirlsWear</h1>
                            <p class="text-white/90 text-base lg:text-lg">Join our fashion community and discover the latest trends in women's fashion.</p>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div class="p-4 sm:p-6 lg:p-12">
                        <!-- Mobile Header -->
                        <div class="lg:hidden text-center mb-6">
                            <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome to GirlsWear</h1>
                            <p class="text-gray-600 text-sm">Sign in to your account</p>
                        </div>

                        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome Back</h2>
                        <p class="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Sign in to continue</p>

                        <form @submit.prevent="handleLogin" class="space-y-3 sm:space-y-4">
                            <div class="space-y-1 sm:space-y-2">
                                <label class="block text-sm font-medium text-gray-700" for="email">Email Address</label>
                                <div class="relative">
                                    <i class="pi pi-envelope absolute left-3  top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input type="email" id="email" v-model="email"
                                        class=" w-full px-3 py-2 sm:px-4  sm:py-2.5 pl-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white/50 text-sm sm:text-base"
                                        placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div class="space-y-1 sm:space-y-2">
                                <div class="flex justify-between items-center">
                                    <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
                                    <router-link :to="{ name: 'forgot-password' }" class="text-sm text-blue-500 hover:text-blue-600 hover:underline">
                                        Forgot Password?
                                    </router-link>
                                </div>
                                <div class="relative">
                                    <i class="pi pi-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                                        class="w-full px-3 py-2 sm:px-4 sm:py-2.5 pl-10 pr-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white/50 text-sm sm:text-base"
                                        placeholder="Enter your password" required />
                                    <button type="button" @click.prevent="togglePassword"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit"
                                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base mt-2">
                                <i class="pi pi-sign-in"></i>
                                Sign In
                            </button>

                            <div class="relative my-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-xs sm:text-sm">
                                    <span class="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                <button type="button"
                                    class="flex items-center justify-center gap-2 py-2 sm:py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200 text-sm sm:text-base">
                                    <i class="pi pi-google text-red-500"></i>
                                    Google
                                </button>
                                <button type="button"
                                    class="flex items-center justify-center gap-2 py-2 sm:py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200 text-sm sm:text-base">
                                    <i class="pi pi-facebook text-blue-600"></i>
                                    Facebook
                                </button>
                            </div>

                            <p class="text-center text-gray-600 mt-4 text-xs sm:text-sm">
                                Don't have an account?
                                <router-link :to="{ name: 'register' }"
                                    class="text-blue-500 hover:text-blue-600 font-medium">
                                    Create Account
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
            email: '',
            password: '',
            showPassword: false
        };
    },
    methods: {
        async handleLogin() {
            try {
                // Basic validation
                if (!this.email || !this.password) {
                    throw new Error('Please fill in all fields');
                }

                // Here you would typically make an API call to your backend
                // For now, we'll just simulate a successful login
                await this.loginUser(this.email, this.password);
                
                // Clear form
                this.email = '';
                this.password = '';
                
                // Redirect to home page
                this.$router.push('/');
            } catch (error) {
                console.error('Login failed:', error);
                // Here you would typically show an error message to the user
            }
        },
        async loginUser(email, password) {
            // This is where you would implement your actual login API call
            // For now, just return a promise that resolves after a delay
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>