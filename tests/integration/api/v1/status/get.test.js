test("GET to /api/v1/status deve retornar status 200 e mensagem OK", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ status: "ok" });
});
