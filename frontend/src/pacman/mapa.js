import Aluno from "./Aluno.js"
import Prof from "./Prof.js"
import Movimento from "./movimento.js";


export default class Mapa {
    constructor(tamanho, mapaDoNivel) {
        console.log(mapaDoNivel)
        this.mapaDoNivel = mapaDoNivel
        this.tamanho = tamanho
        this.byte = new Image(32, 32);
        this.byte.src = "/0.png"



        this.parede = new Image(32, 32);
        this.parede.src = "/wall.png"

        this.code = new Image()
        this.code.src = "/1.png"

        this.boost = this.code

        this.boostTemporizadorPadrao = 20;
        this.boostTemporizador = this.boostTemporizadorPadrao
    }



    // 1 é parede, 0 é pontos, 5 o aluno, 3 é vazio, 9 prof, 7 boost
    // mapaDoNivel = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    // ]
    // mapaDoNivel2 = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //]

    draw(contexto) {
        let linha = 0
        let coluna = 0
        let espaço

        for (linha = 0; linha < this.mapaDoNivel.length; linha++) {
            for (coluna = 0; coluna < this.mapaDoNivel[linha].length; coluna++) {
                espaço = this.mapaDoNivel[linha][coluna]
                if (espaço === 1) {
                    this.desenharParede(contexto, linha, coluna, this.tamanho)
                } else if (espaço === 0) {
                    this.desenharByte(contexto, linha, coluna, this.tamanho)
                } else if (espaço === 7) {
                    this.desenharBoost(contexto, linha, coluna, this.tamanho)
                }
                else {
                    this.desenharVazio(contexto, coluna, linha, this.tamanho)
                }

                // Linhas para ver cada quadrado desenhado
                // contexto.strokeStyle = "yellow"
                // contexto.strokeRect(coluna * this.tamanho, linha * this.tamanho, this.tamanho, this.tamanho)

            }
        }

    }
    desenharParede(contexto, linha, coluna, size) {
        contexto.drawImage(this.parede, coluna * this.tamanho, linha * this.tamanho, size, size)

    }
    desenharByte(contexto, linha, coluna, size) {
        contexto.drawImage(this.byte, coluna * this.tamanho, linha * this.tamanho, size, size)
    }

    desenharVazio(contexto, coluna, linha, size) {
        contexto.fillStyle = "black";
        contexto.fillRect(coluna * this.tamanho, linha * this.tamanho, size, size)
    }

    desenharBoost(contexto, linha, coluna, tamanho) {
        this.boostTemporizador--;
        if (this.boostTemporizador === 0) {
            this.boostTemporizador = this.boostTemporizadorPadrao;
            if (this.boost === this.code) {
                this.boost = this.byte
            } else {
                this.boost = this.code
            }
        }
        contexto.drawImage(this.boost, coluna * this.tamanho, linha * this.tamanho, tamanho, tamanho)
    }



    //Consoante o tamanho do mapa do nivel, o canvas muda de tamanho
    setCanvasTamanho(canvas) {
        canvas.width = this.mapaDoNivel[0].length * this.tamanho;
        canvas.height = this.mapaDoNivel.length * this.tamanho

    }

    getAluno(velocidade) {
        let linha = 0
        let coluna = 0
        let espaço
        for (linha = 0; linha < this.mapaDoNivel.length; linha++) {
            for (coluna = 0; coluna < this.mapaDoNivel[linha].length; coluna++) {
                espaço = this.mapaDoNivel[linha][coluna]
                if (espaço === 5) {
                    this.mapaDoNivel[linha][coluna] = 0
                    return new Aluno(coluna * this.tamanho, linha * this.tamanho, this.tamanho, velocidade, espaço, this);
                }

            }
        }
    }
    getProfs(velocidade) {
        const profs = [];

        let linha = 0
        let coluna = 0
        let espaço;
        for (linha = 0; linha < this.mapaDoNivel.length; linha++) {
            for (coluna = 0; coluna < this.mapaDoNivel[linha].length; coluna++) {
                espaço = this.mapaDoNivel[linha][coluna];
                if (espaço === 9) {
                    this.mapaDoNivel[linha][coluna] = 0;
                    profs.push(new Prof(coluna * this.tamanho, linha * this.tamanho, this.tamanho, velocidade, espaço, this))
                }
            }
        }
        return profs;
    }

    verificarColisao(x, y, direçao) {
        if (direçao == null) {
            return
        }

        if (Number.isInteger(x / this.tamanho) && Number.isInteger(y / this.tamanho)) {
            let linha = 0;
            let coluna = 0;
            let proximaLinha = 0;
            let proximaColuna = 0;

            switch (direçao) {
                case Movimento.drt:
                    proximaColuna = x + this.tamanho;
                    coluna = proximaColuna / this.tamanho;
                    linha = y / this.tamanho
                    break;
                case Movimento.esq:
                    proximaColuna = x - this.tamanho;
                    coluna = proximaColuna / this.tamanho;
                    linha = y / this.tamanho
                    break;
                case Movimento.cima:
                    proximaLinha = y - this.tamanho;
                    linha = proximaLinha / this.tamanho;
                    coluna = x / this.tamanho
                    break;
                case Movimento.baixo:
                    proximaLinha = y + this.tamanho;
                    linha = proximaLinha / this.tamanho;
                    coluna = x / this.tamanho
                    break;
            }
            const espaço = this.mapaDoNivel[linha][coluna];

            if (espaço === 1) {
                return true
            }
        }
        return false;
    }
    ganhou() {
        return this.pontosFaltar() === 0;
    }

    pontosFaltar() {
        return this.mapaDoNivel.flat().filter(w => w === 0).length
    }

    apanharPonto(x, y) {
        const linha = y / this.tamanho;
        const coluna = x / this.tamanho;

        if (Number.isInteger(linha) && Number.isInteger(coluna)) {
            if (this.mapaDoNivel[linha][coluna] === 0) {
                this.mapaDoNivel[linha][coluna] = 3
                return true;

            }
        }
        return false;
    }

    apanharBatata(x, y) {
        const linha = y / this.tamanho;
        const coluna = x / this.tamanho;
        if (Number.isInteger(linha) && Number.isInteger(coluna)) {
            if (this.mapaDoNivel[linha][coluna] === 7) {
                this.mapaDoNivel[linha][coluna] = 3
                return true
            }
        }
        return false
    }
}