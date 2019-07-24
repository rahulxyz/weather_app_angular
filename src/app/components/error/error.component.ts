import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() errorStatusCode;

  constructor() { }

  ngOnInit() {
  }

}
