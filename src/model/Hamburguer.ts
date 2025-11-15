import { Produto } from "./Produto";

export class Hamburguer extends Produto {
    protected _tipoCarne: string;
    protected _pesoCarne: string;
    protected _artesanal: boolean;

    constructor(
        nome: string,
        preco: number,
        categoria: string,
        descricao: string,
        id: number,
        disponivel: boolean,
        tipoCarne: string,
        pesoCarne: string,
        artesanal: boolean
    ) {
        super(nome, preco, categoria, descricao, id, disponivel);
        this._tipoCarne = tipoCarne;
        this._pesoCarne = pesoCarne;
        this._artesanal = artesanal;

    }

    public get tipoCarne() {
        return this._tipoCarne;
    }
    public get pesoCarne() {
        return this._pesoCarne;
    }
    public get artesanal() {
        return this._artesanal;
    }

    public set tipoCarne(tipoCarne: string) {
        this._tipoCarne = tipoCarne;
    }
    public set pesoCarne(pesoCarne: string) {
        this._pesoCarne = pesoCarne;
    }
    public set artesanal(artesanal: boolean) {
        this._artesanal = artesanal;
    }
}