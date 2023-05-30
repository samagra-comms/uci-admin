// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: process.env.NG_APP_url,
  nlUrl: process.env.NG_APP_nl_url,
  userSegemtUrl: process.env.NG_APP_user_segment_url,
  nlLoginUrl: process.env.NG_APP_nl_login_url,
  nlLoginToken: process.env.NG_APP_nl_login_token,
  nlApplicationId: process.env.NG_APP_nl_application_id,
  blobUrl: process.env.NG_APP_blobUrl,
  botPhoneNumber: process.env.NG_APP_botPhoneNumber,
  adapterId: process.env.NG_APP_adapterId,
  broadcastAdapterId: process.env.NG_APP_broadcastAdapterId,
  userId: process.env.NG_APP_userId,
  orgId: process.env.NG_APP_orgId,
  token: process.env.NG_APP_token,
  conversationAdapterId: process.env.NG_APP_conversationAdapterId
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
