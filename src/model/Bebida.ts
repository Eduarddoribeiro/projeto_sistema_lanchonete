import { Produto } from "./Produto";


export class Bebida extends Produto {
    protected _tamanho: number;

    constructor(
        nome: string,
        preco: number,
        categoria: string,
        descricao: string,
        id: number,
        disponivel: boolean,
        tamanho: number
    ) {
        super(nome, preco, categoria, descricao, id, disponivel);
        this._tamanho = tamanho;
    }

    public get tamanho() {
        return this._tamanho;
    }
    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }

}