import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/Auth/LoginForm.vue';
import RegisterForm from './components/Auth/RegisterForm.vue';
import Index from './components/layouts/Index.vue';
import Shop from './components/layouts/Shop.vue';
import Product_details from './components/layouts/Product_details.vue';
import Blog from './components/layouts/Blog.vue';
import Blog_details from './components/layouts/Blog_details.vue';
import Contact from './components/layouts/Contact.vue';
import Wishlish from './components/layouts/Wishlish.vue';
import Cart from './components/layouts/Cart.vue';
import Compare from './components/layouts/compare.vue';
import Myaccount from './components/layouts/Myaccount.vue';
import Order_Details from './components/layouts/Order_Details.vue';
import Track_order from './components/layouts/Track_order.vue';
import Forget from './components/Auth/Forget.vue';
import Checkout from './components/layouts/checkout.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { title: 'Home' }, // Add meta title
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: { title: 'Shop' }, // Add meta title
  },
  {
    path: '/product_details',
    name: 'Product_details',
    component: Product_details,
    meta: { title: 'Product Details' }, // Add meta title
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Blog' }, // Add meta title
  },
  {
    path: '/blog_details',
    name: 'Blog_details',
    component: Blog_details,
    meta: { title: 'Blog Details' }, // Add meta title
  },  
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact' }, // Add meta title
  },
  {
    path: '/wishlish',
    name: 'Wishlish',
    component: Wishlish,
    meta: { title: 'Wishlish' }, // Add meta title
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { title: 'Cart' }, // Add meta title
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare,
    meta: { title: 'Compare' }, // Add meta title
  },
  {
    path: '/myaccount',
    name: 'Myaccount',
    component: Myaccount,
    meta: { title: 'My Account' }, // Add meta title
  },
  {
    path: '/order_details',
    name: 'Order_Details',
    component: Order_Details,
    meta: { title: 'Order Details' }, // Add meta title
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { title: 'Checkout' }, // Add meta title
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    meta: { title: 'Login' }, // Add meta title
  },
  {
    path: '/track_order',
    name: 'Track_order',
    component: Track_order,
    meta: { title: 'Track Order' }, // Add meta title
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
    meta: { title: 'Register' }, // Add meta title
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget,
    meta: { title: 'Forget' }, // Add meta title
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update document title based on the route's meta title
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
