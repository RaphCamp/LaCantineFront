import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plat } from '../models/plat';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const plats: Plat[] = [
      { id: 11, name: 'Rizotto', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 16},
      { id: 12, name: 'Poulet Roti', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 18},
      { id: 13, name: 'Fondant Chocolat', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 14, name: 'Nems', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 15, name: 'Tomates provencales', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 12},
      { id: 16, name: 'Burger', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 11},
      { id: 17, name: 'Tarte au Citron', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 18, name: 'Truffade', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 50},
      { id: 19, name: 'Salade', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 12},
      { id: 20, name: 'Escargots qui crient', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 20},
    ];
    const menus: Menu[] = [
      { id: 11, name: 'Ptie Faim Salée',plats : [plats[3],plats[0]], prix: 16},
      { id: 11, name: 'Ptie Faim Sucrée',plats : [plats[1],plats[2]], prix: 16},
      { id: 13, name: 'Grosse Fringale',plats : [plats[8],plats[7],plats[6]], prix: 20},
      { id: 13, name: 'Burger',plats : [plats[5],{ id: 0, name: 'Frites', desc: 'seulement avec burger', photo: "../../assets/rizotto.jpg", prix: 0}], prix: 13},
    ];
    return { plats,menus };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pieces: Plat[]): number {
    return pieces.length > 0 ? Math.max(...pieces.map(piece => piece.id)) + 1 : 11;
  }
}