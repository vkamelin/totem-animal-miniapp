import { createApp } from 'vue';
import { createPinia } from 'pinia';
import bridge from '@vkontakte/vk-bridge';
import App from './App.vue';
import router from './router';

createApp(App).use(createPinia()).use(router).mount('#app');

// VK Bridge is optional: the app should still run as a regular web app.
void bridge.send('VKWebAppInit').catch(() => {
  // Ignore bridge initialization failures outside VK Mini Apps.
});
