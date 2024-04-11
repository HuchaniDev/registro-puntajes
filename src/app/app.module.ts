import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { environment } from 'src/environments/environments';
import { LoginComponent } from './components/login/login.component';
import { FormsModule} from '@angular/forms';
import { ListParticipantesComponent } from './components/list-participantes/list-participantes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    LoginComponent,
    ListParticipantesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
