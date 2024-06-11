import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberSelectionComponent } from './Components/member-selection/member-selection.component';
import { EligibilityComponent } from './Components/eligibility/eligibility.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberSelectionComponent,
    EligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
