export default defineNuxtRouteMiddleware(() => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return navigateTo("/");
  }
});
