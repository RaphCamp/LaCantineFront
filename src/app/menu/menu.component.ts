import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Plat } from '../plat';
import { PIECES } from '../mock-pieces';
import { PieceService } from '../Services/piece.service';

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
    private pieceService: PieceService,
    private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.pieceService.currentFilter.subscribe(message => this.messageChild = message);
    this.getPieces();

  }
  messageChild!: string;
  //@Input()  messageChild! : string;
  //ngOnChanges(changes: SimpleChanges): void {
  //  console.log(changes);
  //  this.getPieces();

  //}

  pieces: Plat[] = [];
  //pieces$!: Observable<Plat[]>;
  // private searchTerms = new Subject<string>();

  getPieces(): void {
    console.log('Tableau chargé' + this.messageChild);

    this.pieceService.getPieces().subscribe(pieces => this.pieces = pieces);
    //.filter(pieces => pieces.name.includes(this.message))
  }

  filteredPieces(): Plat[] {
    return this.pieces.filter(pieces => pieces.name.toLowerCase().includes(this.messageChild.toLowerCase()));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pieceService.addPiece({ name } as Plat).subscribe(piece => {
      this.pieces.push(piece);
    });
  }

}
