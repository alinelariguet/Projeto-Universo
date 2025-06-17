import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoPageDynamicEditComponent, PoPageDynamicEditModule } from '@po-ui/ng-templates';

const routes: Routes = [
  {
    path: '',
    component: PoPageDynamicEditComponent,
    data: { serviceApi: 'http://localhost:3000/v1/people' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    PoPageDynamicEditModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicModule { }