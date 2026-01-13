import { Client } from "pg";
var fs = require("fs");

async function query(qry) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        ssl: true,
    });

    try {
        await client.connect();
        const result = await client.query(qry);
        return result;
    } catch (error) {
        console.log("Database query error:", error);
        throw error;
    } finally {
        await client.end();
    }
}

export default {
    query: query,
};
