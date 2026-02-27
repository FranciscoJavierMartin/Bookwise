import { ROUTES } from '@/utils/constants/routes';
import { authClient } from '~~/lib/auth-client';

export default defineNuxtRouteMiddleware(async () => {
  const { data: session } = await authClient.useSession(useFetch);

  if (session.value?.user.role !== 'admin') {
    return await navigateTo({ name: ROUTES.signInAdmin });
  }
});
