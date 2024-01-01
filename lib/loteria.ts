import MegaSena from "./mega-sena";

export default class Loteria {

    private jogos: MegaSena[] = [];
    private qtdCotas: number = 1;
    private valorPorCota: number = 0;
    private premioEstimado: number = 0;

    constructor() { }

    private format(total: number): string {
        return Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(total);
    }

    public addJogo(jogo: MegaSena): Loteria {
        this.jogos.push(jogo);
        return this;
    }

    public addJogos(jogos: MegaSena[]): Loteria {
        this.jogos = this.jogos.concat(jogos);
        return this;
    }

    public definirQtdCotas(quantidade: number): Loteria {
        this.qtdCotas = quantidade;
        return this;
    }

    public sortear(sorteio: number[]): Loteria {
        this.jogos = this.jogos.map((jogo) => jogo.conferir(sorteio));
        return this;
    }

    public definirValorPorCota(valor: number): Loteria {
        this.valorPorCota = valor;
        return this;
    }

    public calcularCustoTotalCotas(): string {
        const total = this.qtdCotas * this.valorPorCota;
        return this.format(total);
    }

    public definirValorPremio(valor: number): Loteria {
        this.premioEstimado = valor;
        return this;
    }

    public ratearPremio() {
        const premioPorCota = this.premioEstimado / this.qtdCotas;
        const valor = this.format(premioPorCota);
        let tabela = {};
        let i = 0;
        while (this.jogos[i]) {
            const jogo = this.jogos[i];
            const cotista = jogo.cotista();
            tabela = { ...tabela, [jogo.uid()]: { cotista, valor } }
            i++;
        }
        return tabela
    }

    public listarAcertos() {
        let tabela = {};
        let i = 0;
        while (this.jogos[i]) {
            const jogo = this.jogos[i];
            tabela = {
                ...tabela,
                [jogo.uid()]: {
                    numerosDoJogo: jogo.marcados().toString(),
                    quantidadeAcertos: jogo.acertados().length,
                    numerosMarcados: jogo.acertados().toString(),
                    cotista: jogo.cotista(),
                    premiado: jogo.jogoFoiPremiado(),
                }
            }
            i++;
        }
        return tabela
    }
}
