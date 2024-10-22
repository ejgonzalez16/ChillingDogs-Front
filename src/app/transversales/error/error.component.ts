import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  constructor(
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/landing']);
  }
}
