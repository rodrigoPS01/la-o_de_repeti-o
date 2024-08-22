const numEstudantes = document.querySelector('#num_estudantes');
const botaoNumEstudantes = document.querySelector('#botao_num_estudantes');
const coletarNotas = document.querySelector('#coletar_notas');
const botaoCalcular = document.querySelector('#botao_calcular');
const resultados = document.querySelector('#resultados');
const media = document.querySelector('#media');
const maiorNota = document.querySelector('#maior_nota');
const menorNota = document.querySelector('#menor_nota');
const notasSection = document.querySelector('#notas');

botaoNumEstudantes.addEventListener('click', () => {
    coletarNotas.innerHTML = '';
    
    for (let i = 0; i < numEstudantes.value; i++) {
        const inputProfessor = document.createElement('input');
        inputProfessor.type = 'number';
        inputProfessor.id = `nota${i+1}`;
        inputProfessor.placeholder = `Nota do aluno ${i+1}`;
        coletarNotas.appendChild(inputProfessor);
        coletarNotas.appendChild(document.createElement('br'));
    }
    
    notasSection.style.display = 'block';
});

botaoCalcular.addEventListener('click', () => {
    let somaNotas = 0;
    let maiorNotaValor = -1;
    let menorNotaValor = 101;
    
    for (let i = 0; i < numEstudantes.value; i++) {
        const nota = parseFloat(document.getElementById(`nota${i+1}`).value);
        
        somaNotas += nota;
        
        if (nota > maiorNotaValor) {
            maiorNotaValor = nota;
        }
        if (nota < menorNotaValor) {
            menorNotaValor = nota;
        }
    }
    
    const mediaTurma = somaNotas / numEstudantes.value;
    
    media.textContent = `Média da turma: ${mediaTurma.toFixed(2)}`;
    maiorNota.textContent = `Maior nota: ${maiorNotaValor}`;
    menorNota.textContent = `Menor nota: ${menorNotaValor}`;
    resultados.style.display = 'block';
});
