import { createRouter, createWebHistory } from 'vue-router';
import { hasStoredResult } from '@/storage/resultStorage';
import StartPage from '@/pages/StartPage.vue';
import TestPage from '@/pages/TestPage.vue';
import ResultPage from '@/pages/ResultPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: () => (hasStoredResult() ? '/result' : '/start'),
    },
    {
      path: '/start',
      name: 'start',
      component: StartPage,
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
    },
    {
      path: '/result',
      name: 'result',
      component: ResultPage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to) => {
  if (to.name === 'test' && hasStoredResult()) {
    return { name: 'result' };
  }

  if (to.name === 'result' && !hasStoredResult()) {
    return { name: 'start' };
  }

  return true;
});

export default router;
