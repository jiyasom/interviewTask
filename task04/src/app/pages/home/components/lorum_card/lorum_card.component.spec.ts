import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorumCardComponent } from './lorum_card.component';

describe('LorumCardComponent', () => {
  let component: LorumCardComponent;
  let fixture: ComponentFixture<LorumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorumCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LorumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
