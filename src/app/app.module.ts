import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-feature/components/dog-list/dog-list.component';
import { AddDogComponent } from './dog-feature/components/add-dog/add-dog.component';
import { HeaderComponent } from './header-feature/components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    AddDogComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
