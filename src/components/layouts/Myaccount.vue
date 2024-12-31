<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-100 font-poppins">
        <!-- Header -->
        <Header />

        <!-- Profile Content -->
        <div class="container mx-auto px-4 py-8 sm:py-12">
            <div class="text-center mb-8 sm:mb-12">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    My Account
                </h1>
                <p class="text-gray-600 text-base sm:text-lg">Manage your profile and orders</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <!-- Profile Sidebar -->
                <div class="md:col-span-1">
                    <div class="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                        <div class="text-center mb-4 sm:mb-6">
                            <div class="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-3 sm:mb-4">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                                    alt="Profile Picture"
                                    class="w-full h-full object-cover rounded-full border-4 border-indigo-100">
                                <button class="absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-indigo-700 transition">
                                    <i class="pi pi-camera text-sm sm:text-base"></i>
                                </button>
                            </div>
                            <h3 class="text-lg sm:text-xl font-semibold">Sarah Johnson</h3>
                            <p class="text-gray-500 text-sm sm:text-base">sarah.j@example.com</p>
                        </div>

                        <div class="space-y-2">
                            <button @click="activeTab = 'profile'" 
                                :class="['w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition text-sm sm:text-base', 
                                    activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50']">
                                <span class="flex items-center">
                                    <i class="pi pi-user mr-2 sm:mr-3 text-indigo-600"></i>
                                    Profile Details
                                </span>
                                <i class="pi pi-chevron-right text-gray-400"></i>
                            </button>
                            <button @click="activeTab = 'orders'"
                                :class="['w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition text-sm sm:text-base',
                                    activeTab === 'orders' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50']">
                                <span class="flex items-center">
                                    <i class="pi pi-shopping-bag mr-2 sm:mr-3 text-indigo-600"></i>
                                    My Orders
                                </span>
                                <i class="pi pi-chevron-right text-gray-400"></i>
                            </button>
                            <button @click="activeTab = 'wishlist'"
                                :class="['w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition text-sm sm:text-base',
                                    activeTab === 'wishlist' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50']">
                                <span class="flex items-center">
                                    <i class="pi pi-heart mr-2 sm:mr-3 text-indigo-600"></i>
                                    Wishlist
                                </span>
                                <i class="pi pi-chevron-right text-gray-400"></i>
                            </button>
                            <button @click="activeTab = 'addresses'"
                                :class="['w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition text-sm sm:text-base',
                                    activeTab === 'addresses' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50']">
                                <span class="flex items-center">
                                    <i class="pi pi-map-marker mr-2 sm:mr-3 text-indigo-600"></i>
                                    Addresses
                                </span>
                                <i class="pi pi-chevron-right text-gray-400"></i>
                            </button>
                            <button @click="activeTab = 'security'"
                                :class="['w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition text-sm sm:text-base',
                                    activeTab === 'security' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50']">
                                <span class="flex items-center">
                                    <i class="pi pi-lock mr-2 sm:mr-3 text-indigo-600"></i>
                                    Security
                                </span>
                                <i class="pi pi-chevron-right text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Main Content Area -->
                <div class="md:col-span-2">
                    <!-- Profile Details Section -->
                    <div v-if="activeTab === 'profile'" class="bg-white rounded-3xl shadow-xl p-4 sm:p-6 mb-6">
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Profile Details</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label class="block text-gray-700 mb-2 text-sm sm:text-base">First Name</label>
                                <input type="text" value="Sarah" 
                                    class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2 text-sm sm:text-base">Last Name</label>
                                <input type="text" value="Johnson"
                                    class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
                                <input type="email" value="sarah.j@example.com"
                                    class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2 text-sm sm:text-base">Phone</label>
                                <input type="tel" value="+1 234 567 890"
                                    class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-indigo-500 focus:outline-none">
                            </div>
                        </div>
                    </div>

                    <!-- Orders Tab -->
                    <div v-if="activeTab === 'orders'" class="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Recent Orders</h2>
                        <div class="overflow-x-auto -mx-4 sm:mx-0">
                            <table class="w-full min-w-[600px]">
                                <thead>
                                    <tr class="border-b border-gray-100">
                                        <th class="text-left py-3 sm:py-4 px-4 text-sm sm:text-base">Order ID</th>
                                        <th class="text-left py-3 sm:py-4 px-4 text-sm sm:text-base">Date</th>
                                        <th class="text-left py-3 sm:py-4 px-4 text-sm sm:text-base">Status</th>
                                        <th class="text-left py-3 sm:py-4 px-4 text-sm sm:text-base">Total</th>
                                        <th class="text-left py-3 sm:py-4 px-4 text-sm sm:text-base">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">#ORD-123456</td>
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">Aug 15, 2023</td>
                                        <td class="py-3 sm:py-4 px-4">
                                            <span class="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-green-100 text-green-700">
                                                Delivered
                                            </span>
                                        </td>
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">$299.00</td>
                                        <td class="py-3 sm:py-4 px-4">
                                            <router-link to="/order_details" class="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">View Details</router-link>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">#ORD-123457</td>
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">Aug 12, 2023</td>
                                        <td class="py-3 sm:py-4 px-4">
                                            <span class="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-700">
                                                Processing
                                            </span>
                                        </td>
                                        <td class="py-3 sm:py-4 px-4 text-sm sm:text-base">$159.00</td>
                                        <td class="py-3 sm:py-4 px-4">
                                            <router-link to="/order_details" class="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">View Details</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Wishlist Tab -->
                    <div v-if="activeTab === 'wishlist'" class="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Wishlist</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div v-for="item in wishlistItems" :key="item.id" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                                <div class="relative">
                                    <img :src="item.image" :alt="item.name" class="w-full h-40 sm:h-48 object-cover">
                                    <button @click="removeFromWishlist(item.id)" class="absolute top-2 right-2 p-1.5 sm:p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition">
                                        <i class="pi pi-times text-sm sm:text-base"></i>
                                    </button>
                                </div>
                                <div class="p-3 sm:p-4">
                                    <h3 class="text-base sm:text-lg font-semibold mb-2">{{ item.name }}</h3>
                                    <div class="text-lg sm:text-xl font-bold text-indigo-600 mb-3 sm:mb-4">${{ item.price }}</div>
                                    <button @click="addToCart(item)" class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-full text-sm sm:text-base hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                                        <i class="pi pi-shopping-cart mr-2"></i>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Addresses Tab -->
                    <div v-if="activeTab === 'addresses'" class="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Addresses</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <!-- Default Address -->
                            <div class="border border-gray-200 rounded-xl p-3 sm:p-4 relative hover:border-indigo-300 transition">
                                <div class="absolute top-3 sm:top-4 right-3 sm:right-4 space-x-2">
                                    <button @click="editAddress" class="text-gray-400 hover:text-indigo-600"><i class="pi pi-pencil text-sm sm:text-base"></i></button>
                                    <button @click="deleteAddress" class="text-gray-400 hover:text-red-500"><i class="pi pi-trash text-sm sm:text-base"></i></button>
                                </div>
                                <div class="flex items-center mb-2">
                                    <h3 class="font-semibold text-sm sm:text-base">Home</h3>
                                    <span class="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs rounded-full">Default</span>
                                </div>
                                <p class="text-gray-600 text-sm sm:text-base">123 Main Street, Apt 4B</p>
                                <p class="text-gray-600 text-sm sm:text-base">New York, NY 10001</p>
                                <p class="text-gray-600 text-sm sm:text-base">United States</p>
                                <p class="text-gray-600 mt-2 text-sm sm:text-base">Phone: (555) 123-4567</p>
                            </div>

                            <!-- Add New Address Form -->
                            <div v-if="showAddressForm" class="border border-gray-200 rounded-xl p-4 sm:p-6">
                                <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Add New Address</h3>
                                <div class="space-y-3 sm:space-y-4">
                                    <div>
                                        <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Address Type</label>
                                        <input v-model="newAddress.type" type="text" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400" placeholder="Home, Work, etc.">
                                    </div>
                                    <div>
                                        <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Street Address</label>
                                        <input v-model="newAddress.street" type="text" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400">
                                    </div>
                                    <div class="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">City</label>
                                            <input v-model="newAddress.city" type="text" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400">
                                        </div>
                                        <div>
                                            <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">State</label>
                                            <input v-model="newAddress.state" type="text" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400">
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">ZIP Code</label>
                                            <input v-model="newAddress.zip" type="text" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400">
                                        </div>
                                        <div>
                                            <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Phone</label>
                                            <input v-model="newAddress.phone" type="tel" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400">
                                        </div>
                                    </div>
                                    <div class="flex justify-end space-x-3 sm:space-x-4">
                                        <button @click="cancelAddAddress" class="px-4 sm:px-6 py-2 border border-gray-200 rounded-lg text-sm sm:text-base hover:bg-gray-50">Cancel</button>
                                        <button @click="saveAddress" class="px-4 sm:px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm sm:text-base hover:bg-indigo-700">Save Address</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Add New Address Button -->
                            <div v-else @click="showAddressForm = true" class="border-2 border-dashed border-gray-200 rounded-xl p-3 sm:p-4 flex items-center justify-center cursor-pointer hover:border-indigo-300 transition">
                                <div class="text-center">
                                    <i class="pi pi-plus text-xl sm:text-2xl text-gray-400 mb-1 sm:mb-2"></i>
                                    <p class="text-gray-600 text-sm sm:text-base">Add New Address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Security Tab -->
                    <div v-if="activeTab === 'security'" class="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                        <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Security Settings</h2>
                        <div class="space-y-4 sm:space-y-6">
                            <div class="border-b border-gray-100 pb-4 sm:pb-6">
                                <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Change Password</h3>
                                <div class="space-y-3 sm:space-y-4">
                                    <div>
                                        <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Current Password</label>
                                        <input type="password" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">New Password</label>
                                        <input type="password" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label class="block text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Confirm New Password</label>
                                        <input type="password" class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent">
                                    </div>
                                    <button class="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition">Update Password</button>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Two-Factor Authentication</h3>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-600 text-sm sm:text-base">Add an extra layer of security to your account</p>
                                        <p class="text-xs sm:text-sm text-gray-500">We'll send you a code via SMS to verify your identity</p>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer">
                                        <div class="w-9 sm:w-11 h-5 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'


export default {
    name: 'Myaccount',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            activeTab: 'profile'
        }
    }
}
</script>
