import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos
    })
  }
}
