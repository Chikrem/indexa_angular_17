import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) {}

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API)

  }

  salvarContato(contato: Contato){
    return this.http.post<Contato>(this.API, contato)
  }

  buscarPorId(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`
    return this.http.get<Contato>(url)
  }

  excluirContato(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`
    return this.http.delete<Contato>(url)
  }

  editarContato(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`
    return this.http.put<Contato>(url, contato)
  }

  editarOuSalvarContato(contato: Contato): Observable<Contato> {
    if(contato.id) {
        return this.editarContato(contato)
    } else {
        return this.salvarContato(contato)
    }
  }
}










// private contatos: Contato[] = [
//   {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "a@email.com"},
//   {"id": 2, "nome": "Ágata", "telefone": "38 128451235", "email": "a@email.com"},
//   {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "a@email.com"},
//   {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email": "a@email.com"},
//   {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email": "a@email.com"},
//   {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email": "a@email.com"},
// ]

// constructor() {
//   //Tentar obter os dados do localStorage
//   const contatosLocalStorageString = localStorage.getItem('contatos');
//   const contatosLocalStorage =
//     contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
//     if (contatosLocalStorage !== null) {
//       this.contatos = contatosLocalStorage || null;
//     }

//   //Salvar os contatos no localStorage
//   localStorage.setItem('contatos', JSON.stringify(this.contatos));
// }

// obterContatos() {
//   return this.contatos;
// }

// salvarContato(contato: Contato){
//   this.contatos.push(contato);
//   localStorage.setItem('contatos', JSON.stringify(this.contatos))
// }

// }
