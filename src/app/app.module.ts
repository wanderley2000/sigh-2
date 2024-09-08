import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './servicios/login.service';
import { EmpleadosService } from './servicios/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"sigh-2","appId":"1:888149236261:web:94b270d0145d2e86df7dcc","storageBucket":"sigh-2.appspot.com","apiKey":"AIzaSyAcnvRgho1ODmysXNVrUv2Y-lhXbnc82Lw","authDomain":"sigh-2.firebaseapp.com","messagingSenderId":"888149236261"})),
    provideDatabase(() => getDatabase()),
    LoginService,
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
