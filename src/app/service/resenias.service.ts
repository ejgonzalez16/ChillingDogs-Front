import { Injectable } from '@angular/core';
import { Resenia } from '../Resenia';

@Injectable({
  providedIn: 'root'
})
export class ReseniasService {

  constructor() { }

  resenias = [
      {
          fotoMascota: "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg",
          fotoDuenio: "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
          nombreMascota: "Rex",
          nombreDuenio: "Oriol",
          txtResenia: "Rex ha mejorado mucho después del tratamiento. ¡Gracias al veterinario!"
      },
      {
          fotoMascota: "https://th.bing.com/th/id/OIP.g6NAv1b1BWXUW34_sSOXdQHaFj?rs=1&pid=ImgDetMain",
          fotoDuenio: "https://ingenieria.javeriana.edu.co/documents/1569590/6377497/alexandra_pomares.png/29424f30-bc81-c1e3-382d-03e0dc6e6c53",
          nombreMascota: "Luna",
          nombreDuenio: "Maria Gomez",
          txtResenia: "Luna se siente mucho mejor ahora. El equipo es increíble."
      },
      {
          fotoMascota: "https://th.bing.com/th/id/OIP._msPDb_bmjnY7UZTjGmF8gHaFj?rs=1&pid=ImgDetMain",
          fotoDuenio: "https://ingenieria.javeriana.edu.co/documents/1569590/13146329/im-carlos-parra-2024.jpg/326b68e4-0ff3-f900-d50c-cf2d3163766b",
          nombreMascota: "Max",
          nombreDuenio: "Luis Martinez",
          txtResenia: "Max ha estado muy activo y feliz. Estoy muy agradecido."
      },
      {
          fotoMascota: "https://th.bing.com/th/id/OIP.bCYSKr3Z5Jkgso9KweqwxAHaFj?rs=1&pid=ImgDetMain",
          fotoDuenio: "https://ingenieria.javeriana.edu.co/documents/1569590/13145934/im-pilar-rueda-2024.jpg/987bac0c-1f02-e8fd-36a1-9311f8879ded",
          nombreMascota: "Bella",
          nombreDuenio: "Ana Rodriguez",
          txtResenia: "Bella está llena de energía gracias a su tratamiento."
      },
      {
          fotoMascota: "https://th.bing.com/th/id/R.62c7ad55240be489b87dfde37443585e?rik=Se3fw16JA7wiaw&pid=ImgRaw&r=0",
          fotoDuenio: "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
          nombreMascota: "Rocky",
          nombreDuenio: "Oriol",
          txtResenia: "Rocky ha respondido muy bien al tratamiento. ¡Recomiendo este lugar!"
      }
  ];

  findAll(): Resenia[] {
    return this.resenias;
  }
}
