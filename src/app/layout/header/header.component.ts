import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }
  isHomepage : boolean = false;

  navFixed: boolean = false;
  private scrollOffset: number = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  toggleNav(){
    this.isActive = !this.isActive
  }

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
