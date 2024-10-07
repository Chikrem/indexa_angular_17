import { Component, OnDestroy, OnInit } from '@angular/core';
import agenda from '../../agenda.json'
import { ContatoService } from './../../services/contato.service';

interface Contato{
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})

export class ListaContatosComponent implements OnInit{

    alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Corrige o tipo de alfabeto para array de strings

    // contatos: Contato[] = agenda;
    contatos: Contato[] = [];

    filtroPorTexto: string = '';

    constructor( private contatoService: ContatoService){

    }

    ngOnInit(): void {
      this.contatos = this.contatoService.obterContatos()
    }

    // Remove os acentos de uma string
    private removerAcentos(texto: string): string {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    filtrarContatosPorTexto(): Contato[] {
      if (!this.filtroPorTexto) {
        return this.contatos;
      }
      return this.contatos.filter(contato => {
        // Compara os nomes sem acentuações
        return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
      });
    }

    filtrarContatosPorLetraInicial(letra: string): Contato[] {
      return this.filtrarContatosPorTexto().filter(contato => {
        // Compara a letra inicial sem considerar acentuações
        return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
      });
    }

    // TrackBy para as letras do alfabeto
    trackByLetra(index: number, letra: string): string {
      return letra; // A letra já é única
    }

    // TrackBy para os contatos
    trackByContatoId(index: number, contato: Contato): number {
      return contato.id; // Cada contato deve ter um id único
    }

}
