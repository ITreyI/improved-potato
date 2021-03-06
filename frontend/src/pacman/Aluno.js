import Movimento from "./movimento";
import { useState } from "react";


export default class Aluno {
    constructor(x, y, tamanho, velocidade, espaço, mapa) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.mapa = mapa;
        this.carregarImagem();

        this.agoraMovimento = null
        this.pedirMovimento = null

        this.movimentoTempo = 10;
        this.movimentoContador = null;

        this.grabSound = new Audio('/code.wav')
        this.boostSound = new Audio('/pegar.wav')
        this.pegarProfsSound = new Audio('/comer.wav')

        this.boostActivo = false;
        this.boostActivoAcabou = false;
        this.temporizador = [];

        this.primeiroMovimento = false;



        this.alunoRotaçaoNormal = this.Rotaçao.drt
        this.score = 0


        document.addEventListener("keydown", this.teclaPressionada)
    }
    Rotaçao = {
        drt: 0,
        baixo: 1,
        esq: 2,
        cima: 3
    }

    draw(contexto, pause, profs) {
        if (!pause) {
            this.mexe();
            this.animaçao();
        }

        this.apanhar();
        this.apanharPoder();
        this.pegarProfs(profs);

        const size = this.tamanho / 2
        //faz a imagem rodar
        // contexto.save();
        // contexto.translate(this.x + size, this.y + size);
        // contexto.rotate((this.alunoRotaçaoNormal * 90 * Math.PI / 180))
        // contexto.drawImage(this.alunoImagens[this.alunoImagensIndex], -size, -size, this.tamanho, this.tamanho)

        // contexto.restore();
        //poe a imagem no sitio x e y com o tamanho no x e com o tamanho no y
        contexto.drawImage(this.alunoImagens[this.alunoImagensIndex], this.x, this.y, this.tamanho, this.tamanho)


    }

    carregarImagem() {
        const alunoImagem1 = new Image();
        alunoImagem1.src = '/coin1.png'

        const alunoImagem2 = new Image();
        alunoImagem2.src = '/coin.png'

        const alunoImagem3 = new Image();
        alunoImagem3.src = '/coin1.png'

        const alunoImagem4 = new Image();
        alunoImagem4.src = '/coin.png'

        this.alunoImagens = [alunoImagem1, alunoImagem2, alunoImagem3, alunoImagem4];
        this.alunoImagensIndex = 1
    }

    teclaPressionada = (e) => {


        if (e.keyCode === 38 || e.keyCode === 87) {
            if (this.agoraMovimento === Movimento.baixo) {
                this.agoraMovimento = Movimento.cima
            }
            this.pedirMovimento = Movimento.cima
            this.primeiroMovimento = true;

        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            if (this.agoraMovimento === Movimento.cima) {
                this.agoraMovimento = Movimento.baixo
            }
            this.pedirMovimento = Movimento.baixo
            this.primeiroMovimento = true;

        }
        if (e.keyCode === 37 || e.keyCode === 65) {
            if (this.agoraMovimento === Movimento.drt) {
                this.agoraMovimento = Movimento.esq
            }
            this.pedirMovimento = Movimento.esq
            this.primeiroMovimento = true;
        }
        if (e.keyCode === 39 || e.keyCode === 68) {
            if (this.agoraMovimento === Movimento.esq) {
                this.agoraMovimento = Movimento.drt
            }
            this.pedirMovimento = Movimento.drt
            this.primeiroMovimento = true;
        }

    }

    mexe() {
        if (this.agoraMovimento !== this.pedirMovimento) {
            if (Number.isInteger(this.x / this.tamanho) && Number.isInteger(this.y / this.tamanho)) {
                if (!this.mapa.verificarColisao(this.x, this.y, this.pedirMovimento)) {
                    this.agoraMovimento = this.pedirMovimento

                }
            }
        }

        if (this.mapa.verificarColisao(this.x, this.y, this.agoraMovimento)) {
            this.movimentoContador = null;
            this.alunoImagensIndex = 1;
            return;
        }
        else if (this.agoraMovimento != null && this.movimentoContador == null) {
            this.movimentoContador = this.movimentoTempo;
        }
        switch (this.agoraMovimento) {
            case Movimento.cima:
                this.y -= this.velocidade;
                this.alunoRotaçaoNormal = this.Rotaçao.cima

                break;
            case Movimento.baixo:
                this.alunoRotaçaoNormal = this.Rotaçao.baixo
                this.y += this.velocidade;

                break;
            case Movimento.esq:
                this.alunoRotaçaoNormal = this.Rotaçao.esq
                this.x -= this.velocidade

                break;
            case Movimento.drt:
                this.alunoRotaçaoNormal = this.Rotaçao.drt
                this.x += this.velocidade

                break;
        }

    }

    animaçao() {
        if (this.movimentoContador == null) {
            return
        }
        this.movimentoContador--
        if (this.movimentoContador === 0) {
            this.movimentoContador = this.movimentoTempo
            this.alunoImagensIndex++
            if (this.alunoImagensIndex === this.alunoImagens.length) {
                this.alunoImagensIndex = 0;

            }
        }
    }
    apanhar() {
        if (this.mapa.apanharPonto(this.x, this.y)) {
            this.grabSound.play();
            this.score += 100

        }
    }

    apanharPoder() {
        if (this.mapa.apanharBatata(this.x, this.y)) {
            this.score += 150 //setScore
            this.boostSound.play()
            this.boostActivo = true;
            this.boostActivoAcabou = false;
            this.temporizador.forEach(tempo => clearTimeout(tempo));
            this.temporizador = [];


            let boostActivoTemporizador = setTimeout(() => {
                this.boostActivo = false;
                this.boostActivoAcabou = false
            }, 1000 * 6);

            this.temporizador.push(boostActivoTemporizador)

            let boostActivoAcabouTemporizador = setTimeout(() => {
                this.boostActivoAcabou = true;
            }, 1000 * 3)

            this.temporizador.push(boostActivoAcabouTemporizador)
        }

        //this.setScore(() => score  )
        
        
    }

    pegarProfs(profs) {
        if (this.boostActivo) {
            const colidiu = profs.filter((inimigo) => inimigo.colidiuCom(this));
            colidiu.forEach(inimigo => {
                profs.splice(profs.indexOf(inimigo), 1);
                this.pegarProfsSound.play()
            });


        }
    }

    setScore() {
        return this.score
    }

}
