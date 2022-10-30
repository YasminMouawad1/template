// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  language:'ar',
  //apiRoot:'https://prod-midtakseet-webservice.midtakseet.com'
  apiRoot:'http://102.217.68.59:9090',
  recaptcha: {
    siteKey: '6LeSK3UiAAAAAF1IWEUnl3dukOjVE_NdTXPY7XP-',
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
