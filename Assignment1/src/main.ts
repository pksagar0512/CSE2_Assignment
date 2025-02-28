// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  // main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouter } from './app/app.routes'; // Import the router

bootstrapApplication(AppComponent, {
  providers: [appRouter] // Provide the router here
}).catch(err => console.error(err));
