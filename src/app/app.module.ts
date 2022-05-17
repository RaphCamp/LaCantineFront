import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

//en attendant le serveur
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IdentificationComponent } from './identification/identification.component';
import { PlatComponent } from './plat/plat.component';
import { CarteComponent } from './carte/carte.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './menu/menu.component';
import { CallbackPipe } from './pipes/callback.pipe';
import {AutosizeModule} from 'ngx-autosize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BadPriceComponent } from './dialogs/bad-price/bad-price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IdentificationComponent,  
    PlatComponent,
    CarteComponent,
    MessagesComponent,
    MenuComponent,
    CallbackPipe,
    BadPriceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    AutosizeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
