import { createApp } from 'vue';
import { createPinia } from 'pinia';
import bridge from '@vkontakte/vk-bridge';
import App from './App.vue';
import router from './router';

async function bootstrap() {
  await bridge.send('VKWebAppInit');

  createApp(App).use(createPinia()).use(router).mount('#app');
}

void bootstrap();
