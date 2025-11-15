export abstract class Produto {
    protected _nome: string;
    protected _preco: number;
    protected _categoria: string;
    protected _descricao: string;
    protected _id: number;
    protected _disponivel: boolean;

    constructor(
        nome: string,
        preco: number,
        categoria: string,
        descricao: string,
        id: number,
        disponivel: boolean
    ) {
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
        this._descricao = descricao;
        this._id = id;
        this._disponivel = disponivel;

    }

    //Métodos get

    public get nome () {
        return this._nome;
    } 
}