const request = require('supertest');
const app = require('../src/app');

test('should return all students with status 200', async () => {
    const res = await request(app)
        .get('/students');

    expect(res.statusCode).toBe(200);
});

test('should return a student by id with status 200', async () => {
    const res = await request(app)
        .get('/students/1');

    expect(res.statusCode).toBe(200);
});

test('should return 404 for non-existent student', async () => {
    const res = await request(app)
        .get('/students/999');

    expect(res.statusCode).toBe(404);
});

test('should create a new student with status 201', async () => {
    const res = await request(app)
        .post('/students')
        .send({
            firstName: 'Miasm',
            lastName: 'Goob',
            age: 20
        });

    expect(res.statusCode).toBe(201);
});

test('should return 400 when required fields are missing', async () => {
    const res = await request(app)
        .post('/students')
        .send({
            firstName: 'Miasm'
        });

    expect(res.statusCode).toBe(400);
});