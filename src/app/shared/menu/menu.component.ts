import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .logo {
        width: 30px;
        margin-right: 20px;
      }
      .div-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .cerrar-sesion {
        margin-right: 20px;
        height: 30px;
        color: #343E4D;
        font-weight: 600;
      }
      `,
  ],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  itemsAuth: MenuItem[] = [];
  IsAuth: boolean = false;
  Permission: string | null = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.IsAuth = this.readSessionStorage('IsAuth') == 'true';
      }
    })
  }

  readSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }

  logout() {
    sessionStorage.removeItem('IsAuth');
    this.IsAuth = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        routerLink: ['/'],
      },
    ];
    this.itemsAuth = [
      {
        label: 'Inicio',
        routerLink: ['/'],
      },
      {
        label: 'Tienda',
        routerLink: ['/Store'],
      },
      {
        label: 'Cerrar sesión',
        command: () => {
          this.logout();
        }
      }
    ];
  }
}
