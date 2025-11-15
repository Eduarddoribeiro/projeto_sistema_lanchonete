import { Produto } from "./Produto";

export class Sobremesa extends Produto {
    protected _tamanhoPorcao: string;
    protected _sabor: string;
    protected _vegano: boolean;

    constructor(
        nome: string,
        preco: number,
        categoria: string,
        descricao: string,
        id: number,
        disponivel: boolean,
        tamanhoPorcao: string,
        sabor: string,
        vegano: boolean
    ) {
        super(nome, preco, categoria, descricao, id, disponivel);
        this._sabor = sabor;
        this._tamanhoPorcao = tamanhoPorcao;
        this._vegano = vegano;
    }

    public get tamanhoPorcao() {
        return this._tamanhoPorcao;
    }

    public get vegano() {
        return this._vegano;
    }
    public get sabor() {
        return this._sabor;
    }

    public set tamanhoPorcao(tamanhoPorcao: string) {
        this._tamanhoPorcao = tamanhoPorcao;
    }
    public set vegano(vegano: boolean) {
        this._vegano = vegano;
    }
    public set sabor(sabor: string) {
        this._sabor = sabor;
    }

}