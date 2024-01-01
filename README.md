# Projeto de Loteria

---

Este projeto é uma simulação de um bolão da Mega Sena, onde várias pessoas participam, escolhendo seus números. Após definir os números jogados por cada participante, o programa realiza um sorteio para determinar os números vencedores. Com base nos números sorteados, é possível verificar quantos acertos cada jogador teve e se algum jogador acertou os números necessários para ganhar o prêmio.

## Funcionalidades:

Jogadores e Números Escolhidos: O código define jogadores e seus números escolhidos para participar do bolão.

Configuração do Bolão: Configurações como a quantidade de cotas, valor por cota e valor do prêmio são definidos.

Sorteio: Um sorteio é realizado com números pré-definidos.
Verificação de Acertos: Após o sorteio, o programa verifica quantos números cada jogador acertou e se algum jogador ganhou o prêmio.

## Como Executar

- Certifique-se de ter o Node.js instalado em seu ambiente.
- Clone este repositório em sua máquina local.
- Navegue até o diretório do projeto no terminal.
- Execute o comando `pnpm install` ou `npm install` para instalar as dependências.
- Execute o comando `npm start`

Exemplo de Resultado
Após a execução do programa, será gerada uma saída no console mostrando os acertos de cada jogador, como o exemplo abaixo:

```json

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
```







