import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
log(x)
{
  console.log(x);
}

SaveFormData(e){
  debugger;
var fNAME:string=e.value.firstName;
var comment:string=e.value.comment;
console.log(e.value);

}

btnSave(){
  console.log("btn saved click");
}
}
