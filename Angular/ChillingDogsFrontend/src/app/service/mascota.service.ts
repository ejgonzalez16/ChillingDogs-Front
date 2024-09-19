import { Injectable } from '@angular/core';
import {Mascota} from "../mascota/mascota";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  mascotas: Mascota[] = [
    {
      "id": 1,
      "nombre": "Rex",
      "raza": "Pastor Aleman",
      "edad": 5,
      "peso": 12.5,
      "enfermedad": "Parvovirus",
      "foto": "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg",
      "estado": "Activo",
      "cliente": {
        "id": 10000001,
        "cedula": "Mi padre Oriol",
        "nombre": "Oriol",
        "correo": "oriol.medina@javeriana.edu.co",
        "celular": "3001234567",
        "foto": "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 2,
      "nombre": "Luna",
      "raza": "Labrador",
      "edad": 3,
      "peso": 19.3,
      "enfermedad": "Moquillo",
      "foto": "https://th.bing.com/th/id/OIP.g6NAv1b1BWXUW34_sSOXdQHaFj?rs=1&pid=ImgDetMain",
      "estado": "Activo",
      "cliente": {
        "id": 10000001,
        "cedula": "Mi padre Oriol",
        "nombre": "Oriol",
        "correo": "oriol.medina@javeriana.edu.co",
        "celular": "3001234567",
        "foto": "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 3,
      "nombre": "Max",
      "raza": "Bulldog",
      "edad": 4,
      "peso": 22.7,
      "enfermedad": "Leptospirosis",
      "foto": "https://th.bing.com/th/id/OIP._msPDb_bmjnY7UZTjGmF8gHaFj?rs=1&pid=ImgDetMain",
      "estado": "Inactivo",
      "cliente": {
        "id": 10000001,
        "cedula": "Mi padre Oriol",
        "nombre": "Oriol",
        "correo": "oriol.medina@javeriana.edu.co",
        "celular": "3001234567",
        "foto": "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 4,
      "nombre": "Bella",
      "raza": "Beagle",
      "edad": 2,
      "peso": 14.8,
      "enfermedad": "",
      "foto": "https://th.bing.com/th/id/OIP.bCYSKr3Z5Jkgso9KweqwxAHaFj?rs=1&pid=ImgDetMain",
      "estado": "Activo",
      "cliente": {
        "id": 10000001,
        "cedula": "Mi padre Oriol",
        "nombre": "Oriol",
        "correo": "oriol.medina@javeriana.edu.co",
        "celular": "3001234567",
        "foto": "https://th.bing.com/th/id/R.86e2e107f0398e8bc119f3b1e8223114?rik=iF95qdzMN%2fQKFQ&riu=http%3a%2f%2fwww.laboraldecordoba.es%2falfabe%2falumnos%2fflores_herrera%2fhoy_3.jpg&ehk=JkAzfV5kZYfKWuAnuAsBpfb6a633lnPLvKkyZMq9%2fOE%3d&risl=&pid=ImgRaw&r=0",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 5,
      "nombre": "Rocky",
      "raza": "Boxer",
      "edad": 6,
      "peso": 16.9,
      "enfermedad": "Tos de las perreras",
      "foto": "https://th.bing.com/th/id/R.62c7ad55240be489b87dfde37443585e?rik=Se3fw16JA7wiaw&pid=ImgRaw&r=0",
      "estado": "Inactivo",
      "cliente": {
        "id": 10000002,
        "cedula": "Maria Gomez",
        "nombre": "Maria Gomez",
        "correo": "maria.gomez@example.com",
        "celular": "3012345678",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/6377497/alexandra_pomares.png/29424f30-bc81-c1e3-382d-03e0dc6e6c53",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 6,
      "nombre": "Molly",
      "raza": "Golden Retriever",
      "edad": 7,
      "peso": 20.4,
      "enfermedad": "Sarna sarcoptica",
      "foto": "https://th.bing.com/th/id/OIP.590a7Ef3KVmZcNLWjnM3EwHaFW?rs=1&pid=ImgDetMain",
      "estado": "Activo",
      "cliente": {
        "id": 10000002,
        "cedula": "Maria Gomez",
        "nombre": "Maria Gomez",
        "correo": "maria.gomez@example.com",
        "celular": "3012345678",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/6377497/alexandra_pomares.png/29424f30-bc81-c1e3-382d-03e0dc6e6c53",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 7,
      "nombre": "Daisy",
      "raza": "Poodle",
      "edad": 1,
      "peso": 27.6,
      "enfermedad": "Sarna demodecica",
      "foto": "https://th.bing.com/th/id/OIP.afqA7lMWzq1JGGZziqaNOwHaD1?rs=1&pid=ImgDetMain",
      "estado": "Activo",
      "cliente": {
        "id": 10000002,
        "cedula": "Maria Gomez",
        "nombre": "Maria Gomez",
        "correo": "maria.gomez@example.com",
        "celular": "3012345678",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/6377497/alexandra_pomares.png/29424f30-bc81-c1e3-382d-03e0dc6e6c53",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 8,
      "nombre": "Charlie",
      "raza": "Chihuahua",
      "edad": 5,
      "peso": 13.2,
      "enfermedad": "Infeccion por hongos (Candidiasis)",
      "foto": "https://th.bing.com/th/id/OIP.P2uYBNIhfFDtci809kmPowHaFU?rs=1&pid=ImgDetMain",
      "estado": "Inactivo",
      "cliente": {
        "id": 10000002,
        "cedula": "Maria Gomez",
        "nombre": "Maria Gomez",
        "correo": "maria.gomez@example.com",
        "celular": "3012345678",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/6377497/alexandra_pomares.png/29424f30-bc81-c1e3-382d-03e0dc6e6c53",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 9,
      "nombre": "Lucy",
      "raza": "Schnauzer",
      "edad": 3,
      "peso": 15.7,
      "enfermedad": "Otitis externa",
      "foto": "https://th.bing.com/th/id/OIP.F9JTG00mNauzqZMGPHBgPQHaEO?rs=1&pid=ImgDetMain",
      "estado": "Activo",
      "cliente": {
        "id": 10000003,
        "cedula": "Luis Martinez",
        "nombre": "Luis Martinez",
        "correo": "luis.martinez@example.com",
        "celular": "3023456789",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/13146329/im-carlos-parra-2024.jpg/326b68e4-0ff3-f900-d50c-cf2d3163766b",
        "mascotas": []
      },
      "tratamientos": []
    },
    {
      "id": 10,
      "nombre": "Buddy",
      "raza": "Pomerania",
      "edad": 4,
      "peso": 21.1,
      "enfermedad": "Gastritis",
      "foto": "https://th.bing.com/th/id/OIP.LjVG6aHG4CmPFdouPU4rUQHaFk?rs=1&pid=ImgDetMain",
      "estado": "Inactivo",
      "cliente": {
        "id": 10000003,
        "cedula": "Luis Martinez",
        "nombre": "Luis Martinez",
        "correo": "luis.martinez@example.com",
        "celular": "3023456789",
        "foto": "https://ingenieria.javeriana.edu.co/documents/1569590/13146329/im-carlos-parra-2024.jpg/326b68e4-0ff3-f900-d50c-cf2d3163766b",
        "mascotas": []
      },
      "tratamientos": []
    }
  ];

  findAll(): Mascota[] {
    return this.mascotas;
  }

  findById(id: number): Mascota {
    return <Mascota>this.mascotas.find(mascota => mascota.id === id);
  }

  findByClienteId(id: number): Mascota[] {
    return this.mascotas.filter(mascota => mascota.cliente!.id === id);
  }
}
