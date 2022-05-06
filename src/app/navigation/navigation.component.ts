import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Plat } from '../models/plat';
import { PlatService } from '../Services/plat.service';

import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ["../../../node_modules/bootswatch/dist/cyborg/bootstrap.css"]
})
export class NavigationComponent implements OnInit {

  constructor(
    private pieceService: PlatService,
  ) { }

  ngOnInit(): void {
    this.pieceService.currentFilter.subscribe(message => this.messageParent = message);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.pieceService.changeFilter(term);

  }

  messageParent!: string;




}
