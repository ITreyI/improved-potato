import Movimento from "./movimento";

export default class Aluno {
    constructor(x, y, tamanho, velocidade, espaço) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.carregarImagem();

        this.agoraMovimento = null
        this.pedirMovimento = null

        document.addEventListener("keydown", this.teclaPressionada)
    }

    draw(contexto) {
        this.mexe();
        contexto.drawImage(this.alunoImagens[this.alunoImagensIndex], this.x, this.y, this.tamanho, this.tamanho)

    }

    carregarImagem() {
        const alunoImagem1 = new Image();
        alunoImagem1.src = '/pac0.png'

        const alunoImagem2 = new Image();
        alunoImagem2.src = '/pac1.png'

        const alunoImagem3 = new Image();
        alunoImagem3.src = '/pac2.png'

        const alunoImagem4 = new Image();
        alunoImagem4.src = '/pac1.png'

        this.alunoImagens = [alunoImagem1, alunoImagem2, alunoImagem3, alunoImagem4];
        this.alunoImagensIndex = 1
    }

    teclaPressionada = (e) => {
        console.log(e.keyCode)

        if (e.keyCode === 38 || e.keyCode === 87) {
            if (this.agoraMovimento === Movimento.baixo) {
                this.agoraMovimento = Movimento.cima
            }
            this.pedirMovimento = Movimento.cima

        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            if (this.agoraMovimento === Movimento.cima) {
                this.agoraMovimento = Movimento.baixo
            }
            this.pedirMovimento = Movimento.baixo

        }
        if (e.keyCode === 37 || e.keyCode === 65) {
            if (this.agoraMovimento === Movimento.drt) {
                this.agoraMovimento = Movimento.esq
            }
            this.pedirMovimento = Movimento.esq
        }
        if (e.keyCode === 39 || e.keyCode === 68) {
            if (this.agoraMovimento === Movimento.esq) {
                this.agoraMovimento = Movimento.drt
            }
            this.pedirMovimento = Movimento.drt
        }

    }

    mexe() {
        if (this.agoraMovimento !== this.pedirMovimento) {
            if (Number.isInteger(this.x / this.tamanho) && Number.isInteger(this.y / this.tamanho)) {
                this.agoraMovimento = this.pedirMovimento
            }
        }
        switch (this.agoraMovimento) {
            case Movimento.cima:
                this.y -= this.velocidade;
                break;
            case Movimento.baixo:
                this.y += this.velocidade;
                break;
            case Movimento.esq:
                this.x -= this.velocidade
                break;
            case Movimento.drt:
                this.x += this.velocidade
        }

    }

}
