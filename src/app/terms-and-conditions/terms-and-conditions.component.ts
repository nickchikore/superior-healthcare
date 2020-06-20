import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor() { }

 
  mobileView:boolean;
  innerWidth:number = window.innerWidth;

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    if(window.innerWidth <= 960){
      this.mobileView = true;
    }
    else{
      this.mobileView = false;
    }
  }
  ngOnInit() {
    if(window.innerWidth <= 960){
      this.mobileView = true;
      console.log('mobile');
    }
    else{
      this.mobileView = false;
      console.log('desktop');      
    }
  }

}
