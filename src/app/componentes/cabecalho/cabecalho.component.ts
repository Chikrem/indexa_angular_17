import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent {
    @Input() titulo: string = '';
    @Input() bannerSrc: string = '';
    @Input() telaInicial: boolean = false;
}


