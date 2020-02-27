import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyComponent } from './view/vocabulary/vocabulary.component';
import { VocabularyItemComponent } from './view/vocabulary-item/vocabulary-item.component';

const vocabularyRouts: Routes = [
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'vocabulary/:id', component: VocabularyItemComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(vocabularyRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class VocabularyRoutingModule { }
