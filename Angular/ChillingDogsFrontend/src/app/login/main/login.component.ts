import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Input()
  cedula!: number;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/mis-mascotas', this.cedula]);
  }

  goToMascotas() {
    this.router.navigate(['/mascotas/buscar']);
  }
}
