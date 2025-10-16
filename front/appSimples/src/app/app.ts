import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Usuario {
  id?: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private http = inject(HttpClient);

  title = () => 'Angular';

  usuario: Usuario = { nome: '', idade: 0 };
  usuarios: Usuario[] = [];

  constructor() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.http.get<Usuario[]>('http://localhost:8080/usuarios')
      .subscribe(res => this.usuarios = res);
  }

  onSubmit() {
    this.http.post<Usuario>('http://localhost:8080/usuarios', this.usuario)
      .subscribe(res => {
        alert('Usuário adicionado!');
        this.usuarios.push(res);
        this.usuario = { nome: '', idade: 0 };
      });
  }
}
