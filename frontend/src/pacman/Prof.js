import Mapa from "./mapa";
import Movimento from "./movimento";

export default class Prof {
    constructor(x, y, tamanho, velocidade, espaço, mapa, id) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.mapa = mapa;
        this.id = id

        this.carregarImagens();

        this.movimento = Math.floor(Math.random() * Object.keys(Movimento).length);
        this.movimentoTemporizadorPadrao = this.random(1, 3)
        this.movimentoTemporizador = this.movimentoTemporizadorPadrao

        this.medoProfTemporizadorPadrao = 10;
        this.medoProfTemporizador = this.medoProfTemporizadorPadrao
    }


    draw(contexto, pause, aluno) {
        if (!pause) {
            this.move();
            this.mudançaDireçao()
        }
        this.setImage(contexto, aluno)
        contexto.drawImage(this.image, this.x, this.y, this.tamanho, this.tamanho);

    }
    colidiuCom(aluno) {
        const size = this.tamanho / 2;
        if (this.x < aluno.x + size && this.x + size > aluno.x && this.y < aluno.y + size && this.y + size > aluno.y) {
            return true
        }
        else {
            return false
        }
    }

    setImage(contexto, aluno) {

        if (aluno.boostActivo) {
            this.setImageBoostActivo(aluno)
        } else {
            if (this.id === 9) {
                this.image.src = this.normalProf.src
            }
            if (this.id === 8) {
                this.image.src = this.normalProf2.src
            }
            if (this.id === 4) {
                this.image.src = this.normalProf3.src
            }
        }
        contexto.drawImage(this.image, this.x, this.y, this.tamanho, this.tamanho)
    }

    setImageBoostActivo(aluno) {

        if (aluno.boostActivoAcabou) {
            this.medoProfTemporizador--;
            if (this.medoProfTemporizador === 0) {
                this.medoProfTemporizador = this.medoProfTemporizadorPadrao
                if (this.image.src === this.medoProf.src) {
                    this.image.src = this.medoProf2.src
                } else {
                    this.image.src = this.medoProf.src
                }
            }
        } else {

            this.image.src = this.medoProf.src
        }
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
        this.normalProf.src = "/Eloisa pixel avatar.png"

        this.normalProf2 = new Image()
        this.normalProf2.src = "/Fernando Pixel avatar.png"

        this.normalProf3 = new Image()
        this.normalProf3.src = "/Rafael Avatar.jpg"

        this.medoProf = new Image()
        this.medoProf.src = "/scaredGhost.png"

        this.medoProf2 = new Image()
        this.medoProf2.src = "/scaredGhost2.png"

        this.image = new Image()


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