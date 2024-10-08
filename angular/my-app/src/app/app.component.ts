import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Angular Template Driven Form';
  title2 = 'Angular Directives';
  title3 = 'Angular Pipes'

  loginUser(item:any){
    
    console.log(item)
  
  }

  classes = [10, 20, 30, 40, 50];

  isActive = false;

  toggleActive(){
    this.isActive = !this.isActive;
  } 

  hello = 'Hello';

  today = Date();

  currencyNum = 1234.56;



}
