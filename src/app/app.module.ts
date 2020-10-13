import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WheelForChangeComponent } from './wheel-for-change/wheel-for-change.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'IsHome' }},
  { path: 'about-me', component: AboutMeComponent, data: { animation: 'IsNotHome' } },
  { path: 'wheel-for-change', component: WheelForChangeComponent, data: { animation: 'IsNotHome' } }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HomeComponent,
    AboutMeComponent,
    WheelForChangeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
