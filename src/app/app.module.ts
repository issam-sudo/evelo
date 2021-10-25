import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EveloFooterComponent } from './shared/components/evelo-footer/evelo-footer.component';
import { EveloHeaderComponent } from './shared/components/evelo-header/evelo-header.component';
import { EveloPlanningComponent } from './core/components/evelo-planning/evelo-planning.component';
import { EveloFeaturesComponent } from './core/components/evelo-features/evelo-features.component';
import {GuidedTourModule, GuidedTourService} from 'ngx-guided-tour';
import { EveloDetailsComponent } from './core/components/evelo-details/evelo-details.component';
import { EveloPartnersComponent } from './core/components/evelo-partners/evelo-partners.component';
import { EveloSlidersComponent } from './core/components/evelo-sliders/evelo-sliders.component';
import { EveloContainerComponent } from './core/components/evelo-container/evelo-container.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EveloFooterComponent,
    EveloHeaderComponent,
    EveloPlanningComponent,
    EveloFeaturesComponent,
    EveloDetailsComponent,
    EveloPartnersComponent,
    EveloSlidersComponent,
    EveloContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuidedTourModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    GuidedTourService,
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
