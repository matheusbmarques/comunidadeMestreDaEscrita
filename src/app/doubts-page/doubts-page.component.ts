import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doubts-page',
  templateUrl: './doubts-page.component.html',
  styleUrls: ['./doubts-page.component.scss']
})
export class DoubtsPageComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
