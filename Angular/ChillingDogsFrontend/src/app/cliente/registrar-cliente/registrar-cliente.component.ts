import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.scss'
})
export class RegistrarClienteComponent {
  cliente: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    foto: '',
    mascotas: []
  };
}
