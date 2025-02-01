import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/Auth/LoginForm.vue';
import RegisterForm from './components/Auth/RegisterForm.vue';
import Index from './components/layouts/Index.vue';
import Shop from './components/layouts/Shop.vue';
import ProductDetails from './components/layouts/Product_details.vue';
import Blog from './components/layouts/Blog.vue';
import BlogDetails from './components/layouts/Blog_details.vue';
import Contact from './components/layouts/Contact.vue';
import Wishlist from './components/layouts/Wishlish.vue';
import Cart from './components/layouts/Cart.vue';
import Compare from './components/layouts/compare.vue';
import MyAccount from './components/layouts/Myaccount.vue';
import OrderDetails from './components/layouts/Order_Details.vue';
import TrackOrder from './components/layouts/Track_order.vue';
import ForgotPassword from './components/Auth/Forget.vue';
import Checkout from './components/layouts/checkout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
    meta: { title: 'Home' }
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: { title: 'Shop' }
  },
  {
    path: '/product_details',
    name: 'Product_details',
    component: ProductDetails,
    meta: { title: 'Product Details' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: { title: 'Blog' }
  },
  {
    path: '/blog_details',
    name: 'Blog_details', 
    component: BlogDetails,
    meta: { title: 'Blog Details' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Contact' }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
    meta: { title: 'Wishlist' }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { title: 'Cart' }
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare,
    meta: { title: 'Compare' }
  },
  {
    path: '/account',
    name: 'account',
    component: MyAccount,
    meta: { title: 'My Account' }
  },
  {
    path: '/order_details',
    name: 'Order_Details',
    component: OrderDetails,
    meta: { title: 'Order Details' }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta: { title: 'Checkout' }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
    meta: { title: 'Login' }
  },
  {
    path: '/track-order',
    name: 'track-order',
    component: TrackOrder,
    meta: { title: 'Track Order' }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
    meta: { title: 'Register' }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: { title: 'Forgot Password' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  }
});

router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;