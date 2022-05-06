import { Component, OnInit, Input } from '@angular/core';

import { Plat } from '../models/plat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlatService } from '../Services/plat.service';



@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css','../../../node_modules/bootswatch/dist/Litera/bootstrap.css']
})
export class PlatComponent implements OnInit {

  @Input() piece?: Plat;

  constructor(
    private route: ActivatedRoute,
    private pieceService: PlatService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlat();
  }

  getPlat(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pieceService.getPlat(id).subscribe(piece => this.piece = piece);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.piece) {
      this.pieceService.updatePlat(this.piece).subscribe(() => this.goBack());
    }
  }

  delete(piece: Plat): void {
    this.pieceService.deletePlat(piece.id).subscribe(() => this.goBack());
  }

}
