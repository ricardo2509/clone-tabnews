test("GET to /api/v1/status deve retornar status 200 e mensagem OK", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    const updated_at_is = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(updated_at_is);

    expect(responseBody.dependencies.database.version).toContain(
        "16.11 (f45eb12)",
    );
    expect(responseBody.dependencies.database.max_connections).toEqual(901);
    expect(responseBody.dependencies.database.open_connections).toEqual(1);
});
