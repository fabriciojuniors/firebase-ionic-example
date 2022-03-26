import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.firebaseexample.j',
  appName: 'firebase-ionic-example',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
		PushNotifications: {
			presentationOptions: [
				"badge",
				"sound",
				"alert"
			]
		}
	}
};

export default config;
