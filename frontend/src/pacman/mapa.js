import Aluno from "./Aluno.js"
export default class Mapa {
    constructor(tamanho) {
        this.tamanho = tamanho
        this.byte = new Image(32, 32);
        this.byte.src = "/yellowDot.png"

        this.parede = new Image(32, 32);
        this.parede.src = "/wall.png"
    }



    // 1 é parede, 0 é pontos, 5 o aluno
    mapaDoNivel = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

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
                }

                // //Linhas para ver cada quadrado desenhado
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
                    return new Aluno(coluna * this.tamanho, linha * this.tamanho, this.tamanho, velocidade, espaço);
                }

            }
        }
    }
}