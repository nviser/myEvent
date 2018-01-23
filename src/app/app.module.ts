import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from '../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';
import { LoadingPage } from '../pages/loading/loading';
import { NoEventPage } from '../pages/no-event/no-event';
import { LanguageSelectionPage } from '../pages/language-selection/language-selection';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ScorePage } from '../pages/score/score';

import { ConfigServiceProvider } from '../providers/config-service/config-service';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { RegisterServiceProvider } from '../providers/register-service/register-service';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { ZBar } from '@ionic-native/zbar';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';

import { AppRate } from '@ionic-native/app-rate';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { ImgCacheModule } from 'ng-imgcache';
import { Keyboard } from '@ionic-native/keyboard';
import { Device } from '@ionic-native/device';
import { AndroidPermissions} from '@ionic-native/android-permissions';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    LoadingPage,
    NoEventPage,
    LanguageSelectionPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    SignOutPage,
    SignUpPage,
    ScorePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    ImgCacheModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp,{
    mode : 'ios',
	}),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoadingPage,
    NoEventPage,
    LanguageSelectionPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    SignOutPage,
    SignUpPage,
    ScorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigServiceProvider,
    ApiServiceProvider,
    RegisterServiceProvider,
    EventServiceProvider,
    ZBar,
    ProfileServiceProvider,
    AppRate,
    Keyboard,
    Device,
    AndroidPermissions,
    Camera,
    FileTransfer,
    FileTransferObject,
    File,
  ]
})
export class AppModule {}
