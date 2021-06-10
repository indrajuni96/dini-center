import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

export const setTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = ['Test'];

  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;
}