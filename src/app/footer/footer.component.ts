import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isModoOscuro = true;
  @Output() cambiarModoGeneral = new EventEmitter<Boolean>();

  cambiarModo(){
    this.isModoOscuro = !this.isModoOscuro;
    const footerElement = document.getElementById('footer');
    console.log(footerElement);
    this.cambiarModoGeneral.emit(this.isModoOscuro);
    if (footerElement) {
      if(!this.isModoOscuro){
        footerElement.classList.replace('footer', 'light-footer');
        return;
      }
      footerElement.classList.replace('light-footer', 'footer');
    }
  }
}
