import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private tipoLogueoSource = new BehaviorSubject<string>('guest');
    tipoLogueo$ = this.tipoLogueoSource.asObservable();

    setTipoLogueo(tipo: string) {
        this.tipoLogueoSource.next(tipo);
    }
}
