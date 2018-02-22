// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBKea9HYcY1LhVVPIE6isOyWt-mpnjz4cQ",
    authDomain: "midas-panel.firebaseapp.com",
    databaseURL: "https://midas-panel.firebaseio.com",
    projectId: "midas-panel",
    storageBucket: "midas-panel.appspot.com",
    messagingSenderId: "137871080890"
  }
};
