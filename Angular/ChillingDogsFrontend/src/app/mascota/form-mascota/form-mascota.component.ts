import { Component, Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { Cliente } from '../../modelo/cliente';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrl: './form-mascota.component.scss'
})
export class FormMascotaComponent {
  @Input() modificar!: boolean
  @Input() mascota!: Mascota;
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private mascotaService: MascotaService,
    private route: ActivatedRoute
  ){

  }

  onSubmit(){
    if (this.modificar) {
      this.mascotaService.update(this.mascota);
      this.router.navigate(['/mascotas/buscar']);
    } else {
      console.log(this.mascota);
      this.mascotaService.add(this.mascota);
      this.router.navigate(['/mascotas/buscar']);
    }
  }



  ngOnInit() :void {
    const fotoInput = document.getElementById('foto') as HTMLInputElement;
    const img = document.createElement('img');

    const url = fotoInput.value;
    if(!this.modificar){
        this.route.paramMap.subscribe(params => {
            this.clienteService.findAll().subscribe(clientes => {
                this.clientes = clientes;
                console.log(clientes);
            })
        })
    }
    if (url !== '') {
        img.src = url;
        img.alt = 'Foto de registro';
        img.style.height = '10em';
        img.style.width = '10em';
        img.style.objectFit = 'contain';

        const fotoDefault = document.getElementById('fotoRegistro') as HTMLElement;
        if (fotoDefault) {
            fotoDefault.replaceWith(img);
        }
    }

    fotoInput.addEventListener('input', () => {
        const url = fotoInput.value;
        if (url) {
            img.src = url; // Actualiza la fuente de la imagen

            if (!img.parentNode) {
                img.alt = 'Foto de registro';
                img.style.height = '10em';
                img.style.width = '10em';
                img.style.objectFit = 'contain';

                const fotoDefault = document.getElementById('fotoRegistro') as HTMLElement;
                if (fotoDefault) {
                    fotoDefault.replaceWith(img);
                }
            }
        }
    });
    
  }

  selectButton(event: MouseEvent, color: string) {
    // Rellenar el botón para el formulario
    const button = event.currentTarget as HTMLElement;
    const input = document.getElementById('estado') as HTMLInputElement;
    if (input) {
        input.value = button.textContent || ''; // Asegúrate de que textContent no sea null
    }
    // Deseleccionar todos los botones
    const buttons = button.parentElement?.children;
    console.log(buttons);
    if (buttons) {
        // Recorrer los botones y cambiar su color
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i] as HTMLElement;
            btn.classList.remove("estadoActivo", "estadoInactivo");
            btn.classList.add("btn-grey");
        }

        // Seleccionar el botón elegido y cambiar su color
        if (color === "green") {
            button.classList.remove("btn-grey");
            button.classList.add("estadoActivo");
        } else if (color === "red") {
            button.classList.remove("btn-grey");
            button.classList.add("estadoInactivo");
        } else {
            button.classList.remove("btn-grey");
        }
    }
}
}
