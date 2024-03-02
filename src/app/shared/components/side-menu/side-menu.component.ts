import { Component } from '@angular/core';

type MenuItemType = {
  title: string;
  route: string;
};

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  reactiveMenu: MenuItemType[] = [
    {
      title: 'Basic',
      route: '/reactive/basic',
    },
    {
      title: 'Dynamic',
      route: '/reactive/dynamic',
    },
    {
      title: 'Switch',
      route: '/reactive/switch',
    },
  ];
  authMenu: MenuItemType[] = [
    {
      title: 'Registro',
      route: '/auth/sign-up',
    },
  ];
}
