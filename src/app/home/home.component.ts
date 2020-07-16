import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  items = [
    {
      title: 'nurse',
      description:
        'We provide dedicated , caring and experienced staff for all your staffing requirements .',
      url: '',
    },
    {
      title: 'supporting-children',
      description:
        'Our support workers are well trained to work with clients with a wide range of needs',
      url: '',
    },
    {
      title: 'recruitment',
      description:
        'Our recruitment procedure is fair and transparent , and YOU are welcome to apply to join our team ',
      url: '',
    },
    {
      title: 'training',
      description:
        'We provide all the mandatory training and keep our staff updated on all the most up to date ways of working',
      url: '',
    },
    {
      title: 'elderly',
      description:
        'We provide domicilliary care as well as support staff for all sorts of clients and environments',
      url: '',
    },
  ];

  addSlide() {
    this.items.push({
      title: `Slide 6`,
      description: '',
      url: '',
    });
  }

  mobileView: boolean;
  innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 960) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }
  ngOnInit() {
    if (window.innerWidth <= 960) {
      this.mobileView = true;
      console.log('mobile');
    } else {
      this.mobileView = false;
      console.log('desktop');
    }
  }
}
