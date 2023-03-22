// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: process.env.NG_APP_url,
  nlUrl: process.env.NG_APP_nl_url,
  blobUrl: process.env.NG_APP_blobUrl,
  botPhoneNumber: process.env.NG_APP_botPhoneNumber,
  adapterId: process.env.NG_APP_adapterId,
  broadcastAdapterId: process.env.NG_APP_broadcastAdapterId,
  userId: process.env.NG_APP_userId,
  orgId: process.env.NG_APP_orgId,
  token: process.env.NG_APP_token,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
