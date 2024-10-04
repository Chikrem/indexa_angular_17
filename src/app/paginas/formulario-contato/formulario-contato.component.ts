import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm: FormGroup;

  constructor() {
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
    console.log("Formulário válido, valores:", this.contatoForm.value);
}

// salvarContato() {
//   if (this.contatoForm.valid) {
//     console.log("Formulário válido, valores:", this.contatoForm.value);
//   } else {
//     console.log("Formulário inválido!");
//   }
// }

  cancelar(){
    console.log("Formulário cancelado!");
  }


}

