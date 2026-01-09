test("nome do teste", () => {
    const resultado = 1 + 1;
    const esperado = 2;

    expect(resultado).toBe(esperado);
});

test("outro teste", function () {
    const resultado = 1 + 1;
    const esperado = 2;

    expect(resultado).toBe(esperado);
});
test("um último teste", callBackFunction);

function callBackFunction() {
    const resultado = 1 + 1;
    const esperado = 2;

    expect(resultado).toBe(esperado);
}
