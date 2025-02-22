import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'primeicons/primeicons.css'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const app = createApp(App)

app.use(router)

// Register carousel components globally
app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Pagination', Pagination) 
app.component('Navigation', Navigation)

app.mount('#app')
