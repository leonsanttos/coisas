function obterNumero() {
    const numero1 = parseFloat(document.getElementById("number1").value);
    const numero2 = parseFloat(document.getElementById("number2").value);
    return { numero1, numero2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = valor;
}

document.getElementById("soma").addEventListener("click", function () {
    const { numero1, numero2 } = obterNumero();
    mostrarResultado(numero1 + numero2);
});

document.getElementById("subtracao").addEventListener("click", function () {
    const { numero1, numero2 } = obterNumero();
    mostrarResultado(numero1 - numero2);
});

document.getElementById("multiplicacao").addEventListener("click", function () {
    const { numero1, numero2 } = obterNumero();
    mostrarResultado(numero1 * numero2);
});

document.getElementById("divisao").addEventListener("click", function () {
    const { numero1, numero2 } = obterNumero();
    if (numero2 === 0) {
        mostrarResultado("Erro: Divisão por zero!");
    } else {
        mostrarResultado(numero1 / numero2);
    }
});

