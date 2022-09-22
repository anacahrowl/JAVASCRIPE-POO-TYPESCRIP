import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let cachorroUm= new Cachorro ("a", "b", "c", 1, "d", "e", "f", "g")
let cavaloUm= new Cavalo ("a", "b", "c", "d", "e", 1, "1", "g")
let preguicaUm = new Preguica ("a", "b", "c", "d", "e", "f", 1, "g")

cachorroUm.verCorrer ();
cachorroUm.verSom ();

cavaloUm.verCorrer ();
cavaloUm.verSom ();

preguicaUm.verCorrer ();
preguicaUm.verSom ();
preguicaUm.verTrabalho ();