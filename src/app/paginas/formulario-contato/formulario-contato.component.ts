import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router){}

  ngOnInit(): void {
    this.inicializarFormulario()
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
    this.contatoForm.reset;
    this.router.navigateByUrl('/lista-contatos')
  }

  // salvarContato() {
  //   if (this.contatoForm.valid) {
  //     console.log("Formulário válido, valores:", this.contatoForm.value);
  //   } else {
  //     console.log("Formulário inválido!");
  //   }
  // }

  cancelar() {
    console.log("Formulário cancelado!");
    this.contatoForm.reset;
  }


}

