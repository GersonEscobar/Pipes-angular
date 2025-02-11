import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {label: 'Pipes de angular', 
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ['']
            
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: ['number']
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['uncommon']
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items:[
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog'
          }
        ]
      }

      
    ]
  }

  
  

}
