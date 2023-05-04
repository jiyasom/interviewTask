import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorum_card',
  templateUrl: './lorum_card.component.html',
  styleUrls: ['./lorum_card.component.scss']
})
export class LorumCardComponent implements OnInit {
arrayImages=['assets/images/c1.png','assets/images/c2.png','assets/images/c3.png','assets/images/c4.png']
  constructor() { }

  ngOnInit(): void {
  }

}
