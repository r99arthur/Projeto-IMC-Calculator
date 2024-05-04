const button = document.getElementById('button');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');


const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
}

const imcCalc = () => {
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos!';
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `IMC: ${valorImc} - ${nome.value} está ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc);

// document.addEventListener('DOMContentLoaded', function () {
//     const resetButton = document.getElementById('reset');
    
//     resetButton.addEventListener('click', function () {
//         const inputs = document.querySelectorAll('.dados');
//         inputs.forEach(input => {
//             if (input.type === 'number') {
//                 input.value = '';  // Para campos numéricos, talvez você queira resetar para 0
//             } else {
//                 input.value = ''; // Para outros tipos de campos, resetamos para uma string vazia
//             } 
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var reloadButton = document.getElementById('reset');
    reloadButton.addEventListener('click', function() {
        location.reload();  // Esta função recarrega a página atual
    });
});
