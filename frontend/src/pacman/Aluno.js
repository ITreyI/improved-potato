export default class Aluno {
    constructor(x, y, tamanho, velocidade, espaço) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.carregarImagem();
    }

    draw(contexto) {
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
}