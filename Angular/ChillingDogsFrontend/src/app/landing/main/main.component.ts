import { Component } from '@angular/core';
import { ReseniasService } from '../../service/resenias.service';
import { Resenia } from '../../Resenia';

@Component({
  selector: 'landing-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  resenias: Resenia[] = [];
  mostrarResenias: boolean = true;
  constructor(private reseniaService: ReseniasService) {}

  ngOnInit() {
    this.resenias = this.reseniaService.findAll();
  }

  responsiveOptions: any[] = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
}
