import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Plat } from '../models/plat';
import { PLATS } from '../mock-plats';
import { PlatService } from '../Services/plat.service';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

import { filter } from "rxjs/operators";
import { interval, of, timer } from "rxjs";

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../../../node_modules/bootswatch/dist/Litera/bootstrap.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private platService: PlatService,
    private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.platService.currentFilter.subscribe(message => this.messageChild = message);
    this.getPlats();

  }
  messageChild!: string;
  //@Input()  messageChild! : string;
  //ngOnChanges(changes: SimpleChanges): void {
  //  console.log(changes);
  //  this.getPlats();

  //}

  plats: Plat[] = [];
  //plats$!: Observable<Plat[]>;
  // private searchTerms = new Subject<string>();

  getPlats(): void {
    console.log('Tableau chargé' + this.messageChild);

    this.platService.getPlats().subscribe(plats => this.plats = plats);
    //.filter(plats => plats.name.includes(this.message))
  }

  filteredPlats(): Plat[] {
    return this.plats.filter(plats => plats.name.toLowerCase().includes(this.messageChild.toLowerCase()));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.platService.addPlat({ name } as Plat).subscribe(plat => {
      this.plats.push(plat);
    });
  }

}
