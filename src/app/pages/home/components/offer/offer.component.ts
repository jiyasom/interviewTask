import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  Images = [
    'assets/images/col-ico-1.png',
    '/assets/images/col-ico-2.png',
    'assets/images/col-ico-3.png',
    'assets/images/col-ico-4.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
