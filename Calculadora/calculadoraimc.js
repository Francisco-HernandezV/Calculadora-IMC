document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Peso = parseFloat(document.getElementById('Peso').value);
    const Estatura = parseFloat(document.getElementById('Estatura').value) / 100;
    if (isNaN(Peso) && isNaN(Estatura) && Estatura === 0) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const imc = Peso / (Estatura * Estatura);
    const categoria = categorizeBMI(imc);

    document.getElementById('imc').textContent = `Tu IMC es: ${imc.toFixed(2)}`;
    document.getElementById('categoria').textContent = `Clasificación: ${categoria}`;
    document.getElementById('resultado').style.display = 'block';
});

function categorizeBMI(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (18.5 <= imc && imc < 24.9) {
        return 'Normal';
    } else if (25 <= imc && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}
