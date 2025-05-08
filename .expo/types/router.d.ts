/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/config/colors`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewImageScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/WelcomeScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/config/colors`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ViewImageScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/WelcomeScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/config/colors${`?${string}` | `#${string}` | ''}` | `/screens/ViewImageScreen${`?${string}` | `#${string}` | ''}` | `/screens/WelcomeScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/config/colors`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewImageScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/WelcomeScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
