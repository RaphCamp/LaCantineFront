import { Component, OnInit} from '@angular/core';
import { Plat } from '../models/plat';
import { Menu } from '../models/menu';

import { PlatService } from '../Services/plat.service';
import { MenuService } from '../Services/menu.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../../../node_modules/bootswatch/dist/Litera/bootstrap.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private menuService: MenuService,
    private platService: PlatService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.getMenus();
    this.getPlats();
  }

  plats: Plat[] = [];
  menus: Menu[] = [];

  //methodes menu
  getMenus(): void {
    console.log('Tableau chargé');

    this.menuService.getMenus().subscribe(menus => this.menus = menus);
  }

  //methodes plat
  getPlats(): void {
    console.log('Tableau chargé');

    this.platService.getPlats().subscribe(plats => this.plats = plats);
  }

  addPlat(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.platService.addPlat({ name } as Plat).subscribe(plat => {
      this.plats.push(plat);
    });
  }

}
