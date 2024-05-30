const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('User Authentication', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/users/register')
            .send({
                username: 'testuser',
                password: 'password',
                email: 'testuser@example.com'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual('User registered successfully');
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/users/login')
            .send({
                username: 'testuser',
                password: 'password'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should get the profile of the logged-in user', async () => {
        const loginRes = await request(app)
            .post('/users/login')
            .send({
                username: 'testuser',
                password: 'password'
            });
        const token = loginRes.body.token;

        const res = await request(app)
            .get('/users/profile')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.username).toEqual('testuser');
    });
});
