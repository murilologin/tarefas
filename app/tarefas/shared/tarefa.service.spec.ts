import { TestBed, inject } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';


describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve cadastrar uma tarefa',
  inject([TarefaService], (service: TarefaService) => {
    const tarefa = new Tarefa();
    const cadastrar = service.cadastrar(tarefa);
    expect(cadastrar).not.toBeNull();
  }));

});
