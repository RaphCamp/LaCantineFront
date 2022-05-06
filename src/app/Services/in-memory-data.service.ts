import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plat } from '../plat';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pieces: Plat[] = [
      { id: 11, name: 'Luffy', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 12, name: 'Zoro', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 10},
      { id: 13, name: 'Nami', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 14, name: 'Usopp', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 15, name: 'Sanji', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 16, name: 'Chopper', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 17, name: 'Robin', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 18, name: 'Franky', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 19, name: 'Brook', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
      { id: 20, name: 'Jimbe', desc: 'banpresto', photo: "../../assets/Akainu.jpg", prix: 50},
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