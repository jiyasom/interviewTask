import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LorumCardComponent } from './lorum_card.component';

@NgModule({
  declarations: [LorumCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [LorumCardComponent],
})
export class LorumCardComponentModule {}
