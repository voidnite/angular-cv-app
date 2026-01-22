import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Profile } from './profile/profile';
import { skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    App,
    Header,
    Profile,
    skills,
    Experience,
    Projects,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
