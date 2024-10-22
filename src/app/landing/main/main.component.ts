import { Component } from '@angular/core';
import { ReseniasService } from '../../service/resenias.service';
import { Resenia } from '../../Resenia';

@Component({
  selector: 'landing-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  resenias!: Resenia[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1099px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private reseniaService: ReseniasService) {}

  ngOnInit() {
    this.resenias = this.reseniaService.findAll();
  }
}
