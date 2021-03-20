import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-feature/components/dog-list/dog-list.component';
import { AddDogComponent } from './dog-feature/components/add-dog/add-dog.component';
import { HeaderComponent } from './header-feature/components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { dogReducer } from './dog-feature/store/dog.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DogEffects } from './dog-feature/store/dog.effects';
@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    AddDogComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ dogState: dogReducer }),
    EffectsModule.forRoot([DogEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
