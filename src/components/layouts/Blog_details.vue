<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 font-poppins">
    <!-- Header Component -->
    <Header />

    <div class="container mx-auto px-4 py-8 sm:py-12">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
        <!-- Main Blog Content -->
        <div class="lg:w-2/3">
          <!-- Blog Hero Image -->
          <div class="relative rounded-xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8">
            <img src="@/assets/images/placeholder.png" alt="Blog Header" class="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
              <span class="bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium mb-2 sm:mb-4 inline-block">
                Fashion Trends
              </span>
              <h1 class="text-2xl sm:text-3xl lg:text-5xl font-playfair font-bold text-white mb-3 sm:mb-4">
                The Ultimate Guide to Summer Fashion Trends 2024
              </h1>
              <div class="flex items-center text-white">
                <img src="@/assets/images/placeholder.png" alt="Author" class="w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-white">
                <div class="ml-3 sm:ml-4">
                  <p class="font-medium text-sm sm:text-base">Emma Wilson</p>
                  <p class="text-xs sm:text-sm opacity-80">Mar 15, 2024 • 8 min read</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Blog Content -->
          <div class="bg-white rounded-xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                Discover the hottest trends that will dominate the fashion scene this summer season. From vibrant colors to sustainable materials, we've got you covered with the most comprehensive guide to 2024's summer fashion.
              </p>

              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">1. Vibrant Color Palettes</h2>
              <p class="mb-4 sm:mb-6">
                This summer is all about embracing bold, vibrant colors. Think electric blues, sunset oranges, and tropical greens. The key is to mix and match these vivid hues in unexpected ways while maintaining a cohesive look.
              </p>

              <div class="my-6 sm:my-8">
                <img src="@/assets/images/placeholder.png" alt="Summer Fashion" class="w-full rounded-xl sm:rounded-2xl">
                <p class="text-xs sm:text-sm text-gray-500 mt-2 text-center">Summer collection showcasing vibrant color combinations</p>
              </div>

              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">2. Sustainable Materials</h2>
              <p class="mb-4 sm:mb-6">
                Sustainability continues to be a major focus in fashion. Organic cotton, recycled materials, and innovative eco-friendly fabrics are taking center stage this season.
              </p>
            </div>

            <!-- Social Sharing -->
            <div class="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8">
              <div class="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                <div class="flex items-center gap-4">
                  <button class="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition">
                    <i class="pi pi-heart text-sm sm:text-base"></i>
                    <span class="text-sm sm:text-base">245</span>
                  </button>
                  <button class="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition">
                    <i class="pi pi-comment text-sm sm:text-base"></i>
                    <span class="text-sm sm:text-base">18</span>
                  </button>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                  <button class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                    <i class="pi pi-facebook text-sm sm:text-base"></i>
                  </button>
                  <button class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition">
                    <i class="pi pi-twitter text-sm sm:text-base"></i>
                  </button>
                  <button class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <i class="pi pi-whatsapp text-sm sm:text-base"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="bg-white rounded-xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
            <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Comments (18)</h3>
            
            <!-- Add Comment Form -->
            <div class="mb-6 sm:mb-8">
              <div class="flex gap-3 sm:gap-4">
                <img src="@/assets/images/placeholder.png" alt="Your Avatar" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                <div class="flex-1">
                  <textarea 
                    placeholder="Write your comment..." 
                    class="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none h-24 sm:h-32 text-sm sm:text-base"
                  ></textarea>
                  <button class="mt-2 px-4 sm:px-6 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-indigo-700 transition">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>

            <!-- Comments List -->
            <div class="space-y-4 sm:space-y-6">
              <!-- Comment 1 -->
              <div class="flex gap-3 sm:gap-4">
                <img src="@/assets/images/placeholder.png" alt="Commenter" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                <div class="flex-1">
                  <div class="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="font-medium text-sm sm:text-base">James Anderson</h4>
                      <span class="text-xs sm:text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p class="text-sm sm:text-base text-gray-600">Great article! The color trends for this summer are really exciting.</p>
                  </div>
                  <div class="flex gap-4 mt-2 text-xs sm:text-sm">
                    <button class="text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                      <i class="pi pi-reply"></i> Reply
                    </button>
                    <button class="text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                      <i class="pi pi-heart"></i> Like (12)
                    </button>
                  </div>
                </div>
              </div>

              <!-- Comment 2 -->
              <div class="flex gap-3 sm:gap-4 pl-8 sm:pl-12">
                <img src="@/assets/images/placeholder.png" alt="Commenter" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                <div class="flex-1">
                  <div class="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="font-medium text-sm sm:text-base">Sarah Johnson</h4>
                      <span class="text-xs sm:text-sm text-gray-500">1 hour ago</span>
                    </div>
                    <p class="text-sm sm:text-base text-gray-600">I totally agree! The sustainable materials section was particularly insightful.</p>
                  </div>
                  <div class="flex gap-4 mt-2 text-xs sm:text-sm">
                    <button class="text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                      <i class="pi pi-reply"></i> Reply
                    </button>
                    <button class="text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                      <i class="pi pi-heart"></i> Like (8)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Load More Comments -->
            <button class="w-full mt-6 py-2 sm:py-3 border-2 border-indigo-600 text-indigo-600 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-indigo-600 hover:text-white transition">
              Load More Comments
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:w-1/3 space-y-6 sm:space-y-8">
          <!-- Author Card -->
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
            <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img src="@/assets/images/placeholder.png" alt="Author" class="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-2 ring-indigo-100">
              <div>
                <h3 class="font-bold text-base sm:text-lg">Emma Wilson</h3>
                <p class="text-sm sm:text-base text-gray-600">Fashion Editor</p>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-600 mb-4">Fashion enthusiast and writer with over 10 years of experience in the industry.</p>
            <button class="w-full bg-indigo-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-indigo-700 transition">
              Follow
            </button>
          </div>

          <!-- Related Posts -->
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Related Posts</h3>
            <div class="space-y-3 sm:space-y-4">
              <a href="#" class="flex gap-3 sm:gap-4 group">
                <img src="@/assets/images/placeholder.png" alt="Related Post" class="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover">
                <div>
                  <h4 class="font-medium text-sm sm:text-base group-hover:text-indigo-600 transition">Sustainable Fashion: Making Ethical Choices</h4>
                  <p class="text-xs sm:text-sm text-gray-500">Mar 12, 2024</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Tags -->
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <a href="#" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-indigo-600 hover:text-white transition">
                #Fashion
              </a>
              <a href="#" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-indigo-600 hover:text-white transition">
                #Summer2024
              </a>
              <a href="#" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-indigo-600 hover:text-white transition">
                #Style
              </a>
            </div>
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
</script>

<style scoped>
.prose {
  max-width: 100%;
}

.prose img {
  border-radius: 0.75rem;
}

@media (min-width: 640px) {
  .prose img {
    border-radius: 1rem;
  }
}
</style>
