import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Recipe-App'; 
  public recipesData : Array<any>=[
    {name : 'Easy Sugar Recipes'},
    {name : 'Sausage Cheese Balls'},
    {name : 'Easiest Butter Fudge'},
    {name : 'Macronni and Cheese'},
    {name : 'Soft Ginger Cookies'},
    {name : 'Roasted Almond Fudge'}

  ]

  
  ngOnInit(): void {
    console.log(this.recipesData);
    
  }
}
