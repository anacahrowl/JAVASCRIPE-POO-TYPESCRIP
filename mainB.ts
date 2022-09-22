import { ContaBanco } from "./src/contaBanco"  

let contabanco1 = new ContaBanco("Carolina Tavares","001-9","5002-50",100.00);




contabanco1.deposito(200);

contabanco1.verSaldo();

contabanco1.sacar(300);

contabanco1.verSaldo();