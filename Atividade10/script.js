var aluno1 = new Object();
aluno1.ra = '0030482021020';
aluno1.nome = 'Edson';

var aluno2 = {};
aluno2.ra = '0030482021020';
aluno2.nome = 'Edson';

var aluno3 = {
    ra: '0030482021020',
    nome: 'Edson'
}

class Aluno {

    constructor(ra, nome) {
        this.ra = ra;
        this.nome = nome;
    }
}

var aluno4 = new Aluno('Edson', '0030482021020');

console.log('Objeto 1:', aluno1);
console.log('Objeto 2:', aluno2);
console.log('Objeto 3:', aluno3);
console.log('Objeto 4:', aluno4);

alert("Verifique os Objetos no console.");