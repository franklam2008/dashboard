import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Pages Component
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ContactComponent } from './pages/contact/contact.component';
// HTTP
import { HttpClientModule } from '@angular/common/http';
// CSS
import { MaterialModule } from './material/material.module';
// Form
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Data
import { DataService } from './data.service';
// Chart
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    TicTacToeComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
