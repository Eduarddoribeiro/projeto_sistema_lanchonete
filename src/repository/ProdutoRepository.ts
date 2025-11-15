import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    listarTodos(): Produto[];

    buscarPorId(id: number): Produto | null;

    cadastrar(produto: Produto): void;

    atualizar(id: number, produto: Produto): boolean;

    deletar(id: number): boolean;
}
