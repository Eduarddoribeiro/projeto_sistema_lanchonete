import * as readlineSync from "readline-sync";

export function main() {
    let opcao: number;

    do {
        console.log("=== Menu Lanchonete ===");
        console.log("1. Adicionar Hamburguer");
        console.log("2. Adicionar Bebida");
        console.log("3. Adicionar Sobremesa");
        console.log("4. Ver Pedido");
        console.log("0. Sair");

        opcao = readlineSync.questionInt("Escolha uma opcao: ");

        switch(opcao) {
            case 1:
                const nomeHamburguer = readlineSync.question("Nome do Hamburguer: ");
                const precoHamburguer = readlineSync.questionFloat("Preco: ");
                console.log(`Hamburguer ${nomeHamburguer} - R$${precoHamburguer.toFixed(2)} adicionado!`);
                break;

            case 2:
                const nomeBebida = readlineSync.question("Nome da Bebida: ");
                const precoBebida = readlineSync.questionFloat("Preco: ");
                console.log(`Bebida ${nomeBebida} - R$${precoBebida.toFixed(2)} adicionada!`);
                break;

            case 3:
                const nomeSobremesa = readlineSync.question("Nome da Sobremesa: ");
                const precoSobremesa = readlineSync.questionFloat("Preco: ");
                console.log(`Sobremesa ${nomeSobremesa} - R$${precoSobremesa.toFixed(2)} adicionada!`);
                break;

            case 4:
                console.log("Exibir pedido (em desenvolvimento)...");
                break;

            case 0:
                console.log("Obrigado pela visita!");
                break;

            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);

 
}
main();
