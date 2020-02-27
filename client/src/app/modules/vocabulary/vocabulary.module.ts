import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyComponent } from './view/vocabulary/vocabulary.component';
import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyItemComponent } from './view/vocabulary-item/vocabulary-item.component';
import { SharedModule } from 'src/app/shared/modules/shared-module/shared-module.module';



@NgModule({
  declarations: [
    VocabularyComponent,
    VocabularyItemComponent
  ],
  imports: [
    CommonModule,
    VocabularyRoutingModule,
    SharedModule
  ]
})
export class VocabularyModule { }
