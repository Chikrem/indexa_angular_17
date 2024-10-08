import { Component, Input } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {
  contato: Contato = {
    id: 3,
    nome: 'dev',
    telefone: '9999999999',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: 'aaaaaaaaaaa'
  }
}
