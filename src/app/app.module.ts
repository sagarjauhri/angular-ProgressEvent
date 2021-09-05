import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalService } from './services/global.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpProgressInterceptor } from './services/http-progress-interceptor.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    GlobalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpProgressInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
