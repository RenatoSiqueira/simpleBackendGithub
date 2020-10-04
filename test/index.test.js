const request = require("supertest");
const app = require("../app");

describe("Testing API", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
    test("It should Error Message if language not passed on Query Params", async () => {
        const response = await request(app).get("/search");
        expect(response.text).toEqual('Use one of languages available on Github search')
        expect(response.statusCode).toBe(404);
    });
    test("It should Error Message if invalid option sended", async () => {
        const response = await request(app).get("/search?lang=react");
        expect(response.text).toEqual('Use one of options available on Github search')
        expect(response.statusCode).toBe(404);
    });
    test("It should return successful response", async () => {
        const response = await request(app).get("/search?lang=java");
        expect(response.statusCode).toBe(200);
    });
});
