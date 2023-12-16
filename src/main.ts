// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModules } from './app/app.modules';

platformBrowserDynamic().bootstrapModule(AppModules)
  .catch(err => console.error(err));
