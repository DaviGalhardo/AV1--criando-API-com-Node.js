const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
    it('should return a list of items on GET /items', async () => {
        const response = await request(app).get('/items');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should create a new item on POST /items', async () => {
        const newItem = { name: 'Test Item' };
        const response = await request(app).post('/items').send(newItem);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newItem.name);
    });
});