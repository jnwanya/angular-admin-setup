import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TitleResolverComponent} from '../layout/title-resolver/title-resolver.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './accordion';
import { CardComponent } from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
/*
import {ToggleFullScreenDirective} from './fullscreen/toggle-fullscreen.directive';


import {CardComponent} from './card/card.component';

import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {DataFilterPipe} from './elements/data-filter.pipe'; */


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleResolverComponent,
    SpinnerComponent,
    ClickOutsideModule,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    CardComponent

   /* ToggleFullScreenDirective,
    ModalBasicComponent,
    ModalAnimationComponent,
    DataFilterPipe */
  ],
  declarations: [
    TitleResolverComponent,
    SpinnerComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardComponent,
    CardToggleDirective,
    /*ToggleFullScreenDirective,
    ModalBasicComponent,
    ModalAnimationComponent,
    DataFilterPipe*/
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
