import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trizkel.ztudio',
  appName: 'prototypeztudio',
  webDir: 'www',
  plugins: {
    Keyboard: { 
      style: "light",
      resizeOnFullScreen: true,
    }
  }
};

export default config;
