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
  onSubmit() {
    this.router.navigate(['/mis-mascotas', this.cedula]);
  }

  constructor(private router: Router) { }
  goToMascotas() {
    this.router.navigate(['/mascotas/buscar']);
  }
}
