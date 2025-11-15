import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController {

    private repository: ProdutoRepository;

    constructor(repository: ProdutoRepository) {

        this.repository = repository;
    }
}