import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-cruds',
  templateUrl: './cruds.component.html',
  styleUrl: './cruds.component.scss'
})
export class CRUDsComponent {

  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/landing']);
  }
}
