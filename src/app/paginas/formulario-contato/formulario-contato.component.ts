import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.inicializarFormulario(),
    this.carregarContato()
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  // Caso editarmos, temos que buscar o id e carregar as informações desse contato dentro do formulário.

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
        this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
            this.contatoForm.patchValue(contato)
        });
    }

  // No Angular, o método patchValue é uma ferramenta poderosa em formulários reativos, permitindo a atualização parcial dos valores dos campos sem afetar o estado geral do formulário. Na aula, utilizamos essa funcionalidade para tornar nossos formulários mais dinâmicos e responsivos.
  // O método patchValue foi utilizado para preencher ou atualizar apenas alguns campos específicos do formulário, mantendo os demais inalterados.

}

  // Modificando para subscriber no Observable

  salvarContato() {
    const novoContato = this.contatoForm.value;

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    novoContato.id = id ? parseInt(id) : null

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset;
      this.router.navigateByUrl('/lista-contatos')
    });
  }

  // salvarContato() {
  //   const novoContato = this.contatoForm.value;
  //   this.contatoService.salvarContato(novoContato);
  //   this.contatoForm.reset;
  //   this.router.navigateByUrl('/lista-contatos')
  // }

  // salvarContato() {
  //   if (this.contatoForm.valid) {
  //     console.log("Formulário válido, valores:", this.contatoForm.value);
  //   } else {
  //     console.log("Formulário inválido!");
  //   }
  // }

  cancelar() {
    console.log("Formulário cancelado!");
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos')
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0]
    if(file) {
        this.lerArquivo(file)
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.result) {
            this.contatoForm.get('avatar')?.setValue(reader.result)
        }
    }
    reader.readAsDataURL(file)
}
}

