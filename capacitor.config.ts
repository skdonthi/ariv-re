import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ariv.re',
  appName: 'ariv-re',
  webDir: 'dist/ariv-re',
  server: {
    androidScheme: 'https'
  }
};

export default config;
