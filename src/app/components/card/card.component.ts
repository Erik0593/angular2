import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interface/personajes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() personaje!: Personajes

  constructor() { }

}
