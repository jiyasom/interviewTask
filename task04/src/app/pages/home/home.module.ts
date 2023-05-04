import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './homer-outing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LorumCardComponentModule } from './components/lorum_card/lorum_card.module';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { OfferModule } from './components/offer/offer.module';
import { BoxrowModule } from './components/boxrow/boxrow.module';
import { featuresModule } from './components/features/features.module';
import { ProfieModule } from './components/profile/profile.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule, SharedModule,LorumCardComponentModule,
  
  
    HeaderModule,
    FooterModule,
    OfferModule,
    BoxrowModule,
    featuresModule,
    ProfieModule,
  
  ],
})
export class HomeModule {}
