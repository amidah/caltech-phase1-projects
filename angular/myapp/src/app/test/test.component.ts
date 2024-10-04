import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name = 'Mark';

  onClickHandler(event: any){
    console.log('button clicked');
    console.log(event);
  }

  onLoginHandler(){
    console.log("Login Handler Called..");
    this.name = 'John';
  }

  title = 'Angular Reactive Form'
  // Define the FormGroup instance
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  loginUser(){
    console.log(this.loginForm.value);
  }
}
