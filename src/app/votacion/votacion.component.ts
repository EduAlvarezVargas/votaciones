import { Component } from '@angular/core';

interface Candidato {
  nombre: string;
  partido: string;
}

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent {
  partidos: { nombre: string; candidatos: Candidato[] }[] = [
    {
      nombre: 'Partido 1',
      candidatos: [
        { nombre: 'Candidato A', partido: 'Partido 1' },
        { nombre: 'Candidato B', partido: 'Partido 1' }
      ]
    },
    {
      nombre: 'Partido 2',
      candidatos: [
        { nombre: 'Candidato C', partido: 'Partido 2' },
        { nombre: 'Candidato D', partido: 'Partido 2' }
      ]
    }
  ];

  votoSeleccionado: string | null = null;

  registrarVoto() {
    if (this.votoSeleccionado) {
      console.log(`Voto registrado para: ${this.votoSeleccionado}`);
      alert(`Gracias por votar por: ${this.votoSeleccionado}`);
    } else {
      alert('Por favor, selecciona un candidato.');
    }
  }
}