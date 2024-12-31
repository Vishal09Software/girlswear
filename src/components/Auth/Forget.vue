<template>
  <div class="min-h-screen flex bg-gradient-to-r from-blue-50 to-purple-50">
    <!-- Left Side - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md w-full">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Forgot Password?</h1>
          <p class="text-gray-600 mt-2">Enter your email to reset your password</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div class="relative">
              <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="email" 
                id="email"
                v-model="email"
                required
                class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            Send Reset Link
          </button>

          <!-- Back to Login Link -->
          <div class="text-center">
            <router-link 
              to="/login"
              class="text-blue-600 hover:text-purple-600 transition-colors duration-200"
            >
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
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex flex-col justify-center px-12">
        <h2 class="text-4xl font-bold text-white mb-4">Reset Your Password</h2>
        <p class="text-white/90 text-lg">
          Don't worry! It happens. Please enter the email associated with your account.
        </p>
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
