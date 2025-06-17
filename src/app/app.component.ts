import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Form', action: this.goTo.bind(this, 'form') },
    { label: 'Dynamic Form', action: this.goTo.bind(this, 'dynamic-form') },
    { label: 'Page Dynamic Edit', action: this.goTo.bind(this, 'page-dynamic-edit') }
  ];

  constructor(private router: Router) { }

  private goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
