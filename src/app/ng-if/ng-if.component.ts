import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  messeage = 'xin chao Bruuu!!';
  printAble = false;
  tabIndex = 1;
  contacts = [{
    id: 1,
    name: 'minh',
    job: 'web developer',
    avatar: {
      url: 'https://james.codegym.vn/pluginfile.php/17033/mod_assign/intro/form1.png'
    }
    }, {
    id: 2,
    name: 'hai',
    job: 'web designer',
    avatar: {
      url: 'https://james.codegym.vn/pluginfile.php/17033/mod_assign/intro/form1.png'
    }
  }, {
    id: 3,
    name: 'nghia',
    job: 'backend developer',
    avatar: {
      url: 'https://james.codegym.vn/pluginfile.php/17033/mod_assign/intro/form1.png'
    }
  }

];
  changeTab(tabIdenx) {
    this.tabIndex = tabIdenx;
  }
  constructor() {
  }


}
