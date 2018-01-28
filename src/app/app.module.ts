import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {PostFormDataService} from './services/post-form-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModelDrivenFormComponent
  ],
  imports: [  
    BrowserModule,
    MatInputModule,  
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PostFormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
