import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/form', pathMatch: 'full' },
  	{ path: 'form', component: FormComponent },
	{ path: 'dynamic-form', component: DynamicFormComponent },
	{ path: 'page-dynamic-edit', loadChildren: () => import('./page-dynamic-edit/dynamic.module').then(m => m.DynamicModule) }
];
