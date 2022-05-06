import { Component, OnInit, Input } from '@angular/core';

import { Plat } from '../plat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PieceService } from '../Services/piece.service';



@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css','../../../node_modules/bootswatch/dist/Litera/bootstrap.css']
})
export class PlatComponent implements OnInit {

  @Input() piece?: Plat;

  constructor(
    private route: ActivatedRoute,
    private pieceService: PieceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPiece();
  }

  getPiece(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pieceService.getPiece(id).subscribe(piece => this.piece = piece);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.piece) {
      this.pieceService.updatePiece(this.piece).subscribe(() => this.goBack());
    }
  }

  delete(piece: Plat): void {
    this.pieceService.deletePiece(piece.id).subscribe(() => this.goBack());
  }

}
