import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from './componentes/container/container.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';
import { MensagemErroComponent } from './componentes/mensagem-erro/mensagem-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContainerComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent,
    ListaContatosComponent,
    PerfilContatoComponent,
    MensagemErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
