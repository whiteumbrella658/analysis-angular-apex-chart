import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsComponent } from './ui-components.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FeatherIconModule } from '../../../core/feather-icon/feather-icon.module';

const routes: Routes = [
  {
    path: '',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'accordion',
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  declarations: [UiComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    FeatherIconModule
  ],
})
export class UiComponentsModule { }
