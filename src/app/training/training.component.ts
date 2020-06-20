import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

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
