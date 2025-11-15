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
    public get preco () {
        return this._preco;
    }
    public get categoria () {
        return this._categoria;
    }
    public get descricao () {
        return this._descricao;
    }
    public get id () {
        return this._id;
    }
    public get disponivel () {
        return this._disponivel;
    }

    //Métodos Set
    public set nome(nome: string) {
        this._nome = nome;
    }
    public set preco(preco: number) {
        this._preco = preco;
    }
    public set categoria(categoria: string) {
        this._categoria = categoria;
    }
    public set descricao(descricao: string) {
        this._descricao = descricao;
    }
    public set id(id: number) {
        this._id = id;
    }
    public set disponivel(disponivel: boolean) {
        this._disponivel = disponivel;
    }
}