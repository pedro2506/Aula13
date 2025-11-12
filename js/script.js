function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        alert('Por favor, preencha altura e peso corretamente!');
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';
    let classe = '';

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        classe = "abaixo-peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal";
        classe = "peso-normal";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
        classe = "sobrepeso";
    } else if (imc >= 30 && imc <= 39.9) {
        categoria = "Obesidade";
        classe = "obesidade";
    } else {
        categoria = "Obesidade grave";
        classe = "obesidade-grave";
    }

    resultado.className = `result show ${classe}`;
    resultado.innerHTML = `
        <h2>Seu IMC é ${imc.toFixed(2)}</h2>
        <p>${categoria}</p>
    `;
}

// Evento de clique no botão
document.getElementById('btnCalcular').addEventListener('click', calcularIMC);

// Calcular com Enter
document.getElementById('peso').addEventListener('keypress', e => {
    if (e.key === 'Enter') calcularIMC();
});

document.getElementById('altura').addEventListener('keypress', e => {
    if (e.key === 'Enter') calcularIMC();
});
