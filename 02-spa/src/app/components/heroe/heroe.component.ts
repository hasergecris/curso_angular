import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(
    private activatedRouted: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRouted.params.subscribe((params) => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {}
}
