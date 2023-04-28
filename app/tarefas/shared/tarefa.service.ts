import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * Listar todas as tarefas
   * @returns lista de tarefas
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Cadastrar uma tarefa
   * @param tarefa objeto tarefa a ser cadastrado
   * @returns id da tarefa cadastrada
   */
  cadastrar(tarefa: Tarefa): number {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
    return tarefa.id;
  }

  /**
   * Buscar a tarefa por ID
   * @param id id da tarefa
   * @returns retorna um objeto tarefa
   */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(Tarefa => Tarefa.id === id);
  }

  /**
   * Atualizar tarefa
   * @param tarefa objeto tarefa
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Remover uma tarefa passando o id.
   * @param id da tarefa
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Altera o status de uma tarefa.
   * @param id da tarefa
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
