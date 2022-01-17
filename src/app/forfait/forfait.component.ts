import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  
  forfaits: Forfait[] = FORFAITS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
