import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
      console.log(this.innerWidth);      
    }
  }

}
