import { Component, OnInit } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})

export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    id: 0,
    nome: '',
    avatar: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router

  ){}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
        this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
            this.contato = contato;
        })
    }
}

  excluir(){
    if(this.contato.id){
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos')
      })
    }
  }

}
