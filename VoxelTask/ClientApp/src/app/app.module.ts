import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HttpClientModule} from '@angular/common/http';

import { environment } from 'src/environments/environment';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FileuploadComponent } from './view/fileupload/fileupload.component';
import { DropzoneComponent } from './view/fileupload/components/dropzone/dropzone.component';
import { ListFileComponent } from './view/fileupload/components/list-file/list-file.component';
import { MapComponent } from './view/map/map.component';

// Directives
import { DropZoneDirective } from './shared/directive/drop-zone.directive';
import { FileSelectDirective } from './shared/directive/file-select.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropzoneComponent,
    FileuploadComponent,
    ListFileComponent,
    DropZoneDirective,
    FileSelectDirective,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }