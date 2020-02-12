import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swtcher',
  templateUrl: './swtcher.component.html',
  styleUrls: ['./swtcher.component.scss']
})
export class SwtcherComponent implements OnInit {
  @Input() checked: false;
  constructor() { }

  ngOnInit(): void {
  }

}
