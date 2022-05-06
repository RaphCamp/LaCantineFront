import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plat } from '../plat';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pieces: Plat[] = [
      { id: 11, name: 'Rizotto', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 16},
      { id: 12, name: 'Poulet Roti', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 18},
      { id: 13, name: 'Curry', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 14, name: 'Nems', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 15, name: 'Tomates provencales', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 12},
      { id: 16, name: 'Burger', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 11},
      { id: 17, name: 'Steak à cheval', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 13},
      { id: 18, name: 'Truffade', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 50},
      { id: 19, name: 'Salade', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 12},
      { id: 20, name: 'Escargots qui crient', desc: 'très bon très bon', photo: "../../assets/rizotto.jpg", prix: 20},
    ];
    return { pieces };
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