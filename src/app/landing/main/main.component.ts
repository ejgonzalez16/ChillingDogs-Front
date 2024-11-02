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
  chatAbierto: boolean = false;
  imagenChat: string = 'assets/images/simbolo_chat.png';
  isFading: boolean = false;

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

  openChat(){
    if (this.chatAbierto) {
      this.chatAbierto = false;
      this.imagenChat = 'assets/images/simbolo_chat.png';
  } else {
      this.chatAbierto = true;
      this.imagenChat = 'assets/images/simbolo_chat_x.png';
  }
    
  }
}
