import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatIcon,
    MatNavList,
    MatListModule,
    MatSlideToggle
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  readonly collapsed = signal(false);

  toggleMenu():void {
    this.collapsed.update(valor => !valor);
  }
}
