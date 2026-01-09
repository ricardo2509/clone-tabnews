function somar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erro: Argumentos inválidos";
    }
    return a + b;
}

function multiplicar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erro: Argumentos inválidos";
    }
    if (a > 9999999999 || b > 9999999999) {
        return "Overflow";
    }
    return a * b;
}

function dividir(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erro: Argumentos inválidos";
    }
    if (a <= 0 || b <= 0) {
        return "Divisão por zero ou número negativo";
    }
    return a / b;
}

module.exports = { somar, multiplicar, dividir };
