import { ROUTES } from '@/utils/constants/routes';
import { authClient } from '~~/lib/auth-client';

export default defineNuxtRouteMiddleware(async () => {
  const { data: session } = await authClient.useSession(useFetch);

  if (!session.value?.user) {
    return await navigateTo({ name: ROUTES.signIn });
  }
});
