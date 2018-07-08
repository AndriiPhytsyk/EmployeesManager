import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchByNamePipe } from './pipes/search.pipe';

;


@NgModule({
  declarations: [
    AppComponent,
    SearchByNamePipe
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgbModule.forRoot(),
      
  
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
