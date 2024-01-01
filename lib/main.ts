import Loteria from "./loteria";
import MegaSena from "./mega-sena";

const bolao = new Loteria();

const jogo1 = new MegaSena({
    limiteNumeros: 7,
    nomeCotista: 'Mile',
    numerosMarcados: [6, 10, 18, 23, 26, 32, 48]
});

const jogo2 = new MegaSena({
    limiteNumeros: 7,
    nomeCotista: 'Bel.',
    numerosMarcados: [13, 18, 35, 55, 57, 58, 9]
});

const jogo3 = new MegaSena({
    limiteNumeros: 7,
    nomeCotista: 'Ale',
    numerosMarcados: [3, 10, 30, 33, 42, 44, 56]
});

bolao.definirQtdCotas(3); // opcional
bolao.definirValorPorCota(35.0); // opcional
bolao.definirValorPremio(570000000) // opcional

bolao.addJogos([jogo1, jogo2, jogo3]);

// resultado do sorteio
const nSorteados = [21, 24, 33, 41, 48, 56];

bolao.sortear(nSorteados);

const resultado = bolao.listarAcertos();
console.log(JSON.stringify(resultado, null, 4));

/**
{
    "awndfyqdh": {
        "numerosDoJogo": "6,10,18,23,26,32,48",
        "quantidadeAcertos": 1,
        "numerosMarcados": "48",
        "cotista": "Mile",
        "premiado": false
    },
    "zmdvprjla": {
        "numerosDoJogo": "13,18,35,55,57,58,9",
        "quantidadeAcertos": 0,
        "numerosMarcados": "",
        "cotista": "Bel.",
        "premiado": false
    }
    ...
}
 */
