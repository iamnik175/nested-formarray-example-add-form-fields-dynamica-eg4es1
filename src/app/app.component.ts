import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appForm: FormGroup;
  response = {
    plan: 'data1',
    FirstAmt: 'data2',
    dataa3: [
      {
        id: 1,
        feild1: 'esf',
      },
      {
        id: 3,
        feild1: 'tst',
      },
      {
        id: 4,
        feild1: 'dsfg',
      },
    ],
  };
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.appForm = this.fb.group({
      plan: [''],
      FirstAmt: [''],
      walletFormArray: this.fb.array([this.employees()]),
    });
  }

  walletFormArrayControls() {
    return (this.appForm.get('walletFormArray') as FormArray).controls;
  }

  employees(): FormGroup {
    return this.fb.group({
      feild1: [''],
      feild2: [''],
      feild3: [''],
      feild4: [''],
    });
  }

  addEmployy() {
    let formArray = this.appForm.get('walletFormArray') as FormArray;
    formArray.push(this.employees());
  }
  removeEmployee(i) {
    let formArray = this.appForm.get('walletFormArray') as FormArray;
    formArray.removeAt(i);
  }
}
