// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
// firebase config
import { FirebaseAppConfig, myFirebaseAppAuthConfig } from './firebase.app.config';

// custom module
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    AngularFireModule.initializeApp(FirebaseAppConfig,myFirebaseAppAuthConfig),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }