import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {MenuComponent} from "./components/menu/menu.component";
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LightInfoComponent } from './components/light-info/light-info.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MenuComponent,
        UserDashboardComponent,
        LightInfoComponent,
        MyTransactionsComponent,
        MyContactListComponent,
        NewTransactionComponent,
        NewContactComponent,
        ProfileComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
