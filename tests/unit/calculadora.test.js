const calculadora = require("../../models/calculadora");

test("soma 2 + 3 para ser igual a 5", () => {
    expect(calculadora.somar(2, 3)).toBe(5);
});

test("soma -5 + 5 para ser igual a 0", () => {
    expect(calculadora.somar(-5, 5)).toBe(0);
});

test("soma '-5' + 5 para ser argumento inválido", () => {
    expect(calculadora.somar("-5", 5)).toBe("Erro: Argumentos inválidos");
});

test("multiplicar 10000000000 + 9999999999 deve gerar overflow", () => {
    expect(calculadora.multiplicar(10000000000, 9999999999)).toBe("Overflow");
});

test("dividir 5 / 5 para ser igual a 1", () => {
    expect(calculadora.dividir(5, 5)).toBe(1);
});

test("dividir 0 / 5 deve gerar erro", () => {
    expect(calculadora.dividir(0, 5)).toBe(
        "Divisão por zero ou número negativo",
    );
});

test("dividir 5 / 0 deve gerar erro", () => {
    expect(calculadora.dividir(5, 0)).toBe(
        "Divisão por zero ou número negativo",
    );
});
