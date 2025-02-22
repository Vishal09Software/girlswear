<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-purple-100">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <div class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-5xl bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden">
                <!-- Image Section -->
                <div class="relative w-full md:w-1/2">
                    <img src="https://raw.githubusercontent.com/minimal-ui-kit/material-kit-react/main/public/assets/illustrations/illustration_register.png"
                        alt="Fashion" class="w-full h-64 md:h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex flex-col justify-center p-6 md:px-12">
                        <h1 class="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Welcome to GirlsWear</h1>
                        <p class="text-white/90 text-base md:text-lg">Join our fashion community and discover the latest trends
                            in women's fashion.</p>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="w-full md:w-1/2 p-6 md:p-12">
                    <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">Welcome Back</h2>
                    <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
                        <div class="space-y-2">
                            <label class="block text-sm font-semibold text-gray-700" for="email">Email</label>
                            <div class="relative group">
                                <input type="email" id="email" v-model="email"
                                    class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 group-hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="Enter your email" required />
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                <label class="block text-sm font-semibold text-gray-700" for="password">Password</label>
                                <router-link to="/forget" class="text-sm text-blue-500 hover:text-blue-600 hover:underline">
                                    Forgot Password?
                                </router-link>
                            </div>
                            <div class="relative group">
                                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                                    class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-300 group-hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="Enter your password" required />
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                                <button type="button" @click.prevent="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="submit" 
                            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md">
                            Sign In
                        </button>
                        <p class="text-center text-gray-600 text-sm sm:text-base">
                            Don't have an account? 
                            <router-link :to="{name: 'register'}" class="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-200">
                                Create Account
                            </router-link>
                        </p>
                    </form>
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