import { wait } from '@/utils';

export default defineNuxtRouteMiddleware(async () => {
  if (false) await useAsyncData('regionDetect', wait);
});
