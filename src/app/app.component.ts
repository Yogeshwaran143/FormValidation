import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}
  
  simpleForm: any = [];
  maleGender: boolean = false;
  femaleGender: boolean = false;
  genderErrorMsg: any;

  ngOnInit() {

    this.simpleForm = new FormGroup({
      'firstName':  new FormControl(null, 
        [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(50),
          Validators.pattern('^[A-Za-z]+$'),
        ]),
      'country':  new FormControl(null, Validators.required),
      'city':  new FormControl(null, Validators.required),
      'age':  new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{0,3}$')]),
    });
  }

  onChangeMale() {
    this.maleGender = true;
    this.femaleGender = false;
  }

  onChangeFemale() {
    this.maleGender = false;
    this.femaleGender = true;
  }

  onSubmit(){
    console.log(this.maleGender, this.femaleGender);
    
    if (this.maleGender === false && this.femaleGender === false) {
      this.genderErrorMsg = '<span class="genderError marginAligin" *ngIf=""> Gender is required </span>'
    } else if (this.maleGender === true && this.femaleGender === true) {
      this.genderErrorMsg = '<span class="genderError marginAligin" *ngIf=""> Only one Gender is required </span>'
    } else {
      this.maleGender = false;
      this.femaleGender = false;
      this.simpleForm.reset();
    }
  }
  
}
