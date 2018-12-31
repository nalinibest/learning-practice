import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { FormsModule} from '@angular/forms';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SampledirectivesComponent } from './sampledirectives/sampledirectives.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    SimpleformComponent,
    SampledirectivesComponent
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
