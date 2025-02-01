import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/Auth/LoginForm.vue';
import RegisterForm from './components/Auth/RegisterForm.vue';
import Index from './components/layouts/Index.vue';
import Shop from './components/layouts/Shop.vue';
import ProductDetails from './components/layouts/ProductDetails.vue';
import Blog from './components/layouts/Blog.vue';
import BlogDetails from './components/layouts/BlogDetails.vue';
import Contact from './components/layouts/Contact.vue';
import Wishlist from './components/layouts/Wishlist.vue';
import Cart from './components/layouts/Cart.vue';
import Compare from './components/layouts/Compare.vue';
import MyAccount from './components/layouts/MyAccount.vue';
import OrderDetails from './components/layouts/OrderDetails.vue';
import TrackOrder from './components/layouts/TrackOrder.vue';
import ForgotPassword from './components/Auth/ForgotPassword.vue';
import Checkout from './components/layouts/Checkout.vue';

const routes = [
  { path: '/', name: 'Index', component: Index, meta: { title: 'Home' } },
  { path: '/shop', name: 'Shop', component: Shop, meta: { title: 'Shop' } },
  { path: '/product-details', name: 'ProductDetails', component: ProductDetails, meta: { title: 'Product Details' } },
  { path: '/blog', name: 'Blog', component: Blog, meta: { title: 'Blog' } },
  { path: '/blog-details', name: 'BlogDetails', component: BlogDetails, meta: { title: 'Blog Details' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { title: 'Wishlist' } },
  { path: '/cart', name: 'Cart', component: Cart, meta: { title: 'Cart' } },
  { path: '/compare', name: 'Compare', component: Compare, meta: { title: 'Compare' } },
  { path: '/my-account', name: 'MyAccount', component: MyAccount, meta: { title: 'My Account' } },
  { path: '/order-details', name: 'OrderDetails', component: OrderDetails, meta: { title: 'Order Details' } },
  { path: '/checkout', name: 'Checkout', component: Checkout, meta: { title: 'Checkout' } },
  { path: '/login', name: 'Login', component: LoginForm, meta: { title: 'Login' } },
  { path: '/track-order', name: 'TrackOrder', component: TrackOrder, meta: { title: 'Track Order' } },
  { path: '/register', name: 'Register', component: RegisterForm, meta: { title: 'Register' } },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { title: 'Forgot Password' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update document title based on the route's meta title
router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});

export default router;
