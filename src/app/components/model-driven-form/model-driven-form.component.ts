import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {PostFormDataService} from '../../services/post-form-data.service';
import {Http,Response} from '@angular/http';
import { HttpModule } from '@angular/http';
 

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor(private postdataService:PostFormDataService) { 
    debugger
  }
form;

public FormData:any={};
  ngOnInit() {
    this.form=new FormGroup({
  firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
  comment:new FormControl("")
    });
  }
  SaveFormData(e)
  {
    console.log(e);
  }

  btnSave(){
    this.postdataService.saveData().subscribe(res=>this.FormData=res);
    console.log("ASAVE");
  }

}
