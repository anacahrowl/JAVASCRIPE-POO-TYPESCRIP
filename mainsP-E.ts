import { ProdutoEletronico } from "./src/produtoEletronico";
 
let produtoEletronico = new ProdutoEletronico();


produtoEletronico.nome = 'Carregador';
produtoEletronico.empresa = 'Samsung';
produtoEletronico.preco = 80;


console.log(`Produto: ${produtoEletronico.nome}`);
console.log(`Empresa: ${produtoEletronico.empresa}`);
console.log(`Preço: ${produtoEletronico.preco}`);
