const uuid = (id?: string) => {
    if (id) return id;
    const chars = 'qwertyuiopasdfghjklzxcvbnm';
    let uid = '';
    while (uid.length < 9) {
        const index = Math.trunc(Math.random() * chars.length);
        uid = uid + chars[index]
    };
    return uid;
}

type Props = {
    limiteNumeros?: number;
    nomeCotista?: string;
    numerosMarcados?: number[];
    cotistaPagou?: boolean;
}

export default class MegaSena {
    private readonly id: string;
    private readonly numerosMarcados: number[] = [];
    private limiteNumeros: number = 6;
    private nomeCotista: string = 'Anônimo';
    private cotistaPagou: boolean = true;
    private acertos: number[] = [];

    constructor(props?: Props) {
        this.id = uuid();
        this.limiteNumeros = props?.limiteNumeros ?? 6;
        this.nomeCotista = props?.nomeCotista ?? 'Anônimo';
        this.numerosMarcados = props?.numerosMarcados ?? [];
        this.cotistaPagou = props?.cotistaPagou ?? false;
        this.acertos = [];
        this.numerosMarcados = this.numerosMarcados.filter((n, i, arr) => i === arr.indexOf(n));
        if (this.numerosMarcados.length < 6) throw new Error('Qtd. números marcados devem ser maior que 5')
        if (this.numerosMarcados.length > this.limiteNumeros) throw new Error('Qtd. números marcados excedem o limite.');
    }

    private numeroValido(numero: number): boolean {
        return numero > 0 && numero <= 60;
    }

    private podeMarcarMaisUm(): boolean {
        return this.numerosMarcados.length < this.limiteNumeros;
    }

    public marcarNumero(numero: number): MegaSena {
        if(this.numerosMarcados.includes(numero)) throw new Error(`${numero} já foi marcado.`);
        if (!this.numeroValido(numero)) throw new Error(`${numero} é um número inválido`);
        if (!this.podeMarcarMaisUm()) throw new Error('a quantidade máxima de números excedida');
        this.numerosMarcados.push(numero);
        return this;
    }

    public marcarNumeros(numeros: number[]): MegaSena {
        numeros.map(this.marcarNumero);
        return this;
    }

    public definirCotista(nomeCotista: string): MegaSena {
        this.nomeCotista = nomeCotista;
        return this;
    }

    public cotista(): string {
        return this.nomeCotista;
    }

    public marcarComoPago(): MegaSena {
        this.cotistaPagou = true;
        return this;
    }

    public marcarPendente(): MegaSena {
        this.cotistaPagou = false;
        return this;
    }

    public foiPago(): boolean {
        return this.cotistaPagou;
    }

    public conferir(resultado: number[]): MegaSena {
        this.acertos = [];
        resultado.forEach((n) => {
            const acertou = this.numerosMarcados.includes(n);
            if (acertou) this.acertos.push(n);
        });
        return this;
    }

    public jogoFoiPremiado(): boolean {
        return this.acertos.length >= 4;
    }

    public marcados(): number[] {
        return this.numerosMarcados;
    }

    public acertados(): number[] {
        return this.acertos;
    }

    public uid(): string {
        return this.id;
    }
}
