import Loteria from "./loteria";
import MegaSena from "./mega-sena";

const bolao = new Loteria();

const jogos = [
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Mile',
        numerosMarcados: [6, 10, 18, 23, 26, 32, 48]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Bel.',
        numerosMarcados: [13, 18, 35, 55, 57, 58, 9]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Bel.',
        numerosMarcados: [25, 29, 33, 37, 41, 45, 13]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Gali.',
        numerosMarcados: [3, 24, 29, 30, 40, 42, 44]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Rosa.',
        numerosMarcados: [7, 8, 21, 28, 49, 51, 55]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'M. Rosa.',
        numerosMarcados: [5, 7, 9, 17, 24, 25, 35]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'M. Rosa.',
        numerosMarcados: [1, 13, 14, 21, 38, 46, 50]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Gal',
        numerosMarcados: [5, 2, 12, 20, 24, 36, 28]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Jaq.',
        numerosMarcados: [2, 7, 18, 20, 39, 55, 59]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Jes.',
        numerosMarcados: [1, 6, 17, 22, 24, 35, 55]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Ale',
        numerosMarcados: [3, 10, 30, 33, 42, 44, 56]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Denis',
        numerosMarcados: [14, 19, 21, 29, 32, 35, 42]
    }),
    new MegaSena({
        cotistaPagou: true,
        limiteNumeros: 7,
        nomeCotista: 'Rafa',
        numerosMarcados: [2, 6, 12, 15, 23, 48, 55]
    })
];

bolao.definirQtdCotas(13.0);
bolao.definirValorPorCota(35.0);
bolao.definirValorPremio(570000000)

bolao.addJogos(jogos);

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
