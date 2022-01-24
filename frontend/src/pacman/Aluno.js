export default class Aluno {
    constructor(x, y, tamanho, velocidade, espaço) {
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.espaço = espaço;
        this.carregarImagem();
    }

    draw(contexo) {

    }

    // carregarImagem() {
    //     const alunoImagem1 = new Image();
    //     alunoImagem.src = '/'

    //     const alunoImagem2 = new Image();
    //     alunoImagem.src = '/'

    //     const alunoImagem3 = new Image();
    //     alunoImagem.src = '/'

    //     const alunoImagem4 = new Image();
    //     alunoImagem.src = '/'
    // }
}