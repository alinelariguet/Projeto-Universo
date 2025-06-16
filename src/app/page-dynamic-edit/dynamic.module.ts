import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoPageDynamicEditComponent, PoPageDynamicEditModule } from '@po-ui/ng-templates';

@NgModule({
    imports: [
        CommonModule,
        PoPageDynamicEditModule,
        RouterModule.forChild([
            {
                path: '',
                component: PoPageDynamicEditComponent,
                data: {
                    serviceApi: 'http://localhost:3000/v1/people',
                }
            }
        ])
    ]
})
export class DynamicModule {}