import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { QuiSommesComponent } from './components/pages/qui-sommes/qui-sommes.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CommentCaMarcheComponent } from './components/pages/comment-ca-marche/comment-ca-marche.component';
import { LesAvantagesComponent } from './components/pages/les-avantages/les-avantages.component';
import { PartenairesComponent } from './components/pages/partenaires/partenaires.component';
import { ComingSoonComponent } from './components/ui-segments/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QuiSommesComponent,
    ContactComponent,
    CommentCaMarcheComponent,
    LesAvantagesComponent,
    PartenairesComponent,
    ComingSoonComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent,
            FooterComponent,
            QuiSommesComponent,
            ContactComponent,
            CommentCaMarcheComponent,
            LesAvantagesComponent,
            PartenairesComponent,
            ComingSoonComponent],
  providers: []
})
export class SharedModule { }
