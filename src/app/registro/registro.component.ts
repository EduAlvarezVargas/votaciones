import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  rut: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  profile: string = '';
  
  get passwordMismatch() {
    return this.password !== this.confirmPassword;
  }

  onSubmit() {
    if (this.passwordMismatch) {
      alert('Las contraseñas no coinciden.'); // Puedes manejar el error de otra manera
      return;
    }
    // Aquí puedes manejar la lógica de registro
    console.log('Nombre:', this.name);
    console.log('RUT:', this.rut);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Perfil:', this.profile);
  }
}