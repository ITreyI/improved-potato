import Movimento from "./movimento";

export default class Prof {
    constructor(x, y, tamanho, velocidade, espaço, mapa) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.mapa = mapa;

        this.carregarImagens();

        this.movimento = Math.floor(Math.random() * Object.keys(Movimento).length);
        this.movimentoTemporizadorPadrao = this.random(1, 3)
        this.movimentoTemporizador = this.movimentoTemporizadorPadrao
    }


    draw(contexto, pause) {
        if (!pause) {
            this.move();
            this.mudançaDireçao()
        }
        contexto.drawImage(this.image, this.x, this.y, this.tamanho, this.tamanho);

    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    move() {

        if (!this.mapa.verificarColisao(this.x, this.y, this.movimento)) {
            switch (this.movimento) {
                case Movimento.cima:
                    this.y -= this.velocidade;
                    //this.alunoRotaçaoNormal = this.Rotaçao.cima

                    break;
                case Movimento.baixo:
                    //this.alunoRotaçaoNormal = this.Rotaçao.baixo
                    this.y += this.velocidade;

                    break;
                case Movimento.esq:
                    //this.alunoRotaçaoNormal = this.Rotaçao.esq
                    this.x -= this.velocidade

                    break;
                case Movimento.drt:
                    //this.alunoRotaçaoNormal = this.Rotaçao.drt
                    this.x += this.velocidade

                    break;

            }
        }
    }

    carregarImagens() {
        this.normalProf = new Image()
        this.normalProf.src = "/ghost.png"

        this.medoProf = new Image()
        this.medoProf.src = "/scaredGhost.png"

        this.medoProf2 = new Image()
        this.medoProf2.src = "/scaredGhost2.png"

        this.image = this.normalProf

    }

    mudançaDireçao() {
        let novaDireçao = null
        this.movimentoTemporizador--;
        if (this.movimentoTemporizador === 0) {
            this.movimentoTemporizador = this.movimentoTemporizadorPadrao;
            novaDireçao = Math.floor(Math.random() * Object.keys(Movimento).length)
        }

        if (novaDireçao !== null && this.movimento !== novaDireçao) {
            if (Number.isInteger(this.x / this.tamanho) && Number.isInteger(this.y / this.tamanho)) {
                if (!this.mapa.verificarColisao(this.x, this.y, novaDireçao)) {
                    this.movimento = novaDireçao

                }
            }
        }

    }
}