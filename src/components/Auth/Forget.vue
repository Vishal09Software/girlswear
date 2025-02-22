<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
    <!-- Header for Mobile -->
    <div class="lg:hidden text-center py-8 px-4 bg-white/80">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Reset Your Password</h1>
      <p class="text-gray-600 mt-2 text-sm">
        Don't worry! It happens. Please enter the email associated with your account.
      </p>
    </div>

    <div class="flex-1 flex flex-col lg:flex-row">
      <!-- Left Side - Form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div class="max-w-md w-full bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg lg:shadow-none">
          <div class="text-center mb-6 sm:mb-8 hidden lg:block">
            <h1 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Forgot Password?</h1>
            <p class="text-gray-600 mt-2 text-sm sm:text-base">Enter your email to reset your password</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div class="relative">
                <i class="pi pi-envelope absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="email" 
                  id="email"
                  v-model="email"
                  required
                  class="w-full pl-10 sm:pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base bg-white/50"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg text-base"
            >
              Send Reset Link
            </button>

            <!-- Back to Login Link -->
            <div class="text-center">
              <router-link 
                to="/login"
                class="text-blue-600 hover:text-purple-600 transition-colors duration-200 text-base inline-flex items-center"
              >
                <i class="pi pi-arrow-left mr-2"></i>
                Back to Login
              </router-link>
            </div>
          </form>
        </div>
      </div>

      <!-- Right Side - Image -->
      <div class="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://raw.githubusercontent.com/minimal-ui-kit/material-kit-react/main/public/assets/illustrations/illustration_login.png"
          alt="Reset Password"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex flex-col justify-center p-6 lg:px-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Reset Your Password</h2>
          <p class="text-white/90 text-base sm:text-lg">
            Don't worry! It happens. Please enter the email associated with your account.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle password reset logic here
      console.log('Reset password for:', this.email)
      // Add your password reset implementation
    }
  }
}
</script>
