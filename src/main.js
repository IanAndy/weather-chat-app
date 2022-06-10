import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });

app.mount('#app')
    // const app = createApp(App).use(VueSmoothScroll)
    // app.mount('#app')