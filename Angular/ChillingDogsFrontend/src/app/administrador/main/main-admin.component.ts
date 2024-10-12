import { Component } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.scss'
})
export class MainAdminComponent {
  nombreAdministrador: string = 'Ricardo Faccini';
}
