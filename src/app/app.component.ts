import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onewaybinding';
  selectedDay: string = '';


  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
   // console.log(this.selectedDay);
    console.log(event.target.value);
    if(this.selectedDay=="camel")
    {
      this.selectedDay="./assets/image/camel.jpg";
    }else if(this.selectedDay=="Tiger")
    {
      this.selectedDay="./assets/image/tiger.jpg";
    }
    else if(this.selectedDay=="elephant")
    {
      this.selectedDay="./assets/image/elephant.jpg";
    }
}
}